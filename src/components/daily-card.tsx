import React from "react";
import { useColorMode, Box, Text, Image, Stack } from "@chakra-ui/react";

type DailyCardProps = {
	day: string;
	image: string;
	high: number;
	low: number;
};

const DailyCard = ({ day, image, high, low }: DailyCardProps) => {
	const { colorMode } = useColorMode();
	return (
		<Box
			bg={colorMode === "light" ? "gray.100" : "gray.800"}
			p={4}
			rounded="lg"
			minW={125}
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
	);
};

export default DailyCard;
