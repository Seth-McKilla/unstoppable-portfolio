import React from "react";
import { Typography, Container, Box } from "@mui/material";

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
      <Box sx={{ height: 150 }}>
        <img
          src="/UP-logos_black.png"
          alt="UP-logo"
          style={{ height: "100%" }}
        />
      </Box>
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
