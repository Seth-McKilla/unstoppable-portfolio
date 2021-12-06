import dynamic from "next/dynamic";
import { Flex, Button } from "@chakra-ui/react";
const uauth = dynamic(() => import("../../../uauth"), { ssr: false });

const Navbar = () => {
  const handleClick = async () => {
    try {
      const authorization = await uauth.login();
      console.log(authorization);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Flex
      as="nav"
      justifyContent="flex-end"
      padding={2}
      backgroundColor="gray.200"
    >
      <Button colorScheme="purple" onClick={handleClick}>
        Login with Unstoppable
      </Button>
    </Flex>
  );
};

export default Navbar;
