import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import HourlyCard from "../components/hourlyCard";
import { request, gql } from "graphql-request";
import useSWR from "swr";

const fetcher = async (query) => {
  const res = await request(
    "https://graphql-weather-app.herokuapp.com/",
    query
  );

  if (!res.ok) {
    const error = new Error("hourly query failed!");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

const HourlyPage = () => {
  const { data, error } = useSWR(
    `{
      weatherForecast(city: "Kansas City") {
        list {
          main {
            minTempC
            maxTempC
            feelsLikeC
          }
          dateText
          precipProbability
        }
      }
    }
    `,
    fetcher
  );
  console.log(data + " hourly" + error);
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
