import {
  Box,
  Text,
  BoxProps,
  CloseButton,
  Flex,
  useColorModeValue,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BiJoystick } from "react-icons/bi";
import {
  FiCompass,
  FiLogIn,
  FiStar,
  FiSettings,
  FiSearch,
} from "react-icons/fi";
import { BsGrid } from "react-icons/bs";
import { Link } from "react-router-dom";
import { NavItem } from "./navitem";
import { useState } from "react";

interface SidebarProps extends BoxProps {
  onClose: () => void;
  user: any;
}
interface LinkItemProps {
  name: string;
  path?: string;
  icon: IconType;
}
export const SidebarContent = ({ onClose, user, ...rest }: SidebarProps) => {
  const [searching, setSearching] = useState(false);
  const LinkItems: Array<LinkItemProps> = [
    { name: "Discover", path: "/", icon: FiCompass },
    { name: "Games", icon: BiJoystick },
    { name: "Applications", icon: BsGrid },
    { name: "login", icon: FiLogIn },
  ];
  const loggedInLinks: Array<LinkItemProps> = [
    { name: "Favourites", icon: FiStar },
    { name: "Settings", icon: FiSettings },
  ];

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      zIndex={100}
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Webstore
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <InputGroup
        px="4"
        my="2"
        onChange={(e: any) => {
          if (e.target.value.length > 0) {
            setSearching(true);
          } else {
            setSearching(false);
          }
        }}
      >
        <InputLeftAddon children={<FiSearch />} />
        <Input placeholder="Search" />
      </InputGroup>
      {!searching && (
        <>
          {!!user
            ? LinkItems.concat(loggedInLinks)
                .filter((r) => r.name !== "login")
                .map((link) => {
                  let linke = link.path
                    ? link.path
                    : link.name.toLocaleLowerCase();
                  return (
                    <Link to={linke} key={link.name}>
                      <NavItem onClick={onClose} icon={link.icon}>
                        {link.name}
                      </NavItem>
                    </Link>
                  );
                })
            : LinkItems.map((link) => {
                let linke = link.path
                  ? link.path
                  : link.name.toLocaleLowerCase();
                return (
                  <Link to={linke} key={link.name}>
                    <NavItem onClick={onClose} icon={link.icon}>
                      {link.name}
                    </NavItem>
                  </Link>
                );
              })}
        </>
      )}
    </Box>
  );
};
