import React from "react";
import { Grid } from "@mui/material";
import type { Diffs } from "../../types";
import PriceDiff from "./PriceDiff";

export default function PriceDiffs(props: Diffs) {
  const { diff, diff7d, diff30d } = props;

  return (
    <Grid container spacing={1}>
      <Grid container item xs={4} flexDirection="column">
        <PriceDiff type="24h" diff={diff} />
      </Grid>
      <Grid container item xs={4} flexDirection="column">
        <PriceDiff type="7d" diff={diff7d} />
      </Grid>
      <Grid container item xs={4} flexDirection="column">
        <PriceDiff type="30d" diff={diff30d} />
      </Grid>
    </Grid>
  );
}
