import { Box, chakra, Flex, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function AppCard({
  app,
  path,
}: {
  app: {
    _id: string;
    image: string;
    name: string;
    icon: string;
  };
  path: string;
}) {
  const navigate = useNavigate();
  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center">
      <Link
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        color="gray.900"
        _dark={{ color: "gray.100" }}
        onClick={() => navigate(`/detail/${path}/${app._id}`)}
      >
        <Box
          _hover={{
            transform: "scale(1.05)",
            filter: "drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25))",
          }}
          transition="all 0.2s ease-in-out"
          cursor={"pointer"}
          bgImage={`url(${app.image})`}
          bgSize="cover"
          borderRadius={30}
          h="100px"
          w="100px"
          position="relative"
        ></Box>
        {app.name}
      </Link>
    </Flex>
  );
}
