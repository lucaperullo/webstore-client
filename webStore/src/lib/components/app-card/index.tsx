import { Box, chakra, Flex, Link } from "@chakra-ui/react";

export default function AppCard({
  app,
}: {
  app: {
    name: string;
    icon: string;
  };
}) {
  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center">
      <Box
        borderRadius={30}
        bgGradient="linear(to-r, green.200, pink.500)"
        h="100px"
        w="100px"
      ></Box>
      <Link color="gray.900">{app.name}</Link>
    </Flex>
  );
}
