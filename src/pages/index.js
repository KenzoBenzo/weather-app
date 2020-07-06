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
} from "@chakra-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import shower from "../images/Shower.png"

const IndexPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Layout>
      <Flex minH="100vh" w="100%">
        <SEO title="Home" />

        <Box
          backgroundColor={colorMode === "light" ? "gray.100" : "gray.800"}
          w="25%"
        >
          <nav>
            <Button variantColor="gray">Search for places</Button>
            <IconButton
              variantColor="gray"
              aria-label="Search database"
              icon="compass"
            />
          </nav>
          <Box>
            <Image src={shower} />
          </Box>
          <Heading as="h1">15℃</Heading>
          <Heading as="h2">Shower</Heading>
          <Flex>
            <Text>Today</Text>
            <Text>•</Text>
            <Text>Fri, 5 Jun</Text>
          </Flex>
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
