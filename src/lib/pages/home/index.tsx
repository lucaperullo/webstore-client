import { useStateValue } from "../../../context/stateProvider";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css";
import "swiper/css/pagination";
import { Virtual, EffectCoverflow, Mousewheel, Pagination } from "swiper";
import "swiper/css/pagination";
import Welcome from "./welcome";
import Features from "./features";
import Title from "lib/components/title";
export default function Home() {
  const location = useLocation();

  let path = location.pathname.slice(1);
  const [state, dispatch] = useStateValue();
  const [swiperRef, setSwiperRef] = useState<any>(null);
  useEffect(() => {
    dispatch({
      type: "SET_HOME",
      payload: true,
    });
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
      dispatch({
        type: "SET_HOME",
        payload: false,
      });
    };
  }, []);

  return (
    <Box
      h="100vh"
      transition="0.2s ease-in-out"
      overflow="hidden"
      position={state.isHome ? "absolute" : "relative"}
      top={state.isHome ? "0" : "unset"}
      left={state.isHome ? "0" : "unset"}
      w={state.isHome ? "100%" : "unset"}
    >
      <Title
        title="Webstore | Learn more"
        description="Learn more about the project"
      />{" "}
      <Swiper
        onSwiper={setSwiperRef}
        style={{
          maxHeight: "100%",
        }}
        direction={"vertical"}
        grabCursor={true}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 10,
          stretch: -10,
          depth: 0,
          modifier: 4,
          slideShadows: false,
        }}
        mousewheel={true}
        modules={[Virtual, EffectCoverflow, Mousewheel, Pagination]}
      >
        <SwiperSlide>
          {" "}
          <Welcome slide={() => swiperRef.slideNext()} />
        </SwiperSlide>
        <SwiperSlide>
          <Features />
        </SwiperSlide>
        {/* <SwiperSlide>explore</SwiperSlide> */}
      </Swiper>
    </Box>
  );
}
