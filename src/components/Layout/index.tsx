import { ReactNode } from "react";
import { Container, Center } from "@chakra-ui/react";
import PerfectScrollbar from "react-perfect-scrollbar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <Container maxW="container.md">
        <PerfectScrollbar>
          <Center height="calc(100vh - 112px)" flexDirection="column">
            {children}
          </Center>
        </PerfectScrollbar>
        <Footer />
      </Container>
    </div>
  );
};

export default Layout;
