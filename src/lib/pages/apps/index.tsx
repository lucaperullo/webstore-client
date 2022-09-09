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

export default function Apps() {
  const [state, dispatch] = useStateValue();

  const [categories, setCategories] = useState<any>([]);

  let getCategories = () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    let url = import.meta.env.VITE_BASE_URL + "category/apps";
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
      {categories.map((category: any, i: number) => {
        console.log(category);
        return (
          <Category
            path="apps"
            key={category._id}
            name={category.name}
            description={category.description}
            apps={category.apps.slice(0, 6)}
            allApps={category.apps}
            id={category._id}
          />
        );
      })}
    </Box>
  );
}
