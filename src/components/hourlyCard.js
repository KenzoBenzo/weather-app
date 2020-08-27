import React from "react"
import { Box, useColorMode, Stack, Text, Image } from "@chakra-ui/core"

const HourlyCard = ({ day, image, high, low, precipitation }) => {
  const { colorMode } = useColorMode()
  return (
    <Stack>
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
          <Text>{high}°C</Text>
          <Text color="gray.400">{low}°C</Text>
        </Stack>
      </Box>
      <Box
        mt={2}
        bg={colorMode === "light" ? "gray.200" : "gray.700"}
        py={2}
        px={8}
        mx="auto"
        rounded="lg"
        maxW="fit-content"
        fontWeight={700}
      >
        {precipitation}
      </Box>
    </Stack>
  )
}

export default HourlyCard
