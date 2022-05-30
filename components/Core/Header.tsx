import { Box, Flex, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import GrainesdiciLogo from "../../public/images/Graines d'ici-logo.webp";
import TroopersLogo from "../../public/images/Troopers-logo.webp";

export const Header = () => {
  return (
    <Flex p={2} align="center">
      <Box>
        <Image src={TroopersLogo} alt="Troopers Logo" />
      </Box>
      <Spacer />
      <Box>
        <Image src={GrainesdiciLogo} alt="Grainesdici Logo" />
      </Box>
    </Flex>
  );
};
