import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useStateValue } from "../../../context/stateProvider";
import { useEffect, useState } from "react";
import { FaRobot } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AppFullCard({
  app,
  path,
}: {
  app: {
    _id: string;
    image: string;
    name: string;
    description: string;
    url: string;
    likes: string[];
  };
  path: string;
}) {
  const navigate = useNavigate();
  const [state, dispatch] = useStateValue();
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(app.likes.length);
  const toast = useToast();
  const likeElement = async (userId: string, appId: string) => {
    if (!state.user) {
      toast({
        icon: <FaRobot />,
        title: "Whoops it seems you are not logged in",
        description: "Login or register to enjoy all our cool features",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      // let star = document.getElementById(app._id);
      // star?.classList.toggle("isActive");
      setLiked(!liked);
      let url =
        import.meta.env.VITE_BASE_URL + "users/like" + `/${userId}/${appId}`;
      const data = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const res = await data.json();
      if (res.error) {
        toast({
          title: "Error",
          description: res.error,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        dispatch({
          type: "SET_USER",
          payload: res?.user,
        });
        setLikeCount(res?.element?.likes?.length);
      }
    }
  };

  useEffect(() => {
    if (state.user) {
      if (app.likes?.includes(state.user._id)) {
        setLiked(true);
      }
    }

    return () => {};
  }, [state?.user?.likes]);

  return (
    <Center
      py={6}
      maxH={{
        base: "full",
        md: "sm",
      }}
      maxW={{
        base: "full",
        md: "sm",
      }}
      overflow="hidden"
    >
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        direction={{ base: "column" }}
        justifyContent="center"
        alignItems="center"
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={2}
        py={4}
      >
        <Image objectFit="cover" h="100px" w="100px" src={app.image} />

        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading
            fontSize={{ base: "md", sm: "lg", lg: "xl" }}
            fontFamily={"body"}
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            w={{
              base: "100%",
            }}
            overflow="hidden"
            textAlign={"center"}
          >
            {app.name}
          </Heading>

          <Text
            textAlign={"justify"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
            h="120px"
            textOverflow={"ellipsis"}
            overflow={"hidden"}
          >
            {app.description}
          </Text>

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
              onClick={() => navigate(`/detail/${path}/${app._id}`)}
            >
              Details
            </Button>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
              rightIcon={<ArrowForwardIcon w={4} h={4} />}
              as="a"
              href={app?.url}
              target="_blank"
            >
              Visit
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}
