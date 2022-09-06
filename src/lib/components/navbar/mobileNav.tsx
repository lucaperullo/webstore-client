import {
  FlexProps,
  Box,
  Text,
  Flex,
  useColorModeValue,
  IconButton,
  InputGroup,
  InputLeftAddon,
  Input,
  HStack,
  Menu,
  MenuButton,
  Avatar,
  VStack,
  MenuList,
  MenuItem,
  MenuDivider,
  Link,
} from "@chakra-ui/react";
import { useStateValue } from "../../../context/stateProvider";

import { FiMenu, FiSearch, FiBell, FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface MobileProps extends FlexProps {
  onOpen: () => void;
  user: any;
}
export const MobileNav = ({ user, onOpen, ...rest }: MobileProps) => {
  const [state, dispatch] = useStateValue();
  const logout = () => {
    dispatch({
      type: "SET_LOADING",
      loading: true,
    });
    let url = import.meta.env.VITE_API_URL + "users/logout";
    fetch(url, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "SET_USER",
          user: null,
        });
        dispatch({
          type: "SET_LOADING",
          loading: false,
        });
        dispatch({
          type: "SET_USER",
          payload: null,
        });
        navigate("/login");
      });
  };
  const navigate = useNavigate();
  return (
    <Flex
      pl={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      position="sticky"
      top={0}
      zIndex={2}
      width="full"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Webstore
      </Text>
      <Flex pl="60" display={{ base: "none", md: "flex" }} alignItems="center">
        <InputGroup>
          <InputLeftAddon children={<FiSearch />} />
          <Input placeholder="Search" />
        </InputGroup>
      </Flex>
      <Flex alignItems="center">
        {!!user && (
          <HStack spacing={{ base: "0", md: "6" }}>
            <IconButton
              size="lg"
              variant="ghost"
              aria-label="open menu"
              icon={<FiBell />}
            />

            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                  py={2}
                  transition="all 0.3s"
                  _focus={{ boxShadow: "none" }}
                >
                  <HStack>
                    <Avatar size={"sm"} src={user.image} />
                    <VStack
                      display={{ base: "none", md: "flex" }}
                      alignItems="flex-start"
                      spacing="1px"
                      ml="2"
                    >
                      <Text fontSize="sm">
                        {user.name} {user.surname}
                      </Text>
                      <Text fontSize="xs" color="gray.600">
                        {user.email}
                      </Text>
                    </VStack>
                    <Box display={{ base: "none", md: "flex" }}>
                      <FiChevronDown />
                    </Box>
                  </HStack>
                </MenuButton>
                <MenuList
                  bg={useColorModeValue("white", "gray.900")}
                  borderColor={useColorModeValue("gray.200", "gray.700")}
                >
                  <MenuItem onClick={() => navigate("/profile")}>
                    Profile
                  </MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem>Billing</MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={() => logout()}>
                    <Link color="red.400">Sign out </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </HStack>
        )}
      </Flex>
    </Flex>
  );
};
