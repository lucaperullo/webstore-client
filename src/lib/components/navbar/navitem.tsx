import { FlexProps, Flex, Icon, Box } from "@chakra-ui/react";

import { ReactText, useEffect } from "react";
import { IconType } from "react-icons";

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  active: string;
  link: any;
}
export const NavItem = ({
  icon,
  children,
  active,
  link,
  ...rest
}: NavItemProps) => {
  useEffect(() => {
    console.log(children.toString().toLocaleLowerCase(), active);
    // remove first char from string active
  }, [children, active]);
  function removeTrailingSlash(str: any) {
    return str.replace(/\/+$/, "");
  }

  return (
    <Flex
      align="center"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      transition="0.3s ease"
      bg={
        active?.slice(1) == link.name.toString().toLowerCase() ||
        active?.toLowerCase() == link.path
          ? "cyan.400"
          : "transparent"
      }
      color={
        active?.slice(1) == link.name.toString().toLowerCase() ||
        active?.toLowerCase() == link.path
          ? "white"
          : "gray.900"
      }
      _dark={
        active?.slice(1) == link.name.toString().toLowerCase() ||
        active?.toLowerCase() == link.path
          ? {
              bg: "cyan.600",
              color: "white",
              hover: {
                bg: "cyan.500",
              },
            }
          : {
              _hover: {
                bg: "gray.700",
              },
              bg: "transparent",
              color: "gray.50",
            }
      }
      _hover={
        active?.slice(1) == link.name.toString().toLowerCase() ||
        active?.toLocaleLowerCase() == link.path
          ? {}
          : {
              bg: "cyan.100",
              color: "gray.900",
            }
      }
      {...rest}
    >
      {icon && (
        <Icon
          mr="4"
          fontSize="16"
          _groupHover={
            active?.slice(1) == link.name.toString().toLowerCase() ||
            active?.toLowerCase() == link.path
              ? {}
              : {
                  color: "black",
                  _dark: {
                    color: "white",
                  },
                }
          }
          as={icon}
        />
      )}
      <Box h="100%">{children}</Box>
    </Flex>
  );
};
