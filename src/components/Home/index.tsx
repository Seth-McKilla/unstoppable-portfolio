import React from "react";
import { Typography, Container } from "@mui/material";

export default function Home() {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" align="center">
        Welcome to the Unstoppable Portfolio
      </Typography>
      <Typography variant="h6" align="center">
        View your ERC-20 token holdings with one simple login powered by
        Unstoppable Domains.
      </Typography>
      <Typography variant="h6" align="center">
        <b>Login now using the button up there ↗</b>
      </Typography>
    </Container>
  );
}
