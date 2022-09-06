import { Divider, Flex, chakra, SimpleGrid, Box, Link } from "@chakra-ui/react";

import React from "react";

import AppCard from "../app-card";

export default function Category({
  category,
}: {
  category: {
    name: string;
    pages: [];
  };
}) {
  return (
    <>
      <Divider mt="2" />
      <Box p="4">
        <Flex justifyContent="space-between" mb="10">
          <chakra.h2 fontSize="3xl" fontWeight="bold" my="2">
            Best viral apps and games
          </chakra.h2>
          <Link color="blue.500" fontSize="md" my="2">
            See all
          </Link>
        </Flex>
        <SimpleGrid
          columns={{
            base: 3,
            md: 4,
            lg: 5,
            xl: 6,
          }}
          spacing={10}
        ></SimpleGrid>
      </Box>
    </>
  );
}
