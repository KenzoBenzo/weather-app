import React from "react"
import { Box, Heading, Text, Stack, Icon, SimpleGrid } from "@chakra-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import sleet from "../images/Sleet.png"
import thunderstorm from "../images/Thunderstorm.png"
import clear from "../images/Clear.png"
import lightCloud from "../images/LightCloud.png"
import snow from "../images/Snow.png"
import HighlightCard from "../components/highlightCard"
import DailyCard from "../components/dailyCard"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allWeather {
          weatherForecast(city: "Kansas City") {
            cod
            message
            cnt
            tempFAvg
            tempCAvg
            pressureAvg
            humidityAvg
            list {
              precipProbability
              wind {
                speed
              }
              weather {
                main
                description
              }
              main {
                maxTempC
                minTempC
                pressure
              }
              dateText
              visibility
            }
            city {
              name
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Home" />
      <SimpleGrid columns={5} rows="auto-fit" spacing={8} overflow="auto">
        <DailyCard
          day="Tomorrow"
          image={sleet}
          high={/*Math.round(allWeather.cityWeather.max_temp)*/ 0}
          low={/*Math.round(allWeather.cityWeather.min_temp)*/ 0}
        />
        <DailyCard
          day="Sun, 7 Jun"
          image={snow}
          high={/*Math.round(allWeather.cityWeather.max_temp)*/ 0}
          low={/*Math.round(allWeather.cityWeather.min_temp)*/ 0}
        />
        <DailyCard
          day="Mon, 8 Jun"
          image={thunderstorm}
          high={/*Math.round(allWeather.cityWeather.max_temp)*/ 0}
          low={/*Math.round(allWeather.cityWeather.min_temp)*/ 0}
        />
        <DailyCard
          day="Mon, 8 Jun"
          image={lightCloud}
          high={/*Math.round(allWeather.cityWeather.max_temp)*/ 0}
          low={/*Math.round(allWeather.cityWeather.min_temp)*/ 0}
        />
        <DailyCard
          day="Mon, 8 Jun"
          image={clear}
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
          value={Math.round(data.allWeather.weatherForecast.list[0].wind.speed)}
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
          value={Math.round(data.allWeather.weatherForecast.humidityAvg)}
          label="%"
        />
        <HighlightCard
          condition="Visibility"
          value={data.allWeather.weatherForecast.list[0].visibility / 1000}
          label="km"
        />
        <HighlightCard
          condition="Air pressure"
          value={Math.round(data.allWeather.weatherForecast.pressureAvg)}
          label="mb"
        />
      </SimpleGrid>
    </Layout>
  )
}

export default IndexPage
