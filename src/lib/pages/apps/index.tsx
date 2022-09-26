import { Box } from "@chakra-ui/react";
import "swiper/css/effect-coverflow";
import Category from "lib/components/category";

import { useStateValue } from "../../../context/stateProvider";
import { useEffect, useState } from "react";
import AppsCarousel from "./appsCarousel";
import CategorySkeleton from "lib/components/skeletons";
import Title from "lib/components/title";

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
      <Title title="WebStore | Apps" description="Discover new apps" />
      <Box mb="2">
        <AppsCarousel />
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
