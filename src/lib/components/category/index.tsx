import {
  Divider,
  Flex,
  chakra,
  SimpleGrid,
  Box,
  Hide,
  Text,
  IconButton,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineStar, HiStar } from "react-icons/hi";
import AppCard from "../app-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { useStateValue } from "../../../context/stateProvider";
import { Key, useEffect, useState } from "react";
import { FaRobot } from "react-icons/fa";
import "./styles.css";
import { BiHeart } from "react-icons/bi";
import { BsFillHeartFill } from "react-icons/bs";
import { ArrowDownIcon, ArrowRightIcon } from "@chakra-ui/icons";

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
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes.length);
  const toast = useToast();
  const likeElement = async (userId: string, appId: string) => {
    if (!state.user) {
      toast({
        icon: <FaRobot />,
        title: "Whoops it seems you are not logged in",
        description: "Login or register to enjoy all our cool features",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      let star = document.getElementById(_id);
      star?.classList.toggle("isActive");
      setLiked(!liked);
      let url =
        import.meta.env.VITE_BASE_URL + "users/like" + `/${userId}/${appId}`;
      const data = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const res = await data.json();
      if (res.error) {
        toast({
          title: "Error",
          description: res.error,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        dispatch({
          type: "SET_USER",
          payload: res?.user,
        });
        setLikeCount(res?.element?.likes?.length);
      }
    }
  };

  useEffect(() => {
    if (state.user) {
      if (likes?.includes(state.user._id)) {
        setLiked(true);
      }
    }

    return () => {};
  }, [state?.user?.likes]);

  const starColor = useColorModeValue("orange", "yellow");

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
            <chakra.p
              display={{
                base: "none",
                lg: "block",
              }}
              ml="2"
              minW={{
                base: "60px",
              }}
              fontSize="xs"
              color="gray.500"
              textAlign="end"
            >
              SAVED BY &nbsp;{likeCount} &nbsp;PEOPLE
            </chakra.p>
          </Flex>
          <Link to={`/category/${path || type}/${_id}`}>
            <Text
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
                  <AppCard app={app} path={path} />
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
                      <AppCard app={app} path={path} />
                    </motion.div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </Box>
        </Hide>
      </Box>
      <Divider mt="2" />
      <SimpleGrid columns={2} spacing={10} mt="2">
        <Box
          mr="-10"
          onClick={() => likeElement(state.user._id, _id)}
          h="100px"
          w="100px"
          id={_id}
          className={`heart ${liked && "isActive"}`}
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          {liked ? "Remove from" : "Add to"} favourites
        </Box>
        <chakra.p
          display={{
            base: "block",
            lg: "none",
          }}
          ml="2"
          minW={{
            base: "60px",
          }}
          fontSize="xs"
          color="gray.500"
          textAlign="end"
        >
          SAVED BY &nbsp;{likeCount} &nbsp;PEOPLE
        </chakra.p>
      </SimpleGrid>
    </motion.div>
  );
}
