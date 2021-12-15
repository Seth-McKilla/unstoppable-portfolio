import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import type { Holding } from "../../types";
import { toUSD } from "../../utils";

export default function TokenHolding(props: Holding) {
  const { name, symbol, balance, image, rate, value } = props;

  return (
    <Card sx={{ display: "flex", height: 150 }} elevation={10}>
      <CardMedia
        component="img"
        sx={{ width: 75, height: 75, margin: "auto", borderRadius: "50%" }}
        image={`https://ethplorer.io/${image}`}
        alt={`${name} logo`}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5" noWrap={true}>
            {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" noWrap={true}>
            {symbol}
          </Typography>
          <Typography
            component="div"
            variant="h6"
            color="text.secondary"
            noWrap={true}
          >
            {balance.toFixed(2)} @ {toUSD(rate)}
          </Typography>
          <Typography component="div" variant="h5" color="green" noWrap={true}>
            {toUSD(value)}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
