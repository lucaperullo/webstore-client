import { ReactNode, useEffect } from "react";
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";

import { useStateValue } from "../../../context/stateProvider";
import SidebarContent from "./sidebarcontent";
import { MobileNav } from "./mobileNav";
import { useNavigate } from "react-router-dom";

export default function Navbar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, dispatch] = useStateValue();
  const navigate = useNavigate();
  const logout = () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    let url = import.meta.env.VITE_BASE_URL + "users/logout";
    fetch(url, {
      method: "POST",
    })
      .then((res) => res.json())
      .then(() => {
        dispatch({
          type: "SET_LOADING",
          payload: false,
        });
        setTimeout(() => {
          dispatch({
            type: "SET_USER",
            payload: null,
          });
        }, 1000);
        navigate("/login");
      });
  };
  let { user } = state;

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        user={user}
      />
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
          <SidebarContent user={user} onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav user={user} onOpen={onOpen} logout={logout} />
      <Box h="calc(100%-100px)" ml={{ base: 0, md: 60 }}>
        {children}
      </Box>
    </Box>
  );
}
