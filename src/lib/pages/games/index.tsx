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
import CategorySkeleton from "lib/components/skeletons";
import Title from "lib/components/title";

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
      <Title title="WebStore | Games" description="Discover new games" />
      <Box mb="2">
        <GamesCarousel />
      </Box>
      {categories.map((category: any, i: number) => {
        return (
          <Box key={i}>
            <Category category={category} />
          </Box>
        );
      })}
      {!categories.length &&
        Array.from(Array(5)).map((_, i) => <CategorySkeleton key={i} />)}
    </Box>
  );
}
