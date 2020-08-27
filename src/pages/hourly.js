import React, { useRef } from "react"
import {
  Flex,
  Box,
  useColorMode,
  IconButton,
  Button,
  Image,
  Heading,
  Text,
  Stack,
  Icon,
  SimpleGrid,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import shower from "../images/Shower.png"
import Background from "../images/Cloud-background.png"
import BackgroundLight from "../images/Cloud-Background-Light.png"
import DailyCard from "../components/dailyCard"
import { useStaticQuery, graphql } from "gatsby"
import sleet from "../images/Sleet.png"
import thunderstorm from "../images/Thunderstorm.png"
import clear from "../images/Clear.png"
//import hail from "../images/Hail.png"
//import heavyCloud from "../images/HeavyCloud.png"
//import heavyRain from "../images/HeavyRain.png"
import lightCloud from "../images/LightCloud.png"
//import lightRain from "../images/LightRain.png"
import snow from "../images/Snow.png"
import HighlightCard from "../components/highlightCard"

const HourlyPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()
  const btnRef = useRef()
  const date = new Date()

  return (
    <Layout>
      <Flex
        minH="100vh"
        w="100%"
        direction={["column", "column", "column", "row"]}
      >
        <SEO title="Home" />

        <Box
          backgroundColor={colorMode === "light" ? "gray.100" : "gray.800"}
          w={["100%", "100%", "100%", "35%", "25%"]}
          padding={8}
        >
          <Flex justifyContent="space-between">
            <Button variantColor="blue" ref={btnRef} onClick={onOpen}>
              Search for places
            </Button>
            <IconButton
              onClick={toggleColorMode}
              icon={colorMode === "light" ? "moon" : "sun"}
              variantColor={colorMode === "light" ? "blue" : "yellow"}
            />
          </Flex>
          <Box
            backgroundImage={`url(${
              colorMode === "light" ? BackgroundLight : Background
            })`}
            bgSize="cover"
            mr={-8}
            ml={-8}
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={8}
            py={8}
          >
            <Image w="200px" h="auto" src={shower} />
          </Box>
          <Flex justifyContent="center" alignItems="baseline">
            <Heading as="h1" fontSize="144px" fontWeight={500}>
              bla
            </Heading>
            <Text fontSize="5xl" color="gray.500">
              ℃
            </Text>
          </Flex>
          <Heading
            textAlign="center"
            mt={16}
            color="gray.500"
            fontWeight={600}
            as="h2"
          >
            bla
          </Heading>
          <Stack isInline justifyContent="center" mt="128px" color="gray.500">
            <Text>Today</Text>
            <Text>•</Text>
            <Text>
              {date.toLocaleString("default", { month: "long" }) +
                ` ` +
                date.getDate()}
            </Text>
          </Stack>
          <Stack
            isInline
            justifyContent="center"
            mt={4}
            color="gray.500"
            alignItems="center"
          >
            <Icon name="pin" />
            <Text>bla</Text>
          </Stack>
        </Box>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="md"
        >
          <DrawerOverlay />
          <DrawerContent>
            <Stack isInline p={4}>
              <Button
                variantColor="blue"
                variant="ghost"
                aria-label="Search database"
              >
                <Icon name="compass" mr={2} />
                my location
              </Button>
              <DrawerCloseButton />
            </Stack>
            <Stack isInline mt={16} p={4} alignItems="center">
              <DrawerBody pl="2px" pr={4}>
                <Input placeholder="search location" />
              </DrawerBody>
              <Button variantColor="blue">Search</Button>
            </Stack>

            <Stack p={4}>
              <Button>Ljubljana</Button>
              <Button>Grosuplje</Button>
            </Stack>
          </DrawerContent>
        </Drawer>

        <Box
          backgroundColor={colorMode === "light" ? "white" : "gray.900"}
          w={["100%", "100%", "100%", "65%", "75%"]}
          px={[8, 8, 16, 16, 48]}
          py={8}
        >
          <SimpleGrid columns={4} rows={2} spacing={8} overflow="auto">
            <DailyCard
              day="00:00-3:00"
              image={sleet}
              high={/*Math.round(allWeather.cityWeather.max_temp)*/ 0}
              low={/*Math.round(allWeather.cityWeather.min_temp)*/ 0}
            />
            <DailyCard
              day="3:00-6:00"
              image={snow}
              high={/*Math.round(allWeather.cityWeather.max_temp)*/ 0}
              low={/*Math.round(allWeather.cityWeather.min_temp)*/ 0}
            />
            <DailyCard
              day="6:00-9:00"
              image={thunderstorm}
              high={/*Math.round(allWeather.cityWeather.max_temp)*/ 0}
              low={/*Math.round(allWeather.cityWeather.min_temp)*/ 0}
            />
            <DailyCard
              day="9:00-12:00"
              image={lightCloud}
              high={/*Math.round(allWeather.cityWeather.max_temp)*/ 0}
              low={/*Math.round(allWeather.cityWeather.min_temp)*/ 0}
            />
            <DailyCard
              day="12:00-15:00"
              image={clear}
              high={/*Math.round(allWeather.cityWeather.max_temp)*/ 0}
              low="70%"
            />
            <DailyCard
              day="15:00-18:00"
              image={thunderstorm}
              high={/*Math.round(allWeather.cityWeather.max_temp)*/ 0}
              low={/*Math.round(allWeather.cityWeather.min_temp)*/ 0}
            />
            <DailyCard
              day="18:00-21:00"
              image={lightCloud}
              high={/*Math.round(allWeather.cityWeather.max_temp)*/ 0}
              low={/*Math.round(allWeather.cityWeather.min_temp)*/ 0}
            />
            <DailyCard
              day="21:00-00:00"
              image={clear}
              high={/*Math.round(allWeather.cityWeather.max_temp)*/ 0}
              low={/*Math.round(allWeather.cityWeather.min_temp)*/ 0}
            />
          </SimpleGrid>
        </Box>
      </Flex>
    </Layout>
  )
}

export default HourlyPage
