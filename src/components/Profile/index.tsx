import React, { useState, useEffect } from "react";
import { Typography, Grid, Box, Container } from "@mui/material";
import type { User, Token, Holding } from "../../types";
import { toUSD, calcOverallDiffs } from "../../utils";
import { TokenHolding, PriceDiffs } from "..";

type Props = {
  user: User;
};

export default function Profile(props: Props) {
  const { user } = props;
  // const wallet_address = user?.wallet_address;
  const wallet_address = user;

  const [holdings, setHoldings] = useState<Holding[]>([]);

  useEffect(() => {
    if (wallet_address) {
      (async () => {
        try {
          const response = await fetch(
            `https://api.ethplorer.io/getAddressInfo/${wallet_address}?apiKey=${process.env.REACT_APP_ETHPLORER_API_KEY}`
          );
          const data = await response.json();

          const ethHolding: Holding = {
            name: "Ethereum",
            symbol: "ETH",
            balance: data.ETH.balance,
            image: "/images/eth.png",
            rate: data.ETH.price.rate,
            value: data.ETH.balance * data.ETH.price.rate,
            diff: data.ETH.price.diff,
            diff7d: data.ETH.price.diff7d,
            diff30d: data.ETH.price.diff30d,
            coingecko: "ethereum",
          };

          const holdings =
            data.tokens.length > 0 &&
            data.tokens
              .filter((token: Token) => !!token.tokenInfo.coingecko) // Filter out non ERC-20 tokens
              .map((token: Token) => {
                const {
                  name,
                  symbol,
                  image,
                  decimals,
                  coingecko,
                  price: { rate, diff, diff7d, diff30d },
                } = token.tokenInfo;

                const balance = token.balance * Math.pow(10, +decimals * -1);

                return {
                  name,
                  symbol,
                  balance,
                  image,
                  rate,
                  value: balance * rate,
                  diff,
                  diff7d,
                  diff30d,
                  coingecko,
                };
              });

          return setHoldings([ethHolding, ...holdings]);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [wallet_address]);

  const { diff, diff7d, diff30d } = holdings && calcOverallDiffs(holdings);

  return (
    <Container sx={{ marginTop: 12 }}>
      <Typography variant="h3" align="center" gutterBottom>
        My Portfolio
      </Typography>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h4" align="center" gutterBottom color="green">
          Total Value:{" "}
          {toUSD(holdings.reduce((acc, curr) => acc + curr.value, 0))}
        </Typography>
        <Box
          sx={{
            width: 300,
            marginBottom: 4,
          }}
        >
          <PriceDiffs diff={diff} diff7d={diff7d} diff30d={diff30d} />
        </Box>
      </Box>
      <Grid container spacing={3}>
        {holdings &&
          holdings.map((holding: Holding) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={holding.symbol}>
                <TokenHolding {...holding} />
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
}
