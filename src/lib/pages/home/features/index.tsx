import {
  Flex,
  Icon,
  chakra,
  SimpleGrid,
  GridItem,
  Stack,
  Box,
} from "@chakra-ui/react";

import React from "react";
import Feature from "./feature";

export default function Features() {
  return (
    <Flex
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      w="auto"
      h="full"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        shadow="xl"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        px={8}
        py={20}
        mx="auto"
        w="auto"
        h="full"
        mb="2"
      >
        <SimpleGrid
          alignItems="center"
          columns={{
            base: 1,
            lg: 3,
          }}
          spacingY={{
            base: 10,
            lg: 32,
          }}
          spacingX={{
            base: 10,
            lg: 24,
          }}
        >
          <Box alignSelf="start">
            <chakra.h2
              _light={{
                color: "brand.500",
              }}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Everything you need
            </chakra.h2>
            <chakra.h2
              mb={3}
              fontSize={{
                base: "3xl",
                md: "4xl",
              }}
              fontWeight="extrabold"
              textAlign={{
                base: "center",
                sm: "left",
              }}
              _light={{
                color: "black",
              }}
              lineHeight="shorter"
              letterSpacing="tight"
            >
              All-in-one platform
            </chakra.h2>
            <chakra.p
              mb={6}
              fontSize={{
                base: "lg",
                md: "xl",
              }}
              textAlign={{
                base: "center",
                sm: "left",
              }}
              color="gray.600"
              _dark={{
                color: "gray.500",
              }}
            >
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </chakra.p>
          </Box>
          <GridItem colSpan={2}>
            <Stack
              spacing={{
                base: 10,
                md: 0,
              }}
              display={{
                md: "grid",
              }}
              gridTemplateColumns={{
                md: "repeat(2,1fr)",
              }}
              gridColumnGap={{
                md: 8,
              }}
              gridRowGap={{
                md: 10,
              }}
            >
              <Feature title="Invite team members">
                Improve your conversion rates by monitoring exactly what’s going
                on while your customers are in trial.{" "}
              </Feature>
              <Feature title="Unify your payments stack">
                Manage all your online and offline sales in one place with a
                single integration, simplifying reporting and reconciliation.
              </Feature>
              <Feature title="Own your in-store experience">
                {" "}
                Provide a seamless customer experience across channels, like
                reserving online and picking up in store.
              </Feature>
              <Feature title="Grow your platform’s revenue">
                {" "}
                Add in-person payments to your platform or marketplace. Using
                Terminal with Connect.{" "}
              </Feature>
              <Feature title="Clear overview for efficient tracking">
                {" "}
                Handle your subscriptions and transactions efficiently with the
                clear overview in Dashboard. Fea
              </Feature>
              <Feature title="Decide how you integrate Payments">
                {" "}
                Love to code? Decide how you integrate Payments and build
                advanced and reliable products yourself from scratch.{" "}
              </Feature>
            </Stack>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
