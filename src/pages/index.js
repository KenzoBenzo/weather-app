import React from "react"
import { Flex, Box, useColorMode, IconButton } from "@chakra-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Layout>
      <SEO title="Home" />
      <Flex minH="100vh" w="100%">
        <Box
          backgroundColor={colorMode === "light" ? "gray.100" : "gray.800"}
          w="25%"
        >
          sidebar
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
