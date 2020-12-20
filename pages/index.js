import React from "react";
import { Box, Heading, Text, Stack, Icon, SimpleGrid } from "@chakra-ui/react";
import HighlightCard from "../components/highlightCard";
import DailyCard from "../components/dailyCard";
import { request } from "graphql-request";
import useSWR from "swr";
import Link from "next/link";
import { ApolloClient, InMemoryCache, useQuery, gql } from "@apollo/client";

const WEATHER_QUERY = gql`
  {
    weatherForecast(city: "Kansas City") {
      humidityAvg
      pressureAvg
      list {
        main {
          maxTempC
          minTempC
        }
        wind {
          speed
        }
        visibility
      }
    }
  }
`;
// const fetcher = async (query) => {
//   const res = await request(
//     "https://graphql-weather-app.herokuapp.com/",
//     query
//   );

//   if (!res.ok) {
//     const error = new Error("index query failed!");
//     error.info = await res.json();
//     error.status = res.status;
//     throw error;
//   }

//   return res.json();
// };

const IndexPage = () => {
  const { loading, error, data } = useQuery(WEATHER_QUERY);
  //   const { data, error } = useSWR(
  //     `{
  //   weatherForecast(city: "Kansas City") {
  //     humidityAvg
  //     pressureAvg
  //     list {
  //       main {
  //         maxTempC
  //         minTempC
  //       }
  //       wind {
  //         speed
  //       }
  //       visibility
  //     }
  //   }
  // }`,
  //     fetcher
  //   );
  //   console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error</p>;

  return (
    <>
      <SimpleGrid columns={5} rows="auto-fit" spacing={8} overflow="auto">
        <Link href="/hourly">
          <a>
            <DailyCard
              day="Tomorrow"
              image="https://media.graphcms.com/2tpG5s0MQnq0uxSxJkXS"
              high={/*Math.round(data.weatherForecast.list[0].main.maxTempC*/ 0}
              low={/*Math.round(data.weatherForecast.list[0].main.minTempC)*/ 0}
            />
          </a>
        </Link>
        <DailyCard
          day="Sun, 7 Jun"
          image="https://media.graphcms.com/2tpG5s0MQnq0uxSxJkXS"
          high={/*Math.round(data.weatherForecast.list[6].main.maxTempC)*/ 0}
          low={/*Math.round(data.weatherForecast.list[6].main.minTempC)*/ 0}
        />
        <DailyCard
          day="Mon, 8 Jun"
          image="https://media.graphcms.com/2tpG5s0MQnq0uxSxJkXS"
          high={/*Math.round(data.weatherForecast.list[0].main.maxTempC)*/ 0}
          low={/*Math.round(data.weatherForecast.list[0].main.minTempC)*/ 0}
        />
        <DailyCard
          day="Mon, 8 Jun"
          image="https://media.graphcms.com/2tpG5s0MQnq0uxSxJkXS"
          high={/*Math.round(data.weatherForecast.list[0].main.maxTempC)*/ 0}
          low={/*Math.round(data.weatherForecast.list[0].main.minTempC)*/ 0}
        />
        <DailyCard
          day="Mon, 8 Jun"
          image="https://media.graphcms.com/2tpG5s0MQnq0uxSxJkXS"
          high={/*Math.round(data.weatherForecast.list[0].main.maxTempC)*/ 0}
          low={/*Math.round(data.weatherForecast.list[0].main.minTempC)*/ 0}
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
          value={/*Math.round(data.weatherForecast.list[0].wind.speed)*/ 0}
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
          value={/*Math.round(data.weatherForecast.humidityAvg)*/ 0}
          label="%"
        />
        <HighlightCard
          condition="Visibility"
          value={/*data.weatherForecast.list[0].visibility / 1000*/ 0}
          label="km"
        />
        <HighlightCard
          condition="Air pressure"
          value={/*Math.round(data.weatherForecast.pressureAvg)*/ 0}
          label="mb"
        />
      </SimpleGrid>
    </>
  );
};

export default IndexPage;
