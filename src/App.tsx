import { Box, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";

import Routings from "lib/router/Routings";
import { theme } from "lib/styles/customTheme";
import Navbar from "lib/components/navbar";
import "swiper/css/effect-cube";
import "swiper/css";
import "swiper/css/pagination";
import "./index.css";

import Loader from "lib/loader";
import { useEffect, useState } from "react";
import { authorise } from "./guard";
import { useStateValue } from "./context/stateProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [state, dispatch] = useStateValue();

  const setloggedInUser = () => {
    dispatch({
      type: "SET_USER",
      payload: user,
    });
  };
  const start = async () => {
    await authorise(setUser);

    dispatch({
      type: "SET_LOADING",
      payload: false,
    });
  };

  useEffect(() => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    start();
  }, []);

  useEffect(() => {
    setloggedInUser();
  }, [user]);
  return (
    <ChakraProvider theme={theme}>
      <Box>
        {state.isLoading && <Loader />}

        <Router>
          <Navbar>
            <Routings />
          </Navbar>
        </Router>
      </Box>
    </ChakraProvider>
  );
};

export default App;
