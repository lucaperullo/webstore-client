import {
  FlexProps,
  Box,
  Text,
  Flex,
  useColorModeValue,
  IconButton,
  HStack,
  Menu,
  MenuButton,
  Avatar,
  VStack,
  MenuList,
  MenuItem,
  MenuDivider,
  Link,
  useColorMode,
} from "@chakra-ui/react";

import { FiMenu, FiBell, FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";

interface MobileProps extends FlexProps {
  onOpen: () => void;
  user: any;
  logout: () => void;
}
export const MobileNav = ({ logout, user, onOpen, ...rest }: MobileProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
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
      bg={useColorModeValue("gray.50", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      {/* <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Webstore
      </Text> */}
      <Box
        display={{ base: "flex", md: "none" }}
        h="80px"
        w="180px"
        bgImage={"url(/assets/webstore_logo_short.svg)"}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
      ></Box>

      <Flex alignItems="center">
        {!!user && (
          <HStack spacing={{ base: "0", md: "6" }}>
            <IconButton
              aria-label="Toggle Color Mode"
              onClick={toggleColorMode}
              _focus={{ boxShadow: "none" }}
              w="fit-content"
              variant="ghost"
              borderRadius="full"
            >
              {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
            </IconButton>

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
