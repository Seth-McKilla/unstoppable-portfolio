import React from "react";
import { Typography } from "@mui/material";
import { Layout } from "./components";

export default function Home() {
  return (
    <div>
      <Layout>
        <Typography variant="h3" align="center" pt={12}>
          Welcome to the Unstoppable Portfolio
        </Typography>
        <Typography variant="h6" align="center">
          Login with the Unstoppable Login button in the top right to continue
        </Typography>
      </Layout>
    </div>
  );
}