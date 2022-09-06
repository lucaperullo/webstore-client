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
import { useStateValue } from "../../../context/stateProvider";
import { useEffect, useState } from "react";

export default function Games() {
  const [state, dispatch] = useStateValue();
  const [categories, setCategories] = useState([]);
  let getCategories = () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    let url = import.meta.env.VITE_BASE_URL + "category/games";
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
      {categories.map((category: any) => {
        return (
          <Category
            path="games"
            key={category._id}
            description={category.description}
            apps={category.games}
          />
        );
      })}
    </Box>
  );
}
