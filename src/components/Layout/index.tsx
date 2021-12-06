import { ReactNode } from "react";
import { Container, Box } from "@mui/material";
import PerfectScrollbar from "react-perfect-scrollbar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="md">
        <PerfectScrollbar>
          <Box
            sx={{
              height: "calc(100vh - 112px)",
            }}
          >
            {children}
          </Box>
        </PerfectScrollbar>
        <Footer />
      </Container>
    </div>
  );
};

export default Layout;
