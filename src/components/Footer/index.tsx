import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box>
      <Typography
        variant="body1"
        sx={{
          position: "fixed",
          backgroundColor: "background.paper",
          padding: "0.5rem",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          bottom: 0,
        }}
      >
        Made with 💗 by
        <b>
          <a
            href="https://github.com/Seth-McKilla"
            target="__blank"
            style={{ marginLeft: "6px" }}
          >
            Seth
          </a>
        </b>
      </Typography>
    </Box>
  );
};

export default Footer;
