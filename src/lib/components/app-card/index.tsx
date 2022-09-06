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
      <Box
        bgImage={`url(${app.image})`}
        bgSize="cover"
        borderRadius={30}
        h="100px"
        w="100px"
      ></Box>
      <Link
        color="gray.900"
        onClick={() => navigate(`/detail/${path}/${app._id}`)}
      >
        {app.name}
      </Link>
    </Flex>
  );
}
