import { ColorModeScript } from "@chakra-ui/react";

import ReactDOM from "react-dom/client";

// fonts
import "@fontsource/plus-jakarta-sans/latin.css";

import { theme } from "lib/styles/customTheme";

import App from "./App";
import { StateProvider } from "./context/stateProvider";
import { initialState, reducer } from "./context/reducer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <ColorModeScript initialColorMode={theme.config?.initialColorMode} />
    <App />
  </StateProvider>
);
