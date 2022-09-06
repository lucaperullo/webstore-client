import { Box, chakra, Flex, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function AppCard({
  app,
}: {
  app: {
    _id: string;
    name: string;
    icon: string;
  };
}) {
  const navigate = useNavigate();
  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center">
      <Box
        borderRadius={30}
        bgGradient="linear(to-r, green.200, pink.500)"
        h="100px"
        w="100px"
      ></Box>
      <Link color="gray.900" onClick={() => navigate(app._id)}>
        {app.name}
      </Link>
    </Flex>
  );
}
