import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ScrollDisable from "lib/components/scrollDisable";
import { useEffect } from "react";
import { useStateValue } from "../../../context/stateProvider";
import "./style.css";
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
      <div className="container">
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <div className="dot dot-3"></div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
            />
          </filter>
        </defs>
      </svg>
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
