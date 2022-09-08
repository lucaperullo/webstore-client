import { Divider, Flex, chakra, SimpleGrid, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import AppCard from "../app-card";

export default function Category({
  apps,
  description,
  name,
  path,
  allApps,
  id,
}: {
  apps: any[];
  description: string;
  name: string;
  path: string;
  allApps: any[];
  id: string;
}) {
  return (
    <motion.div>
      <Divider mt="2" />
      <Box p="4">
        <Flex justifyContent="space-between">
          <chakra.h2 fontSize="3xl" fontWeight="bold" my="2">
            {name}
          </chakra.h2>

          <Link to={`/category/${path}/${id}`}>See all</Link>
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
            lg: 6,
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
