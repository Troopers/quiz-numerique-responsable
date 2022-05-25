import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";

interface CompanyInfoProps {
  company: string;
}

const companyNames = ["Troopers", "Stratosfair"];

export const CompanyInfo: FC<CompanyInfoProps> = ({ company }) => {
  return (
    <Box>
      <Text align="center">
        Pour plus d’informations, rends toi sur le marché de l’impact et va voir
        le stand de {company}
      </Text>
      <Box pos="relative" w="100px" h="50px" mt={4} mx="auto">
        {companyNames.includes(company) && (
          <Image
            src={`/images/${company}-logo.png`}
            alt={`${company} Logo`}
            layout="fill"
            objectFit="contain"
          />
        )}
      </Box>
    </Box>
  );
};
