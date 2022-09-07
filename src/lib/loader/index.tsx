import { Box, Spinner, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useStateValue } from "../../context/stateProvider";

export default function Loader() {
  const [{ isLoading }, dispatch] = useStateValue();
  useEffect(() => {
    // disable body scroll
    document.body.style.overflow = "hidden";
    return () => {
      // enable body scroll on unmount
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <Box
      visibility={isLoading ? "visible" : "hidden"}
      transition="all 0.5s ease-in-out"
      opacity={isLoading ? 1 : 0}
      h="100vh"
      position="fixed"
      zIndex={999}
      w="100%"
      overflow="hidden"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="rgba(0,0,0,0.8)"
      backdropFilter={"blur(2px)"}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        p={8}
        borderRadius="md"
      >
        <Spinner size="xl" color="white" />
        <Text color="white">Loading </Text>
      </Box>
    </Box>
  );
}
