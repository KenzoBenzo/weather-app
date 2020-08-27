import React, { useRef } from "react"
import "./layout.css"
import {
  Flex,
  Box,
  useColorMode,
  useDisclosure,
  Button,
  IconButton,
  Drawer,
  Image,
  Heading,
  Text,
  Stack,
  Icon,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Input,
} from "@chakra-ui/core"
import Background from "../images/Cloud-background.png"
import BackgroundLight from "../images/Cloud-Background-Light.png"
import shower from "../images/Shower.png"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const date = new Date()
  const data = useStaticQuery(graphql`
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
  `)
  return (
    <>
      <main>
        <Flex
          minH="100vh"
          w="100%"
          direction={["column", "column", "column", "row"]}
        >
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
                {Math.round(data.allWeather.weatherForecast.tempCAvg)}
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
              {data.allWeather.weatherForecast.list[0].weather[0].description}
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
              <Text>{data.allWeather.weatherForecast.city.name}</Text>
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
            {children}
          </Box>
        </Flex>
      </main>
    </>
  )
}

export default Layout
