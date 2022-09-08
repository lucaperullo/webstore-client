import { Divider, Flex, chakra, SimpleGrid, Box, Hide } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import AppCard from "../app-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

export default function Category({
  apps,
  description,
  name,
  path,
  allApps,
  id,
}: {
  apps: any[];
  description: string;
  name: string;
  path: string;
  allApps: any[];
  id: string;
}) {
  return (
    <motion.div>
      <Divider mt="2" />
      <Box p="2">
        <Flex justifyContent="space-between">
          <chakra.h2 fontSize="2xl" fontWeight="bold" my="2">
            {name}
          </chakra.h2>

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
                animate={{ opacity: 1, scale: 1 }}
                // animate while not in view from opacity 1 to 0 and scale 1 to 0.9
                initial={{ opacity: 0, scale: 0.9 }}
                // transition from 0.3 to 0.5 seconds
                transition={{ duration: 0.3, delay: 0 + index * 0.1 }}

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
                  <AppCard app={app} path={path} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Hide>
      </Box>
    </motion.div>
  );
}
