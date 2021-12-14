import React from "react";
import { Typography } from "@mui/material";
import { type User } from "../../types";

type Props = {
  user: User;
};

export default function Profile(props: Props) {
  const { user } = props;

  return (
    <>
      <Typography variant="h3" align="center" pt={12}>
        Profile Page
      </Typography>
      <Typography variant="h6" align="center">
        Welcome to the profile page
      </Typography>
      <Typography variant="h6" align="center">
        {user?.wallet_address}
      </Typography>
    </>
  );
}
