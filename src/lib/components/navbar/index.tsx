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

export default function Navbar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, dispatch] = useStateValue();
  let { user } = state;
  useEffect(() => {
    let cookies = document.cookie;
    if (cookies) {
      console.log(cookies);
      let cookie = cookies.split(";");
      let token = cookie[0].split("=")[1];
      if (token) {
        localStorage.setItem("token", token);
      }
    }
  }, []);
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
      <MobileNav user={user} onOpen={onOpen} />
      <Box h="calc(100%-100px)">{children}</Box>
    </Box>
  );
}
