import { Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import { Layout } from "../components/Core/Layout";
import { Footer } from "../components/Footer";
import { Result } from "../components/Result";

const Results: NextPage = (props) => {
  const score = 12;
  const code = "mycode";

  return (
    <Flex flexDirection="column" justify="space-between">
      <Layout>
        <Result score={score} code={code} />
      </Layout>
      <Footer />
    </Flex>
  );
};

export default Results;
