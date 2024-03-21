import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import GrainesdiciLogo from "../../public/images/Graines d'ici-logo.png";
import TroopersLogo from "../../public/images/Troopers-logo.png";

export const Header = () => {
  return (
    <Flex as="header" px={5} align="center" justify="center" w="100%">
      <Box>
        <Image src={TroopersLogo} alt="Troopers Logo" />
      </Box>
    </Flex>
  );
};
