import { FlexProps, Flex, Icon, Box } from "@chakra-ui/react";

import { ReactText, useEffect } from "react";
import { IconType } from "react-icons";

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  active?: string;
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
      bg={
        active?.slice(1) == link.name.toString().toLowerCase() ||
        active?.toLowerCase() == link.path
          ? "cyan.400"
          : "transparent"
      }
      _hover={{
        bg: "cyan.400",
        color: "white",
      }}
      {...rest}
    >
      {icon && (
        <Icon
          mr="4"
          fontSize="16"
          _groupHover={{
            color: "white",
          }}
          as={icon}
        />
      )}
      <Box h="100%">{children}</Box>
    </Flex>
  );
};
