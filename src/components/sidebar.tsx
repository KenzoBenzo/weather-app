import React, { useRef } from "react";
import {
	Box,
	Flex,
	Button,
	IconButton,
	Image,
	Heading,
	useColorMode,
	Text,
	Stack,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerBody,
	Input,
	useDisclosure,
} from "@chakra-ui/react";
import { CompassIcon, PinIcon } from "../../theme/icons";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

type SidebarProps = {
	celciusTemperature: number;
	description: string;
	cityName: string;
	today: Date;
};

const Sidebar = ({
	celciusTemperature,
	description,
	cityName,
	today,
}: SidebarProps) => {
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();

	return (
		<>
			<Box
				backgroundColor={colorMode === "light" ? "gray.100" : "gray.800"}
				w={["100%", "100%", "100%", "35%", "25%"]}
				padding={8}
			>
				<Flex justifyContent="space-between">
					<Button colorScheme="blue" ref={btnRef} onClick={onOpen}>
						Search for places
					</Button>
					<IconButton
						aria-label="Color mode button"
						onClick={toggleColorMode}
						icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
						colorScheme={colorMode === "light" ? "blue" : "yellow"}
					/>
				</Flex>
				<Box
					backgroundImage={`url(${
						colorMode === "light"
							? "https://media.graphcms.com/rxh5VyFHTcyeKCPY4uaD"
							: "https://media.graphcms.com/cdIvb0MzQqWzcTJmOSLw"
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
					<Image
						w="200px"
						h="auto"
						src="https://media.graphcms.com/z35FutoT3mOOXgra7ay0"
					/>
				</Box>
				<Flex justifyContent="center" alignItems="baseline">
					<Heading as="h1" fontSize="144px" fontWeight={500}>
						{celciusTemperature}
					</Heading>
					<Text fontSize="5xl" color="gray.500">
						℃
					</Text>
				</Flex>
				<Heading
					textAlign="center"
					mt={16}
					color="gray.500"
					fontWeight={600}
					as="h2"
				>
					{description}
				</Heading>
				<Stack isInline justifyContent="center" mt="128px" color="gray.500">
					<Text>Today</Text>
					<Text>•</Text>
					<Text>
						{today.toLocaleString("default", { month: "long" }) +
							` ` +
							today.getDate()}
					</Text>
				</Stack>
				<Stack
					isInline
					justifyContent="center"
					mt={4}
					color="gray.500"
					alignItems="center"
				>
					<PinIcon />
					<Text>{cityName}</Text>
				</Stack>
			</Box>

			<Drawer
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				finalFocusRef={btnRef}
				size="md"
			>
				<DrawerOverlay />
				<DrawerContent>
					<Stack isInline p={4}>
						<Button
							colorScheme="blue"
							variant="ghost"
							aria-label="Search database"
							isDisabled
						>
							<CompassIcon mr={2} />
							my location
						</Button>
						<DrawerCloseButton />
					</Stack>
					<Stack isInline mt={16} p={4} alignItems="center">
						<DrawerBody pl="2px" pr={4}>
							<Input placeholder="search location" />
						</DrawerBody>
						<Button colorScheme="blue">Search</Button>
					</Stack>

					<Stack p={4}>
						<Button>Ljubljana</Button>
						<Button>Grosuplje</Button>
					</Stack>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default Sidebar;
