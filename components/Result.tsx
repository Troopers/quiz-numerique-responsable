import { LinkIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import { CenterBlock } from "./Core/CenterBlock";
import { UnderlineWord } from "./Core/UnderlineWord";
import { Footer } from "./Footer";

interface ResultProps {
  score: number;
  code: string;
}

export const Result: FC<ResultProps> = ({ score, code }) => {
  const percentScore = (score / 15) * 100;
  const isQuizzValidated = percentScore > 50;
  const textsDisplayed = {
    header: isQuizzValidated ? "Bravo" : "Oups",
    details: isQuizzValidated
      ? "Et rends toi vendredi soir sur les réseaux sociaux de Troopers pour savoir si tu as gagné !"
      : "Rends toi sur le marché de l’impact pour obtenir les bonnes réponses et en savoir plus sur le numérique responsable.",
  };

  const handleCopy = () => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(code);
    }
    return Promise.reject("The Clipboard API is not available.");
  };

  return (
    <Box>
      <Heading as="h1" size="4xl" textAlign="center" width={"100%"}>
        <UnderlineWord>{textsDisplayed.header}</UnderlineWord>
      </Heading>
      <CenterBlock gap={2}>
        <Text>Tu as obtenu</Text>
        <Heading as="p" size="2xl" textAlign="center">
          {percentScore} % de bonnes réponses
        </Heading>
      </CenterBlock>
      <CenterBlock gap={2}>
        <Text>Copie ton identifiant</Text>
        <Button leftIcon={<LinkIcon />} variant="outline" onClick={handleCopy}>
          {code}
        </Button>
        <Text fontWeight="bold" textAlign="center">
          {textsDisplayed.details}
        </Text>
      </CenterBlock>
    </Box>
  );
};
