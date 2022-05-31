import { LinkIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Text, useToast } from "@chakra-ui/react";
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
  const isQuizzValidated = percentScore >= validationScore;
  const textsDisplayed = {
    header: isQuizzValidated ? "Bravo" : "Oups",
    details: isQuizzValidated
      ? "Copie ton identifiant et rends-toi vendredi soir sur les réseaux sociaux de Troopers pour savoir si tu as gagné !"
      : "Rends-toi sur le marché de l’impact pour obtenir les bonnes réponses et en savoir plus sur le numérique responsable.",
    shareMyResult: `#QuizNumeriqueResponsable #Web2Day2022
    Mon score : ${score}/${questionNumber}
    Toi aussi tente de gagner une corbeille de fruits avec Graines d'ici et Troopers !
    https://quiz.troopers.agency/`,
  };

  const handleCopy = (title: string, textToCopy: string) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      toast({
        title,
        status: "success",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
      return navigator.clipboard.writeText(textToCopy);
    } else {
      toast({
        title: "L'accès au presse-papier n'est pas supporté sur ce navigateur",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
      return Promise.reject("The Clipboard API is not available.");
    }
  };

  return (
    <Box marginTop={6}>
      <Heading as="h1" size="4xl" textAlign="center" width={"100%"}>
        <UnderlineWord>{textsDisplayed.header}</UnderlineWord>
      </Heading>
      <CenterBlock flexProps={{ marginTop: 2 }} gap={5}>
        <Text as="span" align="center">
          Tu as obtenu
          <Heading as="p" size="2xl" textAlign="center">
            <Box as="span" color="green.500">
              {Math.round(percentScore)}%
            </Box>{" "}
            de bonnes réponses
          </Heading>
        </Text>

        <>
          {isQuizzValidated && (
            <CenterBlock
              gap={5}
              flexProps={{ paddingTop: 4, paddingBottom: 4 }}
            >
              <Text>Identifiant : {code}</Text>
              <Button
                leftIcon={<LinkIcon />}
                variant="outline"
                onClick={() => handleCopy("Identifiant copié", code)}
              >
                Copie ton identifiant
              </Button>
            </CenterBlock>
          )}
        </>
        <Text fontWeight="bold" textAlign="center">
          {textsDisplayed.details}
        </Text>
        <Flex width="100%" justify="space-evenly">
          {!isQuizzValidated ? (
            <Button
              colorScheme="green"
              color="green.900"
              size="md"
              borderRadius={50}
              onClick={() => Router.push("/")}
              py={5}
              variant="outline"
            >
              Recommencer
            </Button>
          ) : (
            <></>
          )}
          <Button
            colorScheme="green"
            bg="green.900"
            size="md"
            borderRadius={50}
            onClick={() =>
              handleCopy("Score copié", textsDisplayed.shareMyResult)
            }
            py={5}
          >
            Partager mon score
          </Button>
        </Flex>
      </CenterBlock>
    </Box>
  );
};
