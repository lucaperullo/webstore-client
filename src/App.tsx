import { Box, ChakraProvider, Portal } from "@chakra-ui/react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Routings from "lib/router/Routings";
import { theme } from "lib/styles/customTheme";
import Navbar from "lib/components/navbar";
import "swiper/css/effect-cube";
import "swiper/css";
import "swiper/css/pagination";
import "./index.css";
import { StateProvider } from "./context/stateProvider";
import { initialState, reducer } from "./context/reducer";
import Loader from "lib/loader";

const App = () => (
  <ChakraProvider theme={theme}>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Box>
        <Loader />

        <Router>
          <Navbar>
            <Routings />
          </Navbar>
        </Router>
      </Box>
    </StateProvider>
  </ChakraProvider>
);

export default App;
