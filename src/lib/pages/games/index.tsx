import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Text,
  Image,
  Hide,
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
import { useStateValue } from "../../../context/stateProvider";
import { useEffect, useState } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { BiGame } from "react-icons/bi";
import GamesCarousel from "./gamesCarousel";

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
    <Box as="div" height="100%" overflowX="hidden">
      <Box mb="2">
        <GamesCarousel />
      </Box>
      {categories.map((category: any) => {
        return (
          <Category
            path="games"
            key={category._id}
            name={category.name}
            description={category.description}
            apps={category.games.slice(0, 6)}
            allApps={category.games}
            likes={category?.likes}
            id={category?._id}
          />
        );
      })}
    </Box>
  );
}
