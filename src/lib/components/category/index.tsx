import {
  Divider,
  Flex,
  chakra,
  SimpleGrid,
  Box,
  Hide,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import AppCard from "../app-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { useStateValue } from "../../../context/stateProvider";
import { useEffect, useState } from "react";

import "./styles.css";

import { ArrowDownIcon, ArrowRightIcon } from "@chakra-ui/icons";
import LikeButton from "../like-button";

export default function Category({ category }: { category: any }) {
  const {
    _id,
    name,
    apps,
    discoverz,
    games,
    paids,
    path,
    type,
    likes,
    description,
  } = category;
  const [state, dispatch] = useStateValue();

  const [likeCount, setLikeCount] = useState(likes.length);

  return (
    <motion.div key={_id}>
      <Divider mt="2" />
      <Box p="2" position="relative" overflow="hidden">
        <Flex justifyContent="space-between">
          <Flex alignItems="baseline" position="relative" w="full">
            <chakra.h2
              fontSize="2xl"
              fontWeight="bold"
              my="2"
              maxW={{
                base: "75%",
              }}
            >
              {name}
            </chakra.h2>
          </Flex>
          <Link to={`/category/${path || type}/${_id}`}>
            <Text
              mt="3"
              fontSize={{
                base: "sm",
                md: "md",
                lg: "lg",
              }}
              w="auto"
              minW="140px"
              display="flex"
              justifyContent="space-between"
              px="2"
              alignItems="center"
            >
              Show more
              <ArrowDownIcon transform="rotate(270deg)" />
            </Text>
          </Link>
        </Flex>
        <chakra.h3
          mb="10"
          color="gray.500"
          _dark={{
            color: "gray.300",
          }}
        >
          {description}
        </chakra.h3>
        <SimpleGrid
          columns={{
            base: 3,
            md: 4,
            lg: 6,
            xl: 6,
          }}
          spacing={10}
        >
          <Hide below="md">
            {(apps || discoverz || games || paids).slice(0, 6).map(
              (
                app: {
                  _id: string;
                  image: string;
                  name: string;
                  icon: string;
                  price: string;
                  path: string;
                },
                index: number
              ) => (
                <motion.div
                  // animate while in view from opacity 0 to 1 and scale 0.9 to 1 debounce 100ms
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: 0 + index * 0.05 }}

                  // debounce 100ms
                >
                  <AppCard app={app} />
                </motion.div>
              )
            )}
          </Hide>
        </SimpleGrid>
        <Hide above="md">
          <Box w="">
            <Swiper
              slidesPerView={3.5}
              spaceBetween={30}
              slidesPerGroup={1}
              className="mySwiper"
            >
              {(apps || discoverz || games || paids)?.slice(0, 6).map(
                (
                  app: {
                    _id: string;
                    image: string;
                    name: string;
                    icon: string;
                    price: string;
                    path: string;
                  },
                  index: number
                ) => (
                  <SwiperSlide key={index} virtualIndex={index}>
                    <motion.div
                      // animate while in view from opacity 0 to 1 and scale 0.9 to 1 debounce 100ms
                      key={index}
                      //  animate while in view and when exiting from opacity 1 to 0 and scale 1 to 0.9
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: 0 + index * 0.05 }}
                      // animate while not in view from opacity 1 to 0 and scale 1 to 0.9

                      // transition from 0.3 to 0.5 seconds

                      // debounce 100ms
                    >
                      <AppCard app={app} />
                    </motion.div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </Box>
        </Hide>
      </Box>

      <LikeButton element={category} showCount={true} />
    </motion.div>
  );
}
