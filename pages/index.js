import React from "react";
import { Box, Heading, Text, Stack, Icon, SimpleGrid } from "@chakra-ui/react";
import HighlightCard from "../components/highlightCard";
import DailyCard from "../components/dailyCard";

const IndexPage = () => {
  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       allWeather {
  //         weatherForecast(city: "Kansas City") {
  //           cod
  //           message
  //           cnt
  //           tempFAvg
  //           tempCAvg
  //           pressureAvg
  //           humidityAvg
  //           list {
  //             precipProbability
  //             wind {
  //               speed
  //             }
  //             weather {
  //               main
  //               description
  //             }
  //             main {
  //               maxTempC
  //               minTempC
  //               pressure
  //             }
  //             dateText
  //             visibility
  //           }
  //           city {
  //             name
  //           }
  //         }
  //       }
  //     }
  //   `
  // )

  return (
    <>
      <SimpleGrid columns={5} rows="auto-fit" spacing={8} overflow="auto">
        <DailyCard
          day="Tomorrow"
          image="https://media.graphcms.com/2tpG5s0MQnq0uxSxJkXS"
          high={/*Math.round(allWeather.cityWeather.max_temp)*/ 0}
          low={/*Math.round(allWeather.cityWeather.min_temp)*/ 0}
        />
        <DailyCard
          day="Sun, 7 Jun"
          image="https://media.graphcms.com/2tpG5s0MQnq0uxSxJkXS"
          high={/*Math.round(allWeather.cityWeather.max_temp)*/ 0}
          low={/*Math.round(allWeather.cityWeather.min_temp)*/ 0}
        />
        <DailyCard
          day="Mon, 8 Jun"
          image="https://media.graphcms.com/2tpG5s0MQnq0uxSxJkXS"
          high={/*Math.round(allWeather.cityWeather.max_temp)*/ 0}
          low={/*Math.round(allWeather.cityWeather.min_temp)*/ 0}
        />
        <DailyCard
          day="Mon, 8 Jun"
          image="https://media.graphcms.com/2tpG5s0MQnq0uxSxJkXS"
          high={/*Math.round(allWeather.cityWeather.max_temp)*/ 0}
          low={/*Math.round(allWeather.cityWeather.min_temp)*/ 0}
        />
        <DailyCard
          day="Mon, 8 Jun"
          image="https://media.graphcms.com/2tpG5s0MQnq0uxSxJkXS"
          high={/*Math.round(allWeather.cityWeather.max_temp)*/ 0}
          low={/*Math.round(allWeather.cityWeather.min_temp)*/ 0}
        />
      </SimpleGrid>
      <Heading as="h1" mt={16} fontSize={["24px", "32px"]}>
        Today's Highlights
      </Heading>

      <SimpleGrid
        columns={2}
        rows={2}
        spacing={12}
        mt={8}
        minChildWidth={["234px", "234px", "234px", "234px", "324px"]}
      >
        <HighlightCard
          condition="Wind status"
          value={
            /*Math.round(data.allWeather.weatherForecast.list[0].wind.speed)*/ 0
          }
          label="mph"
        >
          <Stack isInline alignItems="center">
            <Box
              size="32px"
              backgroundColor="gray.700"
              rounded="full"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Icon name="west" />
            </Box>
            <Text>WSW</Text>
          </Stack>
        </HighlightCard>
        <HighlightCard
          condition="Humidity"
          value={/*Math.round(data.allWeather.weatherForecast.humidityAvg)*/ 0}
          label="%"
        />
        <HighlightCard
          condition="Visibility"
          value={
            /*data.allWeather.weatherForecast.list[0].visibility / 1000*/ 0
          }
          label="km"
        />
        <HighlightCard
          condition="Air pressure"
          value={/*Math.round(data.allWeather.weatherForecast.pressureAvg)*/ 0}
          label="mb"
        />
      </SimpleGrid>
    </>
  );
};

export default IndexPage;
