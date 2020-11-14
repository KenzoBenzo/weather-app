import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";

const Main = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      backgroundColor={colorMode === "light" ? "white" : "gray.900"}
      w={["100%", "100%", "100%", "65%", "75%"]}
      px={[8, 8, 16, 16, 48]}
      py={8}
    >
      {children}
    </Box>
  );
};

export default Main;
