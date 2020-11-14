import React from "react";
import {
  Box,
  useColorMode,
  Stack,
  Text,
  Flex,
  Progress,
} from "@chakra-ui/react";

const HighlightCard = ({ condition, value, label, children }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box
        bg={colorMode === "light" ? "gray.100" : "gray.800"}
        rounded="lg"
        p={4}
      >
        <Text textAlign="center">{condition}</Text>
        <Stack isInline justifyContent="center" alignItems="baseline" mt={2}>
          <Text fontWeight={700} fontSize="64px">
            {value}
          </Text>
          <Text fontSize="32px">{label}</Text>
        </Stack>
        <Flex justifyContent="center" mt={2}>
          {children}
        </Flex>
        {label === "%" ? (
          <Box maxW="80%" mx="auto">
            <Stack isInline justify="space-between">
              <Text>0</Text>
              <Text>50</Text>
              <Text>100</Text>
            </Stack>
            <Progress
              value={value}
              color="blue"
              backgroundColor={colorMode === "light" ? "gray.200" : "gray.700"}
              borderRadius="sm"
            />
            <Flex justify="flex-end">
              <Text>%</Text>
            </Flex>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default HighlightCard;
