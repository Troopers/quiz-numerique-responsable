import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";

interface CompanyInfoProps {
  companyNameInfo: string;
}

export const CompanyInfo: FC<CompanyInfoProps> = ({ companyNameInfo }) => {
  return (
    <Box>
      <Text align="center">
        Pour plus d’informations, rends toi sur le marché de l’impact et va voir
        le stand de {companyNameInfo}
      </Text>
      <Box pos="relative" w="100px" h="50px" mt={4} mx="auto">
        <Image
          src={`/images/${companyNameInfo}-logo.png`}
          alt={`${companyNameInfo} Logo`}
          layout="fill"
          objectFit="contain"
        />
      </Box>
    </Box>
  );
};
