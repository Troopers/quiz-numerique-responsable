import { Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import { Layout } from "../components/Core/Layout";
import { Footer } from "../components/Footer";
import { Result } from "../components/Result";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Results: NextPage = ({}) => {
  const router = useRouter();
  const { query } = router;
  useEffect(() => {
    if (!query?.score || !query?.code) {
      router.push("/");
    }
  }, []);

  return (
    <Flex flexDirection="column" justify="space-between">
      {query?.score && query?.code ? (
        <Layout>
          <Result
            score={parseInt(query.score as string)}
            code={query.code as string}
            questionNumber={parseInt(query.questionNumber as string)}
          />
        </Layout>
      ) : null}
      <Footer />
    </Flex>
  );
};

export default Results;
