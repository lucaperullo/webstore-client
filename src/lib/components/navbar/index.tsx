import { ReactNode, useEffect } from "react";
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { useCookies } from "react-cookie";
import { useStateValue } from "../../../context/stateProvider";
import SidebarContent from "./sidebarcontent";
import { MobileNav } from "./mobileNav";

export default function Navbar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, dispatch] = useStateValue();
  const [cookies, setCookie] = useCookies(["accessToken", "refreshToken"]);
  let { user } = state;
  useEffect(() => {
    if (cookies.accessToken && cookies.refreshToken) {
      localStorage.setItem("accessToken", cookies.accessToken);
      localStorage.setItem("refreshToken", cookies.refreshToken);
    }
  }, [cookies]);
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
