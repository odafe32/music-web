import { Box, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react";

const categories = [
	{
		id: 1,
		title: "Faith",
		image: "/faith.jpeg"
		
	},
	{
		id: 2,
		title: "Love",
		image: "love.jpeg",
	},
	{
		id: 3,
		title: "Marriage",
		image: "marriage.jpeg",
	},
	{
		id: 4,
		title: "Freedom",
		image: "freedom.jpeg",
	},
	{
		id: 5,
		title: "Prayer | Devtion",
		image: "prayer.jpeg",
	},
	{
		id: 6,
		title: "Gospel",
		image: "gospel.jpeg",
	},
	{
		id: 7,
		title: "Faith Life Conference",
		image: "flc.png",
	},
	{
		id: 8,
		title: "3 Days Of Glory",
		image: "warfare.jpeg",
	},
	{
		id: 9,
		title: "Identity",
		image: "identity.jpeg",
	},
	{
		id: 10,
		title: "Joy",
		image: "joy.jpeg",
	},
	{
		id: 12,
		title: "Church",
		image: "church.jpeg",
	},
	{
		id: 13,
		title: "Divine Guidance",
		image: "guidance.jpeg",
	},
	{
		id: 14,
		title: "Work Ethics",
		image: "workEthics.jpeg",
	},
	{
		id: 15,
		title: "Prophecy",
		image: "prophecy.jpeg",
	},
	{
		id: 16,
		title: "warfare",
		image: "warfare.jpeg",
	},
	{
		id: 17,
		title: "Special Miracle",
		image: "sms.jpg",
	},
	{
		id: 18,
		title: "Holy Spirit",
		image: "HolySpirit.jpeg",
	},
	{
		id: 19,
		title: "Blessings",
		image: "blessing.jpeg",
	},
	{
		id: 20,
		title: "Satisfication",
		image: "satisfication.jpeg",
	},
	{
		id: 21,
		title: "Leadership",
		image: "leadership.jpeg",
	},
	{
		id: 22,
		title: "Wisdom",
		image: "wisdom.jpeg",
	},

];

const Categories = () => {
	return (
		<Box mt={12}>
			<Heading fontSize="xl" mb={8}>
				Categories
			</Heading>

			<SimpleGrid columns={3} gap={3}>
				{categories.map((cat) => (
					<Flex
						key={cat.id}
						align="center"
						justify="center"
						rounded="base"
						pos="relative"
						h={{ base: 24, "2xl": 32 }}
						cursor="pointer">
						<Image
							src={cat.image}
							alt={cat.title}
							pos="absolute"
							left={0}
							top={0}
							rounded="base"
							objectFit="cover"
							h="full"
							w="full"
						/>
						<Flex
							align="center"
							justify="center"
							bg="blackAlpha.600"
							pos="relative"
							zIndex={10}
							h="full"
							w="full">
							<Heading as="h5" fontSize="sm" fontWeight={600}>
								{cat.title}
							</Heading>
						</Flex>
					</Flex>
				))}
			</SimpleGrid>
		</Box>
	);
};

export default Categories;
