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
  Image,
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

import { NavItem } from "./navitem";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface SidebarProps extends BoxProps {
  onClose: () => void;
  user: any;
  navigate: any;
}
interface LinkItemProps {
  name: string;
  path?: string;
  icon: IconType;
}
export const SidebarContent = ({
  onClose,
  navigate,
  user,
  ...rest
}: SidebarProps) => {
  const [searching, setSearching] = useState(false);
  const [isSearchingData, setIsSearchingData] = useState(false);
  const [data, setData] = useState<any>(null);
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
        <Box
          cursor={"pointer"}
          display={{ base: "none", md: "flex" }}
          h="100px"
          w="180px"
          bgImage={"url(/assets/webstore_logo_long.svg)"}
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          onClick={() => navigate("/")}
        ></Box>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <InputGroup
        px="4"
        my="2"
        onChange={(e: any) => {
          if (e.target.value.length > 0) {
            setIsSearchingData(true);

            setSearching(true);
            let url =
              import.meta.env.VITE_BASE_URL + "search/" + e.target.value;
            fetch(url)
              .then((res) => res.json())
              .then((data) => {
                setIsSearchingData(false);
                setData(data);
              });
          } else {
            setSearching(false);
            setData(null);
          }
        }}
      >
        <InputLeftAddon children={<FiSearch />} bg="transparent" />
        <Input type="search" placeholder="Search" />
      </InputGroup>
      {!data ? (
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
      ) : (
        <Flex
          direction="column"
          h="60%"
          overflowY="auto"
          pb="28"
          p="4"
          pt="0"
          w="full"
        >
          {data
            .sort(
              // sort by elements with field path first
              (a: any, b: any) => (a.type ? -1 : 1)
            )
            .map((d: any, i: number) => {
              console.log(d, i);
              return (
                <Box
                  key={i}
                  my="2"
                  onClick={() => {
                    onClose();
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, transform: "translateY(-20px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    exit={{ opacity: 0, transform: "translateY(-20px)" }}
                    transition={{ duration: 0.3, delay: 0 + i * 0.001 }}
                  >
                    {!!d.path && (
                      <Link to={`/detail/${d.path}/${d._id}`}>
                        <Flex
                          direction="column"
                          w="full"
                          justifyContent="center"
                          alignItems="flex-start"
                        >
                          <Image
                            h="90px"
                            w="90px"
                            src={d.image}
                            alt={d.name}
                          ></Image>
                          <Text>{d.name}</Text>
                        </Flex>
                      </Link>
                    )}
                    {!!d.type && (
                      <Link to={`/category/${d.type}/${d._id}`}>
                        <Flex direction="column">
                          <Text fontWeight={600}>{d.name}</Text>
                          <Text color="gray.500">{d.type}</Text>
                        </Flex>
                      </Link>
                    )}
                  </motion.div>
                </Box>
              );
            })}
        </Flex>
      )}
    </Box>
  );
};
