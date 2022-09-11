import {
  Divider,
  Flex,
  chakra,
  SimpleGrid,
  Box,
  Hide,
  Stack,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineStar, HiStar } from "react-icons/hi";
import AppCard from "../app-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { useStateValue } from "../../../context/stateProvider";
import { useEffect, useState } from "react";
import { FaRobot } from "react-icons/fa";

export default function Category({
  apps,
  description,
  name,
  path,
  allApps,
  id,
  likes,
}: {
  apps: any[];
  description: string;
  name: string;
  path: string;
  allApps: any[];
  id: string;
  likes: string[];
}) {
  const [state, dispatch] = useStateValue();
  const [liked, setLiked] = useState(false);
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
        setLiked(!liked);
        dispatch({
          type: "SET_USER",
          payload: res,
        });
      }
    }
  };

  useEffect(() => {
    if (state.user) {
      if (likes.includes(state.user._id)) {
        setLiked(true);
      }
    }

    return () => {};
  }, [state.user]);

  return (
    <motion.div>
      <Divider mt="2" />
      <Box p="2">
        <Flex justifyContent="space-between">
          <Flex alignItems="center">
            <chakra.h2 fontSize="2xl" fontWeight="bold" my="2">
              {name}
            </chakra.h2>
            <chakra.p fontSize="sm" color="gray.500" ml="4">
              {likes?.length + (!!liked ? 1 : 0)}{" "}
              {likes?.length > 0 ? "likes" : "like"}
            </chakra.p>
            <IconButton
              ml="1"
              onClick={() => likeElement(state?.user?._id, id)}
              aria-label="Star"
              icon={
                liked ? (
                  <HiStar fill="yellow" size={22} />
                ) : (
                  <HiOutlineStar size={22} />
                )
              }
              borderRadius="full"
              variant="ghost"
            ></IconButton>
          </Flex>

          <Link to={`/category/${path}/${id}`}>See all</Link>
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
            {apps?.map((app, index) => (
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
            ))}
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
              {apps?.map((app, index) => (
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
              ))}
            </Swiper>
          </Box>
        </Hide>
      </Box>
    </motion.div>
  );
}
