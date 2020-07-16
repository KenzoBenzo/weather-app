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
import DailyCard from "../components/dailyCard"

const IndexPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

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
              isRound
              variantColor="blue"
              aria-label="Search database"
              icon="compass"
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
              15
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
            Shower
          </Heading>
          <Stack isInline justifyContent="center" mt="128px" color="gray.500">
            <Text>Today</Text>
            <Text>•</Text>
            <Text>Fri, 5 Jun</Text>
          </Stack>
          <Stack
            isInline
            justifyContent="center"
            mt={4}
            color="gray.500"
            alignItems="center"
          >
            <Icon name="pin" />
            <Text>Helsinki</Text>
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
            <DrawerCloseButton />
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
          <Box justifyContent="flex-end" display="flex" mb={16}>
            <IconButton
              onClick={toggleColorMode}
              icon={colorMode === "light" ? "moon" : "sun"}
            />
          </Box>

          <SimpleGrid columns={5} rows="auto-fit" spacing={8} overflow="auto">
            <DailyCard day="Tomorrow" image={sleet} high="16°C" low="11°C" />
            <DailyCard day="Sun, 7 Jun" image={snow} high="16°C" low="11°C" />
            <DailyCard
              day="Mon, 8 Jun"
              image={thunderstorm}
              high="16°C"
              low="11°C"
            />
            <DailyCard
              day="Mon, 8 Jun"
              image={lightCloud}
              high="16°C"
              low="11°C"
            />
            <DailyCard day="Mon, 8 Jun" image={clear} high="16°C" low="11°C" />
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
            <HighlightCard condition="Wind status" value="7" label="mph">
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
            <HighlightCard condition="Humidity" value="84" label="%" />
            <HighlightCard condition="Visibility" value="6,4" label="miles" />
            <HighlightCard condition="Air pressure" value="998" label="mb" />
          </SimpleGrid>
        </Box>
      </Flex>
    </Layout>
  )
}

export default IndexPage
