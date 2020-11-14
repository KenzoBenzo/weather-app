import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import HourlyCard from "../components/hourlyCard";

const HourlyPage = () => {
  // const data = useStaticQuery(
  //   graphql`
  //     query GET_HOURLY {
  //       allWeather {
  //         weatherForecast(city: "Kansas City") {
  //           list {
  //             main {
  //               minTempC
  //               maxTempC
  //               feelsLikeC
  //             }
  //             dateText
  //             precipProbability
  //           }
  //         }
  //       }
  //     }
  //   `
  // )
  return (
    <>
      <SimpleGrid
        columns={4}
        rows={2}
        spacingX={8}
        spacingY={16}
        overflow="auto"
      >
        {/* {data.allWeather.weatherForecast.list.map((hour, index) => ( */}
        <HourlyCard
          // key={index}
          day={/*hour.dateText*/ 0}
          image="https://media.graphcms.com/2tpG5s0MQnq0uxSxJkXS"
          high={/*Math.round(hour.main.maxTempC)*/ 0}
          low={/*Math.round(hour.main.minTempC)*/ 0}
          precipitation={/*hour.precipProbability + `%`*/ 0}
        />
        {/*))}*/}
      </SimpleGrid>
    </>
  );
};

export default HourlyPage;
