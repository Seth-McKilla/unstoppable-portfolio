import React from "react";
import { Typography } from "@mui/material";
import { Layout } from "./components";

export default function Profile() {
  return (
    <div>
      <Layout>
        <Typography variant="h3" align="center" pt={12}>
          Profile Page
        </Typography>
        <Typography variant="h6" align="center">
          Welcome to the profile page
        </Typography>
      </Layout>
    </div>
  );
}
