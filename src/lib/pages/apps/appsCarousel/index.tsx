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
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function AppsCarousel() {
  return (
    <Box as="header">
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
                    color="whatsapp.400"
                    bg="black"
                    _dark={{
                      bg: "whatsapp.300",
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
                      Spotify
                    </Text>
                    <Text w="full" textAlign={"center"} fontSize="lg">
                      Spotify is a digital music, podcast and video streaming
                      service that gives you access to millions of songs and
                      other content.
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
                      src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662685069/httpsres.cloudinary.comwebstorecloudsimageuploadv166267967953024-middle_dpic0d.png_3_iduuyg.svg"
                      alt="dribbble"
                    ></Image>
                    <Image
                      position="absolute"
                      top="100px"
                      left="-20"
                      zIndex={1}
                      transform="rotate(10deg)"
                      h="90px"
                      src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662685069/httpsres.cloudinary.comwebstorecloudsimageuploadv166267967953024-middle_dpic0d.png_3_iduuyg.svg"
                      alt="dribbble"
                    ></Image>
                    <Image
                      position="absolute"
                      top="140px"
                      right="-10"
                      zIndex={10}
                      h="208px"
                      src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662685069/httpsres.cloudinary.comwebstorecloudsimageuploadv166267967953024-middle_dpic0d.png_3_iduuyg.svg"
                      alt="dribbble"
                    ></Image>
                    <Image
                      position="absolute"
                      top="100px"
                      right="-20"
                      zIndex={1}
                      transform="rotate(10deg)"
                      h="90px"
                      src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662685069/httpsres.cloudinary.comwebstorecloudsimageuploadv166267967953024-middle_dpic0d.png_3_iduuyg.svg"
                      alt="dribbble"
                    ></Image>
                    <Button
                      as="a"
                      href="https://dribbble.com/"
                      target="_blank"
                      size="lg"
                      w="full"
                      h="full"
                      bg="whatsapp.400"
                      colorScheme="whatsapp"
                      color="black"
                      rightIcon={<ArrowForwardIcon />}
                    >
                      Visit Spotify
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
                    bgGradient="linear(to-tr, purple.800,  whatsapp.600)"
                  >
                    <Text
                      w="full"
                      textAlign="center"
                      fontWeight={800}
                      fontSize={50}
                      color="white"
                    >
                      Ymusic
                    </Text>
                    <Text
                      w="full"
                      textAlign={"center"}
                      fontSize="lg"
                      color="white"
                    >
                      Ymusic is a free alternative to Spotify, Apple Music, and
                      other streaming services.
                    </Text>
                    <Image
                      position="absolute"
                      top="180px"
                      left="-10"
                      zIndex={10}
                      h="138px"
                      src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662685717/httpsres.cloudinary.comwebstorecloudsimageuploadv166267967953024-middle_dpic0d.png_5_jwqyrt.svg"
                      alt="dribbble"
                      transform={"rotate(180deg)"}
                    ></Image>
                    <Image
                      position="absolute"
                      top="0px"
                      left="-10"
                      zIndex={1}
                      transform="rotate(10deg)"
                      h="90px"
                      src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662685717/httpsres.cloudinary.comwebstorecloudsimageuploadv166267967953024-middle_dpic0d.png_5_jwqyrt.svg"
                      alt="dribbble"
                    ></Image>
                    <Image
                      position="absolute"
                      top="140px"
                      right="-10"
                      zIndex={10}
                      h="198px"
                      src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662685717/httpsres.cloudinary.comwebstorecloudsimageuploadv166267967953024-middle_dpic0d.png_5_jwqyrt.svg"
                      alt="dribbble"
                    ></Image>
                    <Image
                      position="absolute"
                      top="100px"
                      right="-20"
                      zIndex={1}
                      transform="rotate(10deg)"
                      h="70px"
                      src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662685717/httpsres.cloudinary.comwebstorecloudsimageuploadv166267967953024-middle_dpic0d.png_5_jwqyrt.svg"
                      alt="dribbble"
                    ></Image>
                  </Box>
                  <Flex
                    h="120"
                    w="100%"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Button
                      as="a"
                      href="https://ymusic.io/"
                      target="_blank"
                      size="lg"
                      width="full"
                      h="full"
                      colorScheme="purple"
                      bgGradient={"linear(to-tr, purple.800,  whatsapp.600)"}
                      _hover={{
                        bgGradient: "linear(to-tr, purple.700,  whatsapp.500)",
                        color: "white",
                      }}
                      rightIcon={<ArrowForwardIcon />}
                      color="white"
                      _dark={{
                        color: "white",
                        _hover: {
                          color: "white",
                        },
                      }}
                    >
                      Visit Ymusic
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
                    bgImage="url(https://res.cloudinary.com/webstoreclouds/image/upload/v1662683490/telegram-1_xzgb5e.png)"
                    bgSize="cover"
                    bgPosition="bottom"
                  >
                    <Box
                      h="90px"
                      w="full"
                      textAlign="center"
                      fontWeight={700}
                      fontSize={60}
                      color="white"
                    ></Box>
                    <Text
                      w="full"
                      textAlign="center"
                      fontSize="xl"
                      color="white"
                    >
                      Telegram is a cloud-based mobile and desktop messaging app
                      with a focus on security and speed.
                    </Text>
                  </Box>
                  <Flex
                    h="120"
                    w="100%"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Image
                      h="48"
                      src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662683677/telegram-app_0_kb8ta7.png"
                      alt="canva"
                      position="absolute"
                      left="-20"
                      zIndex={1}
                      bottom="-10"
                    />
                    <Image
                      h="48"
                      src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662683677/telegram-app_0_kb8ta7.png"
                      alt="canva"
                      position="absolute"
                      right="-20"
                      zIndex={1}
                      bottom="-10"
                    />
                    <Image
                      h="48"
                      src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662683677/telegram-app_0_kb8ta7.png"
                      alt="canva"
                      position="absolute"
                      left="-40"
                      zIndex={1}
                      bottom="20"
                    />
                    <Image
                      h="48"
                      src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662683677/telegram-app_0_kb8ta7.png"
                      alt="canva"
                      position="absolute"
                      right="-40"
                      zIndex={1}
                      bottom="40"
                    />
                    <Button
                      as="a"
                      href="https://web.telegram.org/z/"
                      target="_blank"
                      size="lg"
                      width="full"
                      h="full"
                      colorScheme="telegram"
                      color="white"
                      rightIcon={<ArrowForwardIcon />}
                    >
                      Visit Telegram
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
                    color="whatsapp.400"
                    bg="black"
                    _dark={{
                      bg: "whatsapp.300",
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
                      Spotify
                    </Text>
                    <Text w="full" textAlign={"center"} fontSize="md">
                      Spotify is a digital music, podcast and video streaming
                      service that gives you access to millions of songs and
                      other content.
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
                      src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662685069/httpsres.cloudinary.comwebstorecloudsimageuploadv166267967953024-middle_dpic0d.png_3_iduuyg.svg"
                      alt="dribbble"
                    ></Image>
                    <Image
                      position="absolute"
                      top="100px"
                      left="-20"
                      zIndex={1}
                      transform="rotate(10deg)"
                      h="50px"
                      src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662685069/httpsres.cloudinary.comwebstorecloudsimageuploadv166267967953024-middle_dpic0d.png_3_iduuyg.svg"
                      alt="dribbble"
                    ></Image>
                    <Image
                      position="absolute"
                      top="140px"
                      right="-10"
                      zIndex={10}
                      h="98px"
                      src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662685069/httpsres.cloudinary.comwebstorecloudsimageuploadv166267967953024-middle_dpic0d.png_3_iduuyg.svg"
                      alt="dribbble"
                    ></Image>
                    <Image
                      position="absolute"
                      top="100px"
                      right="-20"
                      zIndex={1}
                      transform="rotate(10deg)"
                      h="40px"
                      src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662685069/httpsres.cloudinary.comwebstorecloudsimageuploadv166267967953024-middle_dpic0d.png_3_iduuyg.svg"
                      alt="dribbble"
                    ></Image>
                    <Button
                      as="a"
                      href="https://open.spotify.com/"
                      target="_blank"
                      size="lg"
                      w="full"
                      h="full"
                      bg="whatsapp.400"
                      colorScheme="whatsapp"
                      color="black"
                      rightIcon={<ArrowForwardIcon />}
                    >
                      Visit Spotify
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
                    bgGradient="linear(to-tr, purple.800,  whatsapp.600)"
                  >
                    <Text
                      w="full"
                      textAlign="center"
                      fontWeight={800}
                      fontSize={50}
                      color="white"
                    >
                      Ymusic
                    </Text>
                    <Text
                      w="full"
                      textAlign={"center"}
                      fontSize="lg"
                      color="white"
                    >
                      Ymusic is a free alternative to Spotify, Apple Music, and
                      other streaming services.
                    </Text>
                    <Image
                      position="absolute"
                      top="180px"
                      left="-10"
                      zIndex={10}
                      h="98px"
                      src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662685717/httpsres.cloudinary.comwebstorecloudsimageuploadv166267967953024-middle_dpic0d.png_5_jwqyrt.svg"
                      alt="dribbble"
                    ></Image>
                    <Image
                      position="absolute"
                      top="100px"
                      left="-20"
                      zIndex={1}
                      transform="rotate(10deg)"
                      h="50px"
                      src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662685717/httpsres.cloudinary.comwebstorecloudsimageuploadv166267967953024-middle_dpic0d.png_5_jwqyrt.svg"
                      alt="dribbble"
                    ></Image>
                    <Image
                      position="absolute"
                      top="140px"
                      right="-10"
                      zIndex={10}
                      h="98px"
                      src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662685717/httpsres.cloudinary.comwebstorecloudsimageuploadv166267967953024-middle_dpic0d.png_5_jwqyrt.svg"
                      alt="dribbble"
                    ></Image>
                    <Image
                      position="absolute"
                      top="100px"
                      right="-20"
                      zIndex={1}
                      transform="rotate(10deg)"
                      h="40px"
                      src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662685717/httpsres.cloudinary.comwebstorecloudsimageuploadv166267967953024-middle_dpic0d.png_5_jwqyrt.svg"
                      alt="dribbble"
                    ></Image>
                  </Box>
                  <Flex
                    h="100"
                    w="100%"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Button
                      as="a"
                      href="https://ymusic.io/"
                      target="_blank"
                      size="lg"
                      width="full"
                      h="full"
                      colorScheme="purple"
                      bgGradient={["linear(to-tr, purple.800,  whatsapp.600)"]}
                      rightIcon={<ArrowForwardIcon />}
                      _hover={{
                        bgGradient: "linear(to-tr, purple.800,  whatsapp.600)",
                        color: "white",
                      }}
                      color="white"
                      _dark={{
                        color: "white",
                        _hover: {
                          color: "white",
                        },
                      }}
                    >
                      Visit Ymusic
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
                    bgImage="url(https://res.cloudinary.com/webstoreclouds/image/upload/v1662683490/telegram-1_xzgb5e.png)"
                    bgSize="cover"
                    bgPosition="top"
                  >
                    <Text
                      w="full"
                      textAlign="center"
                      fontSize="xl"
                      color="white"
                      py="2"
                    >
                      Telegram is a cloud-based mobile and desktop messaging app
                      with a focus on security and speed.
                    </Text>
                  </Box>
                  <Flex
                    h="120"
                    w="100%"
                    bgGradient={"linear(to-tr, teal.300, blue.500, purple.600)"}
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
                      src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662683677/telegram-app_0_kb8ta7.png"
                      alt="canva"
                      position="absolute"
                      left="10"
                      zIndex={1}
                      bottom="20"
                      transform="rotate(10deg)"
                    />
                    <Image
                      h="28"
                      src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662683677/telegram-app_0_kb8ta7.png"
                      alt="canva"
                      position="absolute"
                      left="-10"
                      zIndex={1}
                      bottom="-10"
                    />
                    <Image
                      h="28"
                      src="https://res.cloudinary.com/webstoreclouds/image/upload/v1662683677/telegram-app_0_kb8ta7.png"
                      alt="canva"
                      position="absolute"
                      right="-20"
                      zIndex={1}
                      bottom="10"
                    />
                    <Button
                      as="a"
                      href="https://www.telegram.com/"
                      target="_blank"
                      size="lg"
                      width="full"
                      h="full"
                      bg="purple.300"
                      colorScheme="purple"
                      color="white"
                      rightIcon={<ArrowForwardIcon />}
                    >
                      Visit Telegram
                    </Button>
                  </Flex>
                </Flex>
              </SimpleGrid>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Hide>
    </Box>
  );
}
