import { Divider, Flex, chakra, SimpleGrid, Box, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

import AppCard from "../app-card";

export default function Category({
  apps,
  description,
  name,
  path,
}: {
  apps: any[];
  description: string;
  name: string;
  path: string;
}) {
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
      <Divider mt="2" />
      <Box p="4">
        <Flex justifyContent="space-between">
          <chakra.h2 fontSize="3xl" fontWeight="bold" my="2">
            {name}
          </chakra.h2>

          <Link color="blue.500" fontSize="md" my="2">
            See all
          </Link>
        </Flex>
        <chakra.h3
          mb="10"
          color="gray.500"
          _dark={{
            color: "gray.300",
          }}
        >
          {description}
        </chakra.h3>
        <SimpleGrid
          columns={{
            base: 3,
            md: 4,
            lg: 5,
            xl: 6,
          }}
          spacing={10}
        >
          {apps?.map((app) => (
            <AppCard app={app} path={path} />
          ))}
        </SimpleGrid>
      </Box>
    </motion.div>
  );
}
