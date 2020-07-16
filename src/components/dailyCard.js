import React from "react"
import { Box, useColorMode, Stack, Text, Image } from "@chakra-ui/core"

const DailyCard = ({ day, image, high, low }) => {
  const { colorMode } = useColorMode()
  return (
    <>
      <Box
        bg={colorMode === "light" ? "gray.100" : "gray.800"}
        p={4}
        rounded="lg"
      >
        <Text textAlign="center" mt={2}>
          {day}
        </Text>
        <Image w="auto" h={16} src={image} display="flex" mx="auto" mb={8} />
        <Stack isInline spacing={8} justifyContent="center">
          <Text>{high}</Text>
          <Text color="gray.400">{low}</Text>
        </Stack>
      </Box>
    </>
  )
}

export default DailyCard
