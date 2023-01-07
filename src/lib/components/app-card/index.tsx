import { Box, chakra, Flex, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function AppCard({
  app,
}: {
  app: {
    _id: string;
    image: string;
    name: string;
    icon: string;
    price: string;
    path: string;
  };
}) {
  const ifTextIsLong = (text: string) => {
    if (text.length > 15) {
      return text.slice(0, 15) + "...";
    } else {
      return text;
    }
  };
  
  const navigate = useNavigate();
  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      maxW="90px"
      w="100%"
    >
      <Link
        userSelect="none"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        color="gray.900"
        _dark={{ color: "gray.100" }}
        onClick={() => navigate(`/detail/${app.path}/${app._id}`)}
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
          maxW="90px"
          overflow={"hidden"}
          position="relative"
        ></Box>
        <Text
          w="100%"
          textAlign="center"
          fontSize={{
            base: "sm",
            md: "md",
            lg: "lg",
          }}
          h="50px"
        >
          {ifTextIsLong(app?.name)}
        </Text>
        <br />
        <Text>{app?.price}</Text>
      </Link>
    </Flex>
  );
}
