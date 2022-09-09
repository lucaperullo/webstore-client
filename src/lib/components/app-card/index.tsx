import { Box, chakra, Flex, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
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
        userSelect="none"
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
            filter: "drop-shadow(0px 20px 5px rgba(0, 0, 0, 0.15))",
          }}
          transition="all 0.2s ease-in-out"
          cursor={"pointer"}
          bgImage={`url(${app.image})`}
          bgPosition="center"
          bgSize="cover"
          borderRadius={30}
          h="90px"
          w="90px"
          position="relative"
        ></Box>
        <Text
          w={{
            base: "140px",
            lg: "140px",
            xl: "auto",
          }}
          textAlign="center"
          textOverflow={{
            base: "clip",
            md: "ellipsis",
          }}
          overflow={{
            base: "clip",
            md: "hidden",
          }}
          whiteSpace={{
            base: "break-spaces",
            md: "nowrap",
          }}
        >
          {app?.name}
        </Text>
      </Link>
    </Flex>
  );
}
