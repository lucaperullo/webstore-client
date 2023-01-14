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
  InputRightAddon,
  IconButton,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Checkbox,
  Tag,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  BiJoystick,
  BiSort,
  BiSortAZ,
  BiSortDown,
  BiSortUp,
} from "react-icons/bi";
import {
  FiCompass,
  FiLogIn,
  FiStar,
  FiSettings,
  FiSearch,
  FiDollarSign,
  FiXCircle,
} from "react-icons/fi";
import { GoSettings } from "react-icons/go";
import { BsGrid } from "react-icons/bs";

import { NavItem } from "./navitem";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import AdvertiseFluid from "../ads/fluid-ad";

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
  const location = useLocation();
  const [searching, setSearching] = useState(false);
  const [isSearchingData, setIsSearchingData] = useState(false);
  const [data, setData] = useState<any>(null);
  const [query, setQuery] = useState("");
  const [priceHightoLow, setPriceHightoLow] = useState<Boolean | string>(
    "null"
  );
  const LinkItems: Array<LinkItemProps> = [
    { name: "Discover", path: "/", icon: FiCompass },
    { name: "Games", icon: BiJoystick },
    { name: "Applications", icon: BsGrid },
    { name: "Paid", icon: FiDollarSign },
    { name: "login", icon: FiLogIn },
  ];
  const loggedInLinks: Array<LinkItemProps> = [
    { name: "Favourites", icon: FiStar },
    { name: "Settings", icon: FiSettings },
  ];
  const searchStuff = () => {
    setIsSearchingData(true);

    setSearching(true);
    let url = import.meta.env.VITE_BASE_URL + "search/" + query;
    let urlPrice = import.meta.env.VITE_BASE_URL + "search/" + query + "/price";

    if (priceHightoLow === "null") {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setIsSearchingData(false);

          setData(data);
        });
    } else if (priceHightoLow === true) {
      fetch(urlPrice, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceHightoLow }),
      })
        .then((res) => res.json())
        .then((data) => {
          setIsSearchingData(false);

          setData(data);
        });
    } else if (priceHightoLow === false) {
      fetch(urlPrice, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceHightoLow }),
      })
        .then((res) => res.json())
        .then((data) => {
          setIsSearchingData(false);

          setData(data);
        });
    }
  };
  useEffect(() => {
    if (priceHightoLow !== "null" || query !== "") {
      searchStuff();
    }
  }, [query, priceHightoLow]);

  useEffect(() => {

    if (query === "") {
      setSearching(false);
    }
    
  }, [query]);

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
      overflowY="auto"
      overflowX="hidden"
    >
      <Flex
        bg="gray.50"
        _dark={{
          bg: "gray.900",
        }}
        zIndex={2}
        position="sticky"
        top={0}
        mb="10"
        flexDir="column"
        h="auto"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          cursor={"pointer"}
          display={{ base: "none", md: "flex" }}
          h="60px"
          w="200px"
          mt="4"
          ml="4"
          bgImage={"url(/assets/webstore_logo_long.svg)"}
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          onClick={() => navigate("/")}
        ></Box>
        <Flex w="full" py="4" px="2" boxShadow="1px 1px #80808040">
          <CloseButton
            display={{ base: "flex", md: "none" }}
            onClick={onClose}
          />
          <InputGroup
            w="full"
            px="2"
            onChange={(e: any) => {
              if (e.target.value.length > 1) {
                setIsSearchingData(true);
                setQuery(e.target.value);
              } else {
                setSearching(false);
                setData(null);
              }
            }}
          >
            <InputLeftAddon
              w="35px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              border="none"
              p={0}
              children={<FiSearch />}
              bg="transparent"
              position="absolute"
            />
            <Input
              pl="8"
              minW="120px"
              w="full"
              type="search"
              placeholder="Search"
            />
            <InputRightAddon
              p={0}
              children={
                <Popover>
                  <PopoverTrigger>
                    <IconButton
                      mx="0"
                      icon={<GoSettings />}
                      aria-label={"filter-for"}
                      borderLeftRadius="0"
                    />
                  </PopoverTrigger>{" "}
                  <PopoverContent
                    h={{
                      md: "auto",
                    }}
                    w={{
                      base: "99vw",
                      md: "239px",
                    }}
                  >
                    <PopoverArrow />
                    <PopoverHeader display="flex" justifyContent="space-evenly">
                      <Text>Filter for</Text>{" "}
                      {priceHightoLow !== "null" && (
                        <Tag
                          onClick={() => setPriceHightoLow("null")}
                          colorScheme="blue"
                          cursor="pointer"
                        >
                          reset
                          <FiXCircle />
                        </Tag>
                      )}
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody
                      p={0}
                      flexDir="column"
                      display="flex"
                      overflow="hidden"
                    >
                      <Button
                        variant={priceHightoLow ? "ghost" : "solid"}
                        colorScheme={priceHightoLow ? "gray" : "blue"}
                        borderRadius={0}
                        leftIcon={<BiSortDown />}
                        onClick={() => setPriceHightoLow(false)}
                      >
                        Price: High to Low
                      </Button>

                      <Button
                        variant={priceHightoLow === true ? "solid" : "ghost"}
                        colorScheme={priceHightoLow === true ? "blue" : "gray"}
                        borderRadius={0}
                        leftIcon={<BiSortUp />}
                        onClick={() => setPriceHightoLow(true)}
                      >
                        {" "}
                        Price: Low to High
                      </Button>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              }
              bg="transparent"
            />
          </InputGroup>
        </Flex>
      </Flex>

      {!data ? (
        <Box>
          {!!user
            ? LinkItems.concat(loggedInLinks)
                .filter((r) => r.name !== "login")
                .map((link) => {
                  return (
                    <Link to={link.name.toLocaleLowerCase()} key={link.name}>
                      <Box p="2">
                        <NavItem
                          active={location.pathname}
                          onClick={onClose}
                          icon={link.icon}
                          link={link}
                        >
                          {link.name}
                        </NavItem>
                      </Box>
                    </Link>
                  );
                })
            : LinkItems.map((link) => {
                return (
                  <Link to={link.name.toLocaleLowerCase()} key={link.name}>
                    <Box p="2">
                      <NavItem
                        active={location.pathname}
                        link={link}
                        onClick={onClose}
                        icon={link.icon}
                      >
                        {link.name}
                      </NavItem>
                    </Box>
                  </Link>
                );
              })}

          <AdvertiseFluid />
        </Box>
      ) : (
        <Flex
          direction="column"
          h={{
            base: "calc(100vh - 48px)",
            md: "calc(100vh - 60px)",
          }}
          pb="28"
          p="4"
          pt="0"
          w="full"
          mt="0px"
        >
          {data
            .sort(
              // sort by elements with field path first
              (a: any, b: any) => (a.type ? -1 : 1)
            )
            .map((d: any, i: number) => {
              return (
                <Box
                  key={i}
                  my="2"
                  w="full"
                  display="flex"
                  alignItems="center"
                  justifyContent={{
                    base: "center",
                    md: "flex-start",
                  }}
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
                          alignItems={{
                            base: "center",
                            md: "flex-start",
                          }}
                        >
                          <Image
                            h="90px"
                            w="90px"
                            src={d.image}
                            alt={d.name}
                          ></Image>
                          <Text>{d.name}</Text>
                          <Text>{d?.price}</Text>
                        </Flex>
                      </Link>
                    )}
                    {!!d.type && (
                      <Box justifySelf="flex-start" alignSelf="flex-start">
                        <Link to={`/category/${d.type}/${d._id}`}>
                          <Flex direction="column">
                            <Text fontWeight={600}>{d.name}</Text>
                            <Text color="gray.500">{d.type}</Text>
                          </Flex>
                        </Link>
                      </Box>
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
