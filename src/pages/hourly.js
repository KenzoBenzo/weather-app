import React from "react"
import { SimpleGrid } from "@chakra-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HourlyCard from "../components/hourlyCard"
import { useStaticQuery, graphql } from "gatsby"
import sleet from "../images/Sleet.png"

const HourlyPage = () => {
  const data = useStaticQuery(
    graphql`
      query GET_HOURLY {
        allWeather {
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
      }
    `
  )
  return (
    <Layout>
      <SEO title="Home" />

      <SimpleGrid
        columns={4}
        rows={2}
        spacingX={8}
        spacingY={16}
        overflow="auto"
      >
        {data.allWeather.weatherForecast.list.map((hour, index) => (
          <HourlyCard
            key={index}
            day={hour.dateText}
            image={sleet}
            high={Math.round(hour.main.maxTempC)}
            low={Math.round(hour.main.minTempC)}
            precipitation={hour.precipProbability + `%`}
          />
        ))}
      </SimpleGrid>
    </Layout>
  )
}

export default HourlyPage
