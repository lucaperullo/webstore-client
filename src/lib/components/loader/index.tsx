import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import ScrollDisable from "lib/components/scrollDisable";
import { useEffect } from "react";
import "./styles.css"
import { useStateValue } from "../../../context/stateProvider";

export default function Loader() {
  const [{ isLoading }] = useStateValue();

  useEffect(() => {
    console.log("mounted")
    return () => {
      console.log("unmounted")
    }
  }, [])
  

  return (
    <Box
    
    cursor={"wait"}
      visibility={isLoading ? "visible" : "hidden"}
      transition="all 0.5s ease-in-out"
      opacity={isLoading ? 1 : 0}
      h="100%"
      position="fixed"
      top={0}
      left={0}
      zIndex={999}
      w="100%"
      flexDir="column"
      overflow="hidden"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="rgba(0,0,0,0.3)"
      backdropFilter={"blur(10px)"}

    >
    <Box className="page">
    <Box className="animation-container">
  <Flex className="lightning-container">
    <Box className="lightning white" />
    <Box className="lightning red" />
  </Flex>
  <Flex className="boom-container">
    <Box className="shape circle big white" />
    <Box className="shape circle white" />
    <Box className="shape triangle big yellow" />
    <Box className="shape disc white" />
    <Box className="shape triangle blue" />
  </Flex>
  <Flex className="boom-container second">
    <Box className="shape circle big white" />
    <Box className="shape circle white" />
    <Box className="shape disc white" />
    <Box className="shape triangle blue" />
  </Flex>
</Box>
    </Box>
  <Flex 
  flexDir="column"
  alignItems="center"

  >
    {/* <Spinner
    old spinner
    height="70px"
     width="70px"
       position="absolute"
mt="-10px"
       thickness='10px'
       speed='0.85s'
      
       color='blue.500'
       size='xl'
     />
  <Spinner
    
     height="50px"
      width="50px"
        
        thickness='5px'
        speed='0.75s'
       
        color='blue.600'
        size='xl'
      />
       <Spinner
     position={"absolute"}
    mt="5px"
     height="40px"
      width="40px"
        
        thickness='6px'
        speed='0.65s'
       
        color='purple.500'
        size='xl'
      />
        <Spinner
     position={"absolute"}
    mt="10px"
     height="30px"
      width="30px"
        
        thickness='5px'
        speed='0.55s'
       
        color='green.600'
        size='xl'
      />
              <Spinner
     position={"absolute"}
    mt="15px"
     height="20px"
      width="20px"
        
        thickness='11px'
        speed='0.45s'
       emptyColor="cyan.100"
        color='cyan.100'
        size='xl'
      /> */}
      <Flex alignItems="baseline">
        <Text
        display="flex"
          fontSize={{
            base: "md",
            md: "lg",
            lg: "xl",
          }}
          fontWeight={700}
          userSelect="none"
          color={"white"}
          mt="2"
        >
          Loading.<motion.div 
          // animation appear and disappear
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: .5, repeat: Infinity }}
          ><Text>.</Text></motion.div>
        </Text>
      </Flex>
  </Flex>
      {isLoading && <ScrollDisable />}
    </Box>
  );
}
