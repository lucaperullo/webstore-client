import { Box, chakra, Flex, Link } from "@chakra-ui/react";
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
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
          },
        },
      }}
    >
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
    </motion.div>
  );
}
