import {Box, Button, Heading, Spacer, Flex, Text} from "@chakra-ui/react";
import type { NextPage } from "next";
import Router from "next/router";
import { Layout } from "../components/Core/Layout";
import { UnderlineWord } from "../components/Core/UnderlineWord";

const Home: NextPage = () => {
  return (
    <Layout title="Le quiz du numérique responsable - Accueil">

      <Spacer />
      <Heading as="h1" size="3xl" textAlign="center">
        Le quiz du numérique <UnderlineWord>responsable</UnderlineWord>
      </Heading>

      <Spacer />
      {/*<Text align="center">*/}
      {/*  Si tu as 60% de bonnes réponses ou plus, tu pourras peut être gagner*/}
      {/*  <Text as="strong" ml={1}>*/}
      {/*    une corbeille de fruits de 5 kg avec Graines d&rsquo;ici !**/}
      {/*  </Text>*/}
      {/*</Text>*/}
      {/*<Text align="center" fontSize="xs">*/}
      {/*  *Jeu valable du mercredi 1<sup>er</sup> 10h au vendredi 3 juin 14h, lot*/}
      {/*  uniquement disponible sur le bassin nantais.*/}
      {/*</Text>*/}
      <Box>
        <Text align="center" mb={4} aria-label="Durée : 5 minutes">
          ⌛ 5 minutes
        </Text>

        <Button
          colorScheme="green"
          bg="green.900"
          size="lg"
          borderRadius={50}
          onClick={() => Router.push("/quizz")}
        >
          C&rsquo;est parti !
        </Button>
      </Box>
    </Layout>
  );
};

export default Home;
