import { Box } from "@chakra-ui/react";
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

export default function Discover() {
  return (
    <Box as="div" height="100%">
      <Box mb="2">
        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 10,
            modifier: 2,
            slideShadows: true,
          }}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[
            Pagination,
            Navigation,
            EffectCube,
            EffectCoverflow,
            Autoplay,
          ]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Box
              h="320px"
              w="100%"
              bgGradient="linear(to-r, green.200, pink.500)"
            ></Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              h="320px"
              w="100%"
              bgGradient="linear(to-r, green.200, pink.500)"
            ></Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              h="320px"
              w="100%"
              bgGradient="linear(to-r, green.200, pink.500)"
            ></Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              h="320px"
              w="100%"
              bgGradient="linear(to-r, green.200, pink.500)"
            ></Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              h="320px"
              w="100%"
              bgGradient="linear(to-r, green.200, pink.500)"
            ></Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              h="320px"
              w="100%"
              bgGradient="linear(to-r, green.200, pink.500)"
            ></Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              h="320px"
              w="100%"
              bgGradient="linear(to-r, green.200, pink.500)"
            ></Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              h="320px"
              w="100%"
              bgGradient="linear(to-r, green.200, pink.500)"
            ></Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              h="320px"
              w="100%"
              bgGradient="linear(to-r, green.200, pink.500)"
            ></Box>
          </SwiperSlide>
        </Swiper>
      </Box>
      <Category />
      <Category />
    </Box>
  );
}
