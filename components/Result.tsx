import { LinkIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, Text, useToast } from "@chakra-ui/react";
import Router from "next/router";
import { FC } from "react";
import { CenterBlock } from "./Core/CenterBlock";
import { UnderlineWord } from "./Core/UnderlineWord";

interface ResultProps {
  score: number;
  code: string;
  questionNumber: number;
}

export const Result: FC<ResultProps> = ({
  score,
  code,
  questionNumber = 10,
}) => {
  const toast = useToast();
  const validationScore: number = 80;
  const percentScore = (score / questionNumber) * 100;
  const isQuizzValidated = percentScore > validationScore;
  const textsDisplayed = {
    header: isQuizzValidated ? "Bravo" : "Oups",
    details: isQuizzValidated
      ? "Et rends toi vendredi soir sur les réseaux sociaux de Troopers pour savoir si tu as gagné !"
      : "Rends toi sur le marché de l’impact pour obtenir les bonnes réponses et en savoir plus sur le numérique responsable.",
  };

  const handleCopy = () => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      toast({
        title: "Identifiant copié",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      return navigator.clipboard.writeText(code);
    }
    return Promise.reject("The Clipboard API is not available.");
  };

  return (
    <Box marginTop={6}>
      <Heading as="h1" size="4xl" textAlign="center" width={"100%"}>
        <UnderlineWord>{textsDisplayed.header}</UnderlineWord>
      </Heading>
      <CenterBlock flexProps={{ marginTop: 2 }} gap={5}>
        <Text>Tu as obtenu</Text>
        <Heading as="p" size="2xl" textAlign="center">
          <Box as="span" color="green.500">
            {Math.round(percentScore)}%
          </Box>{" "}
          de bonnes réponses
        </Heading>

        <>
          {isQuizzValidated && (
            <CenterBlock
              gap={5}
              flexProps={{ paddingTop: 4, paddingBottom: 4 }}
            >
              <Text>Copie ton identifiant</Text>
              <Button
                leftIcon={<LinkIcon />}
                variant="outline"
                onClick={handleCopy}
              >
                {code}
              </Button>
            </CenterBlock>
          )}
        </>
        <Text fontWeight="bold" textAlign="center">
          {textsDisplayed.details}
        </Text>
        <Button
          colorScheme="green"
          bg="green.900"
          size="lg"
          borderRadius={50}
          onClick={() => Router.push("/")}
          py={5}
        >
          Recommencer
        </Button>
      </CenterBlock>
    </Box>
  );
};
