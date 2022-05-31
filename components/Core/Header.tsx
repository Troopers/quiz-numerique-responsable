import { Box, Flex, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import GrainesdiciLogo from "../../public/images/Graines d'ici-logo.png";
import TroopersLogo from "../../public/images/Troopers-logo.png";

export const Header = () => {
  return (
    <Flex px={5} align="center" justify="space-between" w="100%">
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
