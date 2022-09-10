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
import DiscoverCarousel from "./discoverCarousel";

export default function Discover() {
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
        <DiscoverCarousel />
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
