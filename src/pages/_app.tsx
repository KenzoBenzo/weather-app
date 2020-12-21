import * as React from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import customTheme from "../../theme";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={customTheme}>
			<Flex
				minH="100vh"
				w="100%"
				direction={["column", "column", "column", "row"]}
			>
				<Component {...pageProps} />
			</Flex>
		</ChakraProvider>
	);
}

export default MyApp;
