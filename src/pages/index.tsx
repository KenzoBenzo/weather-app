import React from "react";
import Sidebar from "../components/sidebar";
import DailyCard from "../components/daily-card";
import HighlightCard from "../components/highlight-card";
import {
	Box,
	SimpleGrid,
	Spinner,
	Text,
	Flex,
	Stack,
	useColorMode,
	useColorModeValue,
} from "@chakra-ui/react";
import { GET_WEATHER } from "../../graphql";
import { GraphQLClient } from "graphql-request";
import useSWR from "swr";
import { WindIcon } from "../../theme/icons";

{
	/* Direction and it's degrees
	N 348.75 - 11.25
	NNE 11.25 - 33.75
	NE 33.75 - 56.25
	ENE 56.25 - 78.75
	E 78.75 - 101.25
	ESE 101.25 - 123.75
	SE 123.75 - 146.25
	SSE 146.25 - 168.75
	S 168.75 - 191.25
	SSW 191.25 - 213.75
	SW 213.75 - 236.25
	WSW 236.25 - 258.75
	W 258.75 - 281.25
	WNW 281.25 - 303.75
	NW 303.75 - 326.25
	NNW 326.25 - 348.75
*/
}

const Home = () => {
	const { colorMode } = useColorMode();

	const client = new GraphQLClient(
		"https://graphql-weather-app.herokuapp.com/"
	);

	const fetcher = (query) => client.request(query);

	const { data, error, isValidating } = useSWR(GET_WEATHER, fetcher);

	if (isValidating || !data) {
		return (
			<Flex minH="100vh" w="100%" justify="center" align="center">
				<Spinner
					thickness="4px"
					emptyColor="blue.100"
					color="blue.500"
					size="lg"
					mr={4}
				/>
				<Text fontSize="xl" fontWeight={700}>
					Loading
				</Text>
			</Flex>
		);
	}

	if (error) {
		return <Text color="red.500">{error}</Text>;
	}

	// Function to get a certain number of days from today
	const addDays = (days: number) => {
		return new Date(new Date().getTime() + days * 24 * 60 * 60 * 1000);
	};

	// Next five days to filter by
	const today = new Date();
	const tomorrow = addDays(1);
	const inTwoDays = addDays(2);
	const inThreeDays = addDays(3);
	const inFourDays = addDays(4);

	// function to get a group of temperatures for a certain day
	const getGroup = (day: Date) => {
		let group = data.weatherForecast.list.filter(
			(item) =>
				parseInt(
					item.dateText.substring(0, 11).replace("-", "").replace("-", "")
				) ===
				parseInt(`${day.getFullYear()}${day.getMonth() + 1}${day.getDate()}`)
		);
		return group;
	};

	// Group weather by day
	let todayGroup = getGroup(today);
	let tomorrowGroup = getGroup(tomorrow);
	let inTwoDaysGroup = getGroup(inTwoDays);
	let inThreeDaysGroup = getGroup(inThreeDays);
	let inFourDaysGroup = getGroup(inFourDays);

	// Function to prettify the date output
	const prettyDate = (date: Date) => {
		return date.toLocaleString("default", {
			month: "short",
			day: "numeric",
		});
	};

	// First entry for each day
	// TODO: Upgrade this to be an array with the real min and max of a certain day
	let nextFiveDays = [
		todayGroup[0],
		tomorrowGroup[0],
		inTwoDaysGroup[0],
		inThreeDaysGroup[0],
		inFourDaysGroup[0],
	];

	return (
		<>
			<Sidebar
				today={today}
				cityName={data.weatherForecast.city.name}
				description={data.weatherForecast.list[0].weather[0].description}
				celciusTemperature={Math.round(data.weatherForecast.tempCAvg)}
			/>
			<Box
				backgroundColor={colorMode === "light" ? "white" : "gray.900"}
				w={["100%", "100%", "100%", "65%", "75%"]}
				px={[8, 8, 16, 16, 32]}
				py={8}
			>
				<SimpleGrid columns={5} rows="auto-fit" spacing={8} overflow="auto">
					{nextFiveDays.map((day, index) => (
						<DailyCard
							key={index}
							day={
								index === 0
									? prettyDate(today)
									: index === 1
									? prettyDate(tomorrow)
									: index === 2
									? prettyDate(inTwoDays)
									: index === 3
									? prettyDate(inThreeDays)
									: index === 4
									? prettyDate(inFourDays)
									: ""
							}
							image="https://media.graphcms.com/2tpG5s0MQnq0uxSxJkXS"
							high={Math.round(day.main.maxTempC)}
							low={Math.round(day.main.minTempC)}
						/>
					))}
				</SimpleGrid>

				<SimpleGrid
					columns={2}
					rows={2}
					spacing={12}
					mt={8}
					minChildWidth={["234px", "234px", "234px", "234px", "324px"]}
				>
					<HighlightCard
						condition="Wind status"
						value={Math.round(data.weatherForecast.list[0].wind.speed)}
						label="mph"
					>
						<Stack isInline alignItems="center">
							<Box
								size="32px"
								p={1}
								backgroundColor={useColorModeValue("gray.200", "gray.700")}
								rounded="full"
								display="flex"
								justifyContent="center"
								alignItems="center"
								style={{
									rotate: `${data.weatherForecast.list[0].wind.deg}deg`,
								}}
							>
								<WindIcon boxSize={4} />
							</Box>
							<Text>WSW</Text>
						</Stack>
					</HighlightCard>
					<HighlightCard
						condition="Humidity"
						value={Math.round(data.weatherForecast.humidityAvg)}
						label="%"
					/>
					<HighlightCard
						condition="Visibility"
						value={data.weatherForecast.list[0].visibility / 1000}
						label="km"
					/>
					<HighlightCard
						condition="Air pressure"
						value={Math.round(data.weatherForecast.pressureAvg)}
						label="mb"
					/>
				</SimpleGrid>
			</Box>
		</>
	);
};

export default Home;
