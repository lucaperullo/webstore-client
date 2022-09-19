import {
  Hide,
  SimpleGrid,
  Flex,
  Button,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";
import { EffectCoverflow, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { BiDollar, BiGame } from "react-icons/bi";
import { BsCode } from "react-icons/bs";
export default function PaidCarousel() {
  return (
    <Box>
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
        breakpoints={{
          340: {
            slidesPerView: 1,
          },

          1424: {
            slidesPerView: 2.5,
          },
        }}
        centeredSlides={true}
        loop={true}
        modules={[EffectCoverflow, Autoplay]}
      >
        <SwiperSlide>
          <Box h="100%" w="100%">
            <SimpleGrid columns={1}>
              <Flex flexDir="column" alignItems="center">
                <Box
                  h="310"
                  w="100%"
                  color="blue.400"
                  bgImage="url(https://res.cloudinary.com/webstoreclouds/image/upload/v1662830856/Copilot_unhpzv.jpg)"
                  bgSize="cover"
                  bgPosition="center"
                  p="10"
                  pt="2"
                  position="relative"
                >
                  <Box
                    position="absolute"
                    h="310"
                    backdropFilter="blur(2px)"
                    bg="
                      
                     rgba(0, 0, 0, 0.2)"
                    w="100%"
                    top="0"
                    left="0"
                  ></Box>

                  <Text
                    zIndex={2}
                    w="70%"
                    top="10%"
                    left="50%"
                    transform={"translate(-50%, -10%)"}
                    textAlign={"center"}
                    fontSize="lg"
                    color="white"
                    position="absolute"
                    userSelect="none"
                  >
                    GitHub Copilot is a new AI-powered code-completion tool that
                    helps you write code faster and more efficiently. It’s
                    available in Visual Studio Code, PyCharm, and other
                    JetBrains IDEs.
                  </Text>
                  <Flex
                    h="120"
                    w="100%"
                    pt="0"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Image
                      position="absolute"
                      bottom="-20"
                      right="-20"
                      zIndex={10}
                      h="308px"
                      src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662831697/Untitled_design_5_b3l4e3.png"
                      alt="dribbble"
                    ></Image>
                    <Image
                      position="absolute"
                      bottom="-20"
                      left="-20"
                      zIndex={10}
                      h="308px"
                      src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662831699/Untitled_design_4_vweefg.png"
                    />
                    <Button
                      zIndex={1}
                      position="absolute"
                      bottom="0"
                      left="0"
                      borderRadius={0}
                      h="120"
                      as="a"
                      href="https://github.com/enterprise/trial?ref_cta=free%2520trial&ref_loc=banner&ref_page=blog"
                      target="_blank"
                      size="lg"
                      w="full"
                      color="white"
                      _hover={{
                        bg: "white",
                        color: "black",
                      }}
                      bg="transparent"
                      rightIcon={<BsCode />}
                    >
                      Free Trial
                    </Button>
                  </Flex>
                </Box>
              </Flex>
            </SimpleGrid>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box h="100%" w="100%">
            <SimpleGrid columns={1}>
              <Flex flexDir="column" alignItems="center">
                <Box
                  h="190px"
                  w="100%"
                  color="blue.400"
                  bgImage="url(https://res.cloudinary.com/webstoreclouds/image/upload/v1662679187/90-903638_m_bsjgev.jpg)"
                  bgSize="cover"
                  bgPosition="center"
                  p="10"
                  pt="2"
                  position="relative"
                >
                  <Box
                    position="absolute"
                    h="190"
                    backdropFilter="blur(2px)"
                    bg="
                      
                     rgba(0, 0, 0, 0.5)"
                    w="100%"
                    top="0"
                    left="0"
                  ></Box>

                  <Text
                    zIndex={2}
                    w="70%"
                    top="50%"
                    left="50%"
                    transform={"translate(-50%, -50%)"}
                    textAlign={"center"}
                    fontSize="lg"
                    color="white"
                    position="absolute"
                    userSelect="none"
                  >
                    Minecraft is a sandbox video game created by Swedish game
                    developer Markus Persson and released by Mojang in 2011.
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
                    bottom="-10"
                    right="-40"
                    zIndex={10}
                    h="328px"
                    src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662679879/httpsres.cloudinary.comwebstorecloudsimageuploadv166267967953024-middle_dpic0d.png_tokkhw.svg"
                    alt="dribbble"
                  ></Image>
                  <Image
                    position="absolute"
                    bottom="-12"
                    left="-40"
                    zIndex={10}
                    h="318px"
                    src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662679553/Untitled_design_16_awywhw.svg"
                  />
                  <Image
                    position="absolute"
                    bottom="-20"
                    left="-80"
                    zIndex={10}
                    h="218px"
                    src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662680083/httpsres.cloudinary.comwebstorecloudsimageuploadv166267967953024-middle_dpic0d.png_1_mlcutx.svg"
                  ></Image>
                  <Button
                    as="a"
                    href="https://www.minecraft.net/en-us/get-minecraft/"
                    target="_blank"
                    size="lg"
                    w="full"
                    h="full"
                    colorScheme="green"
                    rightIcon={<BiGame />}
                  >
                    Buy now
                  </Button>
                </Flex>
              </Flex>
            </SimpleGrid>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box h="100%" w="100%">
            <SimpleGrid columns={1}>
              <Flex flexDir="column" alignItems="center">
                <Box
                  h="190px"
                  w="100%"
                  color="blue.400"
                  bgImage="url(https://res.cloudinary.com/webstoreclouds/image/upload/v1662680980/battlefield-2042-1632843663471-1636990242712_5811.1280_tzvtmt.jpg)"
                  bgSize="cover"
                  bgPosition="center"
                  p="10"
                  pt="2"
                  position="relative"
                >
                  <Box
                    position="absolute"
                    h="190"
                    backdropFilter="blur(2px)"
                    bg="
                      
                     rgba(0, 0, 0, 0.5)"
                    w="100%"
                    top="0"
                    left="0"
                  ></Box>

                  <Text
                    zIndex={2}
                    w="70%"
                    top="50%"
                    left="50%"
                    transform={"translate(-50%, -50%)"}
                    textAlign={"center"}
                    fontSize="lg"
                    color="white"
                    position="absolute"
                    userSelect="none"
                  >
                    Battlefield 2042 is a first-person shooter video game
                    developed by EA DICE and published by Electronic Arts. It is
                    the sixteenth installment in the Battlefield series.
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
                    bottom="-12"
                    left="-40"
                    zIndex={10}
                    h="318px"
                    src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662681051/ZxUSygH5POHzvQlsAiDUAAJ7vrsbMFrbZLoQtrooNBQ_wx3d2n.png"
                  />

                  <Button
                    as="a"
                    href="https://www.ea.com/games/battlefield/battlefield-2042"
                    target="_blank"
                    size="lg"
                    w="full"
                    h="full"
                    colorScheme="blue"
                    rightIcon={<BiGame />}
                  >
                    Buy now
                  </Button>
                </Flex>
              </Flex>
            </SimpleGrid>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
