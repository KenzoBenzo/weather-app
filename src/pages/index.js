import React from "react"
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
} from "@chakra-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import shower from "../images/Shower.png"
import Background from "../images/Cloud-Background.png"
import BackgroundLight from "../images/Cloud-Background-Light.png"

const IndexPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Layout>
      <Flex minH="100vh" w="100%">
        <SEO title="Home" />

        <Box
          backgroundColor={colorMode === "light" ? "gray.100" : "gray.800"}
          w="25%"
          padding={8}
        >
          <Flex justifyContent="space-between">
            <Button variantColor="blue">Search for places</Button>
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
            mt={8}
            color="gray.500"
            fontWeight={600}
            as="h2"
          >
            Shower
          </Heading>
          <Stack isInline justifyContent="center" mt={16} color="gray.500">
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

        <Box
          backgroundColor={colorMode === "light" ? "white" : "gray.900"}
          w="75%"
        >
          <IconButton
            onClick={toggleColorMode}
            icon={colorMode === "light" ? "moon" : "sun"}
          />
        </Box>
      </Flex>
    </Layout>
  )
}

export default IndexPage
