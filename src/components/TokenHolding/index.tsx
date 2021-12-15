import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
} from "@mui/material";
import type { Holding } from "../../types";
import { PriceDiffs } from "..";
import { toUSD } from "../../utils";

export default function TokenHolding(props: Holding) {
  const {
    name,
    symbol,
    balance,
    image,
    rate,
    value,
    diff,
    diff7d,
    diff30d,
    coingecko,
  } = props;

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        paddingLeft: 1,
        height: 200,
      }}
      elevation={10}
    >
      <CardMedia
        component="img"
        sx={{ width: 75, height: 75, borderRadius: "50%" }}
        image={`https://ethplorer.io/${image}`}
        alt={`${name} logo`}
      />
      <Box
        sx={{
          display: "flex",
          margin: "auto",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5" noWrap={true}>
            {name}
          </Typography>
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Typography
              variant="subtitle1"
              color="text.secondary"
              noWrap={true}
            >
              {symbol}
            </Typography>
            <Avatar sx={{ height: 30, width: 30 }}>
              <a
                href={`https://www.coingecko.com/en/coins/${coingecko}`}
                target="__blank"
              >
                <img src="/coingecko.png" alt="CoinGecko-logo" height={30} />
              </a>
            </Avatar>
          </Box>
          <Typography
            component="div"
            variant="h6"
            color="text.secondary"
            noWrap={true}
          >
            {balance.toFixed(2)} @ {toUSD(rate)}
          </Typography>
          <Typography
            component="div"
            variant="h5"
            color="green"
            noWrap={true}
            gutterBottom
          >
            {toUSD(value)}
          </Typography>
          <PriceDiffs diff={diff} diff7d={diff7d} diff30d={diff30d} />
        </CardContent>
      </Box>
    </Card>
  );
}
