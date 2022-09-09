import {
  Box,
  Button,
  Flex,
  Hide,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import "swiper/css/effect-coverflow";
import Category from "lib/components/category";
import {
  Pagination,
  Navigation,
  EffectCoverflow,
  EffectCube,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { useStateValue } from "../../../context/stateProvider";
import styles from "./styles.module.css";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

export default function Paid() {
  const [state, dispatch] = useStateValue();
  const [categories, setCategories] = useState([]);
  let getCategories = () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    let url = import.meta.env.VITE_BASE_URL + "category/discover";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        console.log(data);
        dispatch({
          type: "SET_LOADING",
          payload: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Box as="div" height="100%" overflowX="hidden">
      <Box zIndex="3">
        <Hide below="xl">
          <Swiper
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 0,
              stretch: 100,
              depth: 50,
              modifier: 1,
            }}
            slidesPerView={2.5}
            centeredSlides={true}
            loop={true}
            modules={[EffectCoverflow, Autoplay]}
          >
            <SwiperSlide>
              <Box h="100%" w="100%">
                <SimpleGrid columns={1}>
                  <Flex flexDir="column" alignItems="center">
                    <Box
                      h="190px"
                      w="100%"
                      color="pink.400"
                      bg="white"
                      _dark={{
                        bg: "pink.300",
                        color: "white",
                      }}
                      p="10"
                      pt="2"
                    >
                      <Text
                        w="full"
                        textAlign="center"
                        fontWeight={800}
                        fontSize={50}
                      >
                        Dribbble
                      </Text>
                      <Text w="full" textAlign={"center"} fontSize="lg">
                        Dribbble is the leading destination to find & showcase
                        creative work and home to the world's best design
                        professionals.
                      </Text>
                    </Box>
                    <Flex
                      h="120"
                      w="100%"
                      pt="0"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Image
                        position="absolute"
                        top="140px"
                        left="-10"
                        zIndex={10}
                        h="208px"
                        src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662635944/social-button-dribbble-icon-4_bzuela.png"
                        alt="dribbble"
                      ></Image>
                      <Image
                        position="absolute"
                        top="100px"
                        left="-20"
                        zIndex={1}
                        transform="rotate(10deg)"
                        h="90px"
                        src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662635944/social-button-dribbble-icon-4_bzuela.png"
                        alt="dribbble"
                      ></Image>
                      <Image
                        position="absolute"
                        top="140px"
                        right="-10"
                        zIndex={10}
                        h="208px"
                        src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662635944/social-button-dribbble-icon-4_bzuela.png"
                        alt="dribbble"
                      ></Image>
                      <Image
                        position="absolute"
                        top="100px"
                        right="-20"
                        zIndex={1}
                        transform="rotate(10deg)"
                        h="90px"
                        src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662635944/social-button-dribbble-icon-4_bzuela.png"
                        alt="dribbble"
                      ></Image>
                      <Button
                        as="a"
                        href="https://dribbble.com/"
                        target="_blank"
                        size="lg"
                        w="full"
                        h="full"
                        bg="pink.400"
                        colorScheme="pink"
                        color="white"
                        rightIcon={<ArrowForwardIcon />}
                      >
                        Visit Dribbble
                      </Button>
                    </Flex>
                  </Flex>
                </SimpleGrid>
              </Box>
            </SwiperSlide>

            <SwiperSlide>
              <Box h="100%" w="100%">
                <SimpleGrid columns={1} spacing={10}>
                  <Flex flexDir="column" alignItems="center">
                    <Box
                      h="190"
                      w="100%"
                      bgGradient="linear(to-tr, purple.800,  pink.600)"
                    >
                      <Text
                        w="full"
                        textAlign="center"
                        fontWeight={800}
                        fontSize={50}
                        color="white"
                      >
                        Dream By Wombo
                      </Text>
                      <Text
                        w="full"
                        textAlign={"center"}
                        fontSize="lg"
                        color="white"
                      >
                        Dream use the power of AI to transform your idea and art
                        style into a beautiful painting right before your eyes
                        in seconds
                      </Text>

                      <Image
                        position="absolute"
                        right={0}
                        src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662647640/Untitled_design_11_iyoecy.svg"
                      />
                      <Image
                        right="-40"
                        position="absolute"
                        src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662647640/Untitled_design_11_iyoecy.svg"
                      />
                      <Image
                        right="60"
                        position="absolute"
                        src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662647640/Untitled_design_11_iyoecy.svg"
                      />
                      <Image
                        left="-40"
                        transform="rotate(180deg)"
                        position="absolute"
                        src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662647640/Untitled_design_11_iyoecy.svg"
                      />
                      <Image
                        right="-40"
                        transform="rotate(90deg)"
                        position="absolute"
                        src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662647640/Untitled_design_11_iyoecy.svg"
                      />
                    </Box>
                    <Flex
                      h="120"
                      w="100%"
                      bgImage={
                        "url(https://res.cloudinary.com/webstoreclouds/image/upload/v1662646906/5480580_mek7uh.jpg)"
                      }
                      bgSize="cover"
                      bgPosition="center"
                      bgRepeat="no-repeat"
                      p="2"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Button
                        as="a"
                        href="https://www.dream.ai/"
                        target="_blank"
                        size="lg"
                        width="full"
                        h="full"
                        bg="red.300"
                        colorScheme="whiteAlpha"
                        _hover={{
                          color: "black",
                          bg: "white",
                        }}
                        color="white"
                        rightIcon={<ArrowForwardIcon />}
                      >
                        Visit Dream By Wombo
                      </Button>
                    </Flex>
                  </Flex>
                </SimpleGrid>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box h="100%" w="100%">
                <SimpleGrid columns={1} spacing={10}>
                  <Flex flexDir="column" alignItems="center">
                    <Box
                      h="190"
                      w="100%"
                      bgGradient={
                        "linear(to-tr, teal.300, blue.500, purple.600)"
                      }
                      _dark={{
                        bgGradient:
                          "linear(to-tr, teal.300, blue.500, purple.600)",
                      }}
                    >
                      <Text
                        w="full"
                        textAlign="center"
                        fontWeight={700}
                        fontSize={60}
                        color="white"
                      >
                        Canva
                      </Text>
                      <Text
                        w="full"
                        textAlign="center"
                        fontSize="xl"
                        color="white"
                      >
                        Canva is a free graphic design tool that allows anyone
                        to create beautiful designs.
                      </Text>

                      <Image
                        zIndex="-1"
                        position="absolute"
                        right="-360px"
                        bottom="40px"
                        src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662639986/Vector-PNG-Transparent-Image_nmj4jv.png"
                      />
                      <Image
                        zIndex="-1"
                        position="absolute"
                        left="-360px"
                        bottom="-10"
                        src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662639986/Vector-PNG-Transparent-Image_nmj4jv.png"
                        transform={"rotate(180deg)"}
                      />
                    </Box>
                    <Flex
                      h="120"
                      w="100%"
                      bgGradient={
                        "linear(to-tr, teal.300, blue.500, purple.600)"
                      }
                      _dark={{
                        bgGradient:
                          "linear(to-tr, teal.300, blue.500, purple.600)",
                      }}
                      p="2"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Image
                        h="48"
                        src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662642681/Canva-New-Logo_vtjzpw.png"
                        alt="canva"
                        position="absolute"
                        left="-40"
                        zIndex={1}
                        bottom="-10"
                      />
                      <Image
                        h="48"
                        src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662642681/Canva-New-Logo_vtjzpw.png"
                        alt="canva"
                        position="absolute"
                        right="-40"
                        zIndex={1}
                        bottom="-10"
                      />
                      <Button
                        as="a"
                        href="https://www.canva.com/"
                        target="_blank"
                        size="lg"
                        width="full"
                        h="full"
                        bg="purple.300"
                        colorScheme="purple"
                        color="white"
                        rightIcon={<ArrowForwardIcon />}
                      >
                        Visit Canva
                      </Button>
                    </Flex>
                  </Flex>
                </SimpleGrid>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Hide>
        <Hide above="xl">
          <Swiper
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 0,
              stretch: 100,
              depth: 50,
              modifier: 1,
            }}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            modules={[EffectCoverflow, Autoplay]}
          >
            <SwiperSlide
              style={{
                height: "100%!important",
              }}
            >
              <Box h="100%" w="100%">
                <SimpleGrid columns={1}>
                  <Flex flexDir="column" alignItems="center">
                    <Box
                      h="210px"
                      w="100%"
                      color="pink.400"
                      bg="white"
                      _dark={{
                        bg: "pink.300",
                        color: "white",
                      }}
                      p="10"
                      pt="2"
                    >
                      <Text
                        w="full"
                        textAlign="center"
                        fontWeight={800}
                        fontSize={50}
                      >
                        Dribbble
                      </Text>
                      <Text w="full" textAlign={"center"} fontSize="md">
                        Dribbble is the leading destination to find & showcase
                        creative work and home to the world's best design
                        professionals.
                      </Text>
                    </Box>
                    <Flex
                      h="100"
                      w="100%"
                      pt="0"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Image
                        position="absolute"
                        top="180px"
                        left="-10"
                        zIndex={10}
                        h="98px"
                        src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662635944/social-button-dribbble-icon-4_bzuela.png"
                        alt="dribbble"
                      ></Image>
                      <Image
                        position="absolute"
                        top="100px"
                        left="-20"
                        zIndex={1}
                        transform="rotate(10deg)"
                        h="50px"
                        src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662635944/social-button-dribbble-icon-4_bzuela.png"
                        alt="dribbble"
                      ></Image>
                      <Image
                        position="absolute"
                        top="140px"
                        right="-10"
                        zIndex={10}
                        h="98px"
                        src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662635944/social-button-dribbble-icon-4_bzuela.png"
                        alt="dribbble"
                      ></Image>
                      <Image
                        position="absolute"
                        top="100px"
                        right="-20"
                        zIndex={1}
                        transform="rotate(10deg)"
                        h="40px"
                        src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662635944/social-button-dribbble-icon-4_bzuela.png"
                        alt="dribbble"
                      ></Image>
                      <Button
                        as="a"
                        href="https://dribbble.com/"
                        target="_blank"
                        size="lg"
                        w="full"
                        h="full"
                        bg="pink.400"
                        colorScheme="pink"
                        color="white"
                        rightIcon={<ArrowForwardIcon />}
                      >
                        Visit Dribbble
                      </Button>
                    </Flex>
                  </Flex>
                </SimpleGrid>
              </Box>
            </SwiperSlide>

            <SwiperSlide>
              <Box h="100%" w="100%">
                <SimpleGrid columns={1} spacing={10}>
                  <Flex flexDir="column" alignItems="center">
                    <Box
                      h="210"
                      w="100%"
                      bgGradient="linear(to-tr, purple.800,  pink.600)"
                    >
                      <Text
                        w="full"
                        textAlign="center"
                        fontWeight={800}
                        fontSize={50}
                        color="white"
                      >
                        Dream
                      </Text>
                      <Text
                        w="full"
                        textAlign={"center"}
                        fontSize="lg"
                        color="white"
                      >
                        Dream use the power of AI to transform your idea and art
                        style into a beautiful painting right before your eyes
                        in seconds
                      </Text>

                      <Image
                        position="absolute"
                        right={0}
                        src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662647640/Untitled_design_11_iyoecy.svg"
                      />
                      <Image
                        right="-40"
                        position="absolute"
                        src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662647640/Untitled_design_11_iyoecy.svg"
                      />
                      <Image
                        right="60"
                        position="absolute"
                        src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662647640/Untitled_design_11_iyoecy.svg"
                      />
                      <Image
                        left="-40"
                        transform="rotate(180deg)"
                        position="absolute"
                        src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662647640/Untitled_design_11_iyoecy.svg"
                      />
                      <Image
                        right="-40"
                        transform="rotate(90deg)"
                        position="absolute"
                        src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662647640/Untitled_design_11_iyoecy.svg"
                      />
                    </Box>
                    <Flex
                      h="100"
                      w="100%"
                      bgImage={
                        "url(https://res.cloudinary.com/webstoreclouds/image/upload/v1662646906/5480580_mek7uh.jpg)"
                      }
                      bgSize="cover"
                      bgPosition="center"
                      bgRepeat="no-repeat"
                      p="2"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Button
                        as="a"
                        href="https://www.dream.ai/"
                        target="_blank"
                        size="lg"
                        width="full"
                        h="full"
                        bg="red.300"
                        colorScheme="whiteAlpha"
                        _hover={{
                          color: "black",
                          bg: "white",
                        }}
                        color="white"
                        rightIcon={<ArrowForwardIcon />}
                      >
                        Visit Dream By Wombo
                      </Button>
                    </Flex>
                  </Flex>
                </SimpleGrid>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box h="100%" w="100%">
                <SimpleGrid columns={1} spacing={10}>
                  <Flex flexDir="column" alignItems="center">
                    <Box
                      h="190"
                      w="100%"
                      bgGradient={
                        "linear(to-tr, teal.300, blue.500, purple.600)"
                      }
                      _dark={{
                        bgGradient:
                          "linear(to-tr, teal.300, blue.500, purple.600)",
                      }}
                    >
                      <Text
                        w="full"
                        textAlign="center"
                        fontWeight={700}
                        fontSize={60}
                        color="white"
                      >
                        Canva
                      </Text>
                      <Text
                        w="full"
                        textAlign="center"
                        fontSize="xl"
                        color="white"
                      >
                        Canva is a free graphic design tool that allows anyone
                        to create beautiful designs.
                      </Text>

                      <Image
                        zIndex="-1"
                        position="absolute"
                        right="-360px"
                        bottom="40px"
                        src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662639986/Vector-PNG-Transparent-Image_nmj4jv.png"
                      />
                      <Image
                        zIndex="-1"
                        position="absolute"
                        left="-360px"
                        bottom="-10"
                        src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662639986/Vector-PNG-Transparent-Image_nmj4jv.png"
                        transform={"rotate(180deg)"}
                      />
                    </Box>
                    <Flex
                      h="120"
                      w="100%"
                      bgGradient={
                        "linear(to-tr, teal.300, blue.500, purple.600)"
                      }
                      _dark={{
                        bgGradient:
                          "linear(to-tr, teal.300, blue.500, purple.600)",
                      }}
                      p="2"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Image
                        h="12"
                        src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662642681/Canva-New-Logo_vtjzpw.png"
                        alt="canva"
                        position="absolute"
                        left="10"
                        zIndex={1}
                        bottom="20"
                        transform="rotate(10deg)"
                      />
                      <Image
                        h="28"
                        src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662642681/Canva-New-Logo_vtjzpw.png"
                        alt="canva"
                        position="absolute"
                        left="-10"
                        zIndex={1}
                        bottom="-10"
                      />
                      <Image
                        h="28"
                        src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662642681/Canva-New-Logo_vtjzpw.png"
                        alt="canva"
                        position="absolute"
                        right="-20"
                        zIndex={1}
                        bottom="10"
                      />
                      <Button
                        as="a"
                        href="https://www.canva.com/"
                        target="_blank"
                        size="lg"
                        width="full"
                        h="full"
                        bg="purple.300"
                        colorScheme="purple"
                        color="white"
                        rightIcon={<ArrowForwardIcon />}
                      >
                        Visit Canva
                      </Button>
                    </Flex>
                  </Flex>
                </SimpleGrid>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Hide>
      </Box>
      {categories.map((category: any) => {
        return (
          <Category
            path="discover"
            key={category._id}
            name={category.name}
            description={category.description}
            apps={category.discoverz.slice(0, 6)}
            allApps={category.discoverz}
            id={category._id}
          />
        );
      })}
    </Box>
  );
}
