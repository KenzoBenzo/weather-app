import React from "react";
import "../components/layout.css";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import customTheme from "../theme";
import Sidebar from "../components/sidebar";
import Main from "../components/main";

const Layout = ({ Component, pageProps }) => {
  const date = new Date();
  // const data = useStaticQuery(graphql`
  //   query {
  //     allWeather {
  //       weatherForecast(city: "Kansas City") {
  //         cod
  //         message
  //         cnt
  //         tempFAvg
  //         tempCAvg
  //         pressureAvg
  //         humidityAvg
  //         list {
  //           precipProbability
  //           wind {
  //             speed
  //           }
  //           weather {
  //             main
  //             description
  //           }
  //           main {
  //             maxTempC
  //             minTempC
  //             pressure
  //           }
  //           dateText
  //           visibility
  //         }
  //         city {
  //           name
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <>
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
    </>
  );
};

export default Layout;
