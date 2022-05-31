import { Container, Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { QuizzHead } from "../components/Core/Head";
import { Header } from "../components/Core/Header";
import { Footer } from "../components/Footer";
import { Result } from "../components/Result";

const Results: NextPage = ({}) => {
  const router = useRouter();
  const { query } = router;
  useEffect(() => {
    if (!query?.score || !query?.code) {
      router.push("/");
    }
  }, []);

  return (
    <>
      <QuizzHead title={"Le quiz du numérique responsable - Résultats"} />
      <Flex direction="column" justify="center">
        {query?.score && query?.code && (
          <Container position="relative" mb={6}>
            <Header />
            <Result
              score={parseInt(query.score as string)}
              code={query.code as string}
              questionNumber={parseInt(query.questionNumber as string)}
            />
          </Container>
        )}
        <Footer />
      </Flex>
    </>
  );
};

export default Results;
