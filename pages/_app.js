import React from "react";
import "../components/layout.css";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import customTheme from "../theme";
import Sidebar from "../components/sidebar";
import Main from "../components/main";
import { ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql-weather-app.herokuapp.com/",
  cache: new InMemoryCache(),
});

const Layout = ({ Component, pageProps }) => {
  return (
    <>
      <ApolloProvider client={client}>
        <ChakraProvider theme={customTheme}>
          <main>
            <Flex
              minH="100vh"
              w="100%"
              direction={["column", "column", "column", "row"]}
            >
              <Sidebar />
              <Main>
                <Component {...pageProps} />
              </Main>
            </Flex>
          </main>
        </ChakraProvider>
      </ApolloProvider>
    </>
  );
};

export default Layout;
