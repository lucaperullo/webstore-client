import {
  Box,
  Divider,
  Flex,
  SimpleGrid,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

export default function CategorySkeleton() {
  return (
    <Box
      minH="395px"
      display="flex"
      flexDir="column"
      justifyContent="space-around"
    >
      <Stack>
        <Divider mb="4" w="full" />{" "}
        <Flex w="full" px="4">
          <motion.div
            //   animate the width of the skeleton to go from 250px to 350px and back
            animate={{ width: [250, 350, 250] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              loop: Infinity,
            }}
          >
            <Skeleton w="full" h="20px"></Skeleton>
          </motion.div>
        </Flex>{" "}
        {/* title */}
        <Flex w="full" p="4">
          {" "}
          <motion.div
            //   animate the width of the skeleton to go from 250px to 350px and back
            animate={{ width: [350, 450, 350] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              loop: Infinity,
              delay: 0.4,
            }}
          >
            <Skeleton w="full" h="10px"></Skeleton>
          </motion.div>
        </Flex>
      </Stack>
      {/* description */}
      <SimpleGrid
        columns={{
          base: 4,
          md: 4,
          lg: 6,
          xl: 6,
        }}
        spacing={10}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
            w="full"
            h="full"
          >
            {" "}
            <Skeleton mb="2" height="90px" w="90px" speed={0.8} />
            <motion.div
              //   animate the width of the skeleton to go from 250px to 350px and back
              animate={{ width: [45, 65, 45] }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                loop: Infinity,
              }}
            >
              <Skeleton w="full" h="7px"></Skeleton>
            </motion.div>
          </Box>
        ))}
      </SimpleGrid>
      <Flex justifyContent="space-between" p="4">
        <Flex flexDir="column">
          <Skeleton w="80px" h="20px" mb="2"></Skeleton>
          <Skeleton ml="4" w="20px" h="20px"></Skeleton>
        </Flex>
        <Flex>
          <motion.div
            //   animate the width of the skeleton to go from 250px to 350px and back
            animate={{ width: [75, 95, 75] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              loop: Infinity,
            }}
          >
            <Skeleton w="full" h="20px"></Skeleton>
          </motion.div>
        </Flex>
      </Flex>
    </Box>
  );
}
