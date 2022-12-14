import { ReactNode, useEffect } from "react";
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";

import { useStateValue } from "../../../context/stateProvider";
import { SidebarContent } from "./sidebarcontent";
import { MobileNav } from "./mobileNav";
import { useNavigate } from "react-router-dom";

export default function Navbar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, dispatch] = useStateValue();
  const navigate = useNavigate();
  const getFavourites = async () => {
    let url = import.meta.env.VITE_BASE_URL + `users/favourites`;
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(state.user.favourites),
    });
    let data = await res.json();
    dispatch({
      type: "SET_FAVOURITES",
      payload: data,
    });
  };
  useEffect(() => {
    if (state.user) {
      getFavourites();
    }
  }, [state.user]);

  const logout = () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    let url = import.meta.env.VITE_BASE_URL + "users/logout";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then(() => {
        dispatch({
          type: "SET_USER",
          payload: null,
        });

        dispatch({
          type: "SET_LOADING",
          payload: false,
        });

        navigate("/discover");
      });
  };
  let { user } = state;
  let { isHome } = state;

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        navigate={() => navigate("/")}
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        user={user}
        transform={isHome ? "translateX(-100%)" : "translateX(0)"}
      />
      <Box transform={!isHome ? "translateX(-100%)" : "translateX(0)"}>
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent user={user} onClose={onClose} navigate={navigate} />
          </DrawerContent>
        </Drawer>
      </Box>
      {/* mobilenav */}

      <MobileNav
        user={user}
        onOpen={onOpen}
        logout={logout}
        transform={isHome ? "translateY(-100%)" : "translateY(0)"}
        transition="all 0.5s ease"
      />
      <Box h="calc(100%-100px)" ml={{ base: 0, md: 60 }}>
        {children}
      </Box>
    </Box>
  );
}
