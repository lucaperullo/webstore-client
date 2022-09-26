import { ArrowDownIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  Flex,
  chakra,
  Stack,
  Box,
  Image,
  Button,
  Text,
} from "@chakra-ui/react";
import { useStateValue } from "../../../../context/stateProvider";
import { motion } from "framer-motion";
import { BiCompass } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Welcome({ slide }: { slide: () => void }) {
  const navigate = useNavigate();
  const [state, dispatch] = useStateValue();
  return (
    <Flex
      direction={{
        base: "column",
        md: "row",
      }}
      _light={{
        bg: "blue.500",
      }}
      px="8"
      py="12"
      h="full"
      w="full"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        w={{
          base: "full",
          md: 11 / 12,
          xl: 9 / 12,
        }}
        mx="auto"
        pr={{
          md: 20,
        }}
      >
        <chakra.h2
          fontSize={{
            base: "3xl",
            sm: "4xl",
          }}
          fontWeight="extrabold"
          lineHeight="shorter"
          color="white"
          _dark={{
            color: "gray.100",
          }}
          mb={6}
        >
          <chakra.span display="block">Ready to dive in?</chakra.span>
          <chakra.span
            display="block"
            color="white"
            _dark={{
              color: "gray.500",
            }}
          >
            Start for free today.
          </chakra.span>
        </chakra.h2>
        <chakra.p
          mb={6}
          fontSize={{
            base: "lg",
            md: "xl",
          }}
          color="gray.100"
          _dark={{
            color: "gray.300",
          }}
        >
          Here at Webstore we are dedicated to providing the best service app
          selection of desktop / mobile applications and games.
          <br /> We are always looking for ways to improve, If you have any
          suggestions or feedback, please let us know!
        </chakra.p>
        <Stack
          direction={{
            base: "column",
            sm: "row",
          }}
          mb={{
            base: 4,
            md: 8,
          }}
          spacing={2}
        >
          <Box
            w="full"
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            rounded="md"
            shadow="md"
          >
            <Button
              fontWeight="bold"
              w="full"
              rounded="md"
              colorScheme="green"
              size="lg"
              h="60px"
              onClick={() => {
                navigate("/discover");
                dispatch({ type: "SET_HOME", payload: false });
              }}
              rightIcon={<BiCompass />}
            >
              Explore now
            </Button>
            <Text fontWeight={800} my="2" color="white">
              or
            </Text>
            <Button
              fontWeight="bold"
              w="full"
              rounded="md"
              colorScheme="purple"
              size="lg"
              h="60px"
              onClick={slide}
              rightIcon={<ArrowDownIcon />}
            >
              Read more
            </Button>
          </Box>
        </Stack>
      </Box>
      <Box
        w={{
          base: "full",
          md: 10 / 12,
        }}
        mx="auto"
        textAlign="center"
        _hover={{
          _dark: {
            transform: "translateY(-5px)",
          },
        }}
      >
        <motion.div
          //   make the image float around of little bit with shadow
          animate={{
            y: [0, 10, 0, -10, 5],
            x: [10, 5, 0, -5, -10],

            boxShadow: [
              "0px 0px 0px rgba(0, 0, 0, 0.1)",
              "0px 10px 10px rgba(0, 0, 0, 0.2)",
              "0px 5px 20px rgba(0, 0, 0, 0.3)",
              "0px 0px 30px rgba(0, 0, 0, 0.4)",
              "0px 7px 40px rgba(0, 0, 0, 0.5)",
            ],
            transition: {
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        >
          <Image
            w="full"
            rounded="lg"
            shadow="2xl"
            src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662726368/Untitled_design_2_uuoa0z.png"
            alt="Webstore application screenshot"
          />
        </motion.div>
      </Box>
    </Flex>
  );
}
