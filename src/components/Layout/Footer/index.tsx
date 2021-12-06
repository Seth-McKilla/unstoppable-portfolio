import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex justifyContent="center" alignItems="center" height="56px">
      <Text>
        Made with ❤ by{" "}
        <b>
          <a href="https://github.com/Seth-McKilla" target="__blank">
            Seth
          </a>
        </b>{" "}
        and{" "}
        <b>
          <a href="https://github.com/Pfed-prog" target="__blank">
            Pavel
          </a>
        </b>
      </Text>
    </Flex>
  );
};

export default Footer;
