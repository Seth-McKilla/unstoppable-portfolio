import React from "react";
import { Typography } from "@mui/material";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

type Props = {
  type: string;
  diff: number;
};

export default function PriceDiff(props: Props) {
  const { type, diff } = props;
  const neg = Math.sign(diff) < 0;
  const icon = () => {
    if (neg) {
      return <ArrowCircleDownIcon sx={{ marginLeft: 0.5 }} />;
    } else {
      return <ArrowCircleUpIcon sx={{ marginLeft: 0.5 }} />;
    }
  };

  return (
    <>
      <Typography
        variant="body1"
        color={neg ? "red" : "green"}
        sx={{ display: "flex" }}
      >
        <b>{type}</b> {icon()}
      </Typography>
      <Typography variant="body1" color={neg ? "red" : "green"}>
        {`${diff.toFixed(2)}%`}
      </Typography>
    </>
  );
}
