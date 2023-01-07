import { Box, Flex, Spinner, Text } from "@chakra-ui/react";

import ScrollDisable from "lib/components/scrollDisable";

import { useStateValue } from "../../../context/stateProvider";

export default function Loader() {
  const [{ isLoading }] = useStateValue();

  return (
    <Box
      visibility={isLoading ? "visible" : "hidden"}
      transition="all 0.5s ease-in-out"
      opacity={isLoading ? 1 : 0}
      h="100vh"
      position="fixed"
      zIndex={999}
      w="100%"
      flexDir="column"
      overflow="hidden"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="rgba(0,0,0,0.4)"
      backdropFilter={"blur(2px)"}
    >
    <Spinner
     transform={"scale(1.5)"}
      visibility={isLoading ? "visible" : "hidden"}
        
        thickness='8px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
      <Flex alignItems="baseline">
        <Text
          fontSize={{
            base: "md",
            md: "lg",
            lg: "xl",
          }}
          fontWeight={700}
        >
          Loading
        </Text>
      </Flex>
      {isLoading && <ScrollDisable />}
    </Box>
  );
}
