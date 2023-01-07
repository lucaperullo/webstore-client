import { Box, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";

import Routings from "lib/router/Routings";
import { theme } from "lib/styles/customTheme";
import Navbar from "lib/components/navbar";
import "swiper/css/effect-cube";
import "swiper/css";
import "swiper/css/pagination";
import "./index.css";

import Loader from "lib/components/loader";
import { useEffect, useState } from "react";
import { authorise } from "./guard";
import { useStateValue } from "./context/stateProvider";
import CookieBanner from "lib/components/cookie-banner";

const App = () => {
  const [state, dispatch] = useStateValue();

  const setloggedInUser =async () => {
    dispatch({
      type: "SET_USER",
      payload: await authorise(),
    });
  };
  const start = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: false,
    });
    await setloggedInUser();
  };

  useEffect(() => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    start();
  }, []);

 
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Loader />

        <Router>
          <Navbar>
            <Routings />
          </Navbar>
        </Router>
        <CookieBanner />
      </Box>
    </ChakraProvider>
  );
};

export default App;
