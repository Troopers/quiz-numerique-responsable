import { Box, Button, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Router from "next/router";
import { Layout } from "../components/Core/Layout";
import { UnderlineWord } from "../components/Core/UnderlineWord";

const Home: NextPage = () => {
  return (
    <Layout>
      <Heading as="h1" size="3xl" textAlign="center">
        Le quizz du numérique <UnderlineWord>responsable</UnderlineWord>
      </Heading>
      <Text align="center">
        Si tu as 80% de bonnes réponses ou plus, tu pourras peut être gagner
        <Text as="strong" ml={1}>
          une corbeille de fruits de 5kg avec Graines d&rsquo;ici !
        </Text>
      </Text>
      <Box>
        <Text align="center" mb={4}>
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
