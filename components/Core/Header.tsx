import { Box, Flex, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import StratosfairLogo from "../../assets/images/stratosfair-logo.png";
import TroopersLogo from "../../assets/images/Troopers-logo.png";

export const Header = () => {
  return (
    <Flex p={5} align="center">
      <Box>
        <Image src={TroopersLogo} alt="Troopers Logo" />
      </Box>
      <Spacer />
      <Box>
        <Image src={StratosfairLogo} alt="Stratosfair Logo" />
      </Box>
    </Flex>
  );
};
