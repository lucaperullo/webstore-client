import { useStateValue } from "../../../context/stateProvider";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Text,
  Flex,
  Heading,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  StackDivider,
  useColorModeValue,
  VStack,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import LikeButton from "lib/components/like-button";
import Loader from "lib/loader";

export default function AppDetail() {
  const [state, dispatch] = useStateValue();
  let { path } = useParams();
  let { id } = useParams();
  const [app, setApp] = useState<any>(null);
  let getAppInfo = () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    let url = import.meta.env.VITE_BASE_URL + `elements/${path}/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setApp(data);

          dispatch({
            type: "SET_LOADING",
            payload: false,
          });
        }, 1000);
      });
  };
  useEffect(() => {
    getAppInfo();
  }, [path, id]);

  return (
    <Container
      maxW={{
        base: "100%",
        md: "7xl",
      }}
      p={0}
    >
      {app ? (
        <>
          <Flex
            bg="gray.100"
            position="sticky"
            p={{
              base: "0",
              md: "4",
              lg: "8",
            }}
            py="4"
            top="20"
            zIndex={2}
            borderBottom="1px solid #e2e8f0"
            _dark={{
              bg: "gray.900",
              borderBottom: "1px solid #2d3748",
            }}
            justifyContent="space-between"
            alignItems="center"
          >
            {" "}
            <IconButton
              mr="8"
              ml="4"
              size={"lg"}
              aria-label="go back"
              icon={<ArrowBackIcon />}
              onClick={() => {
                window.history.back();
              }}
            />
            <Flex justifyContent={"space-between"} w="full" flexDir="column">
              <Text fontSize={22} fontWeight={700}>
                {app?.name}
              </Text>
              <Text
                fontSize={{
                  base: "sm",
                  md: "md",
                  lg: "xl",
                }}
                fontWeight={100}
              >
                {path}
              </Text>
            </Flex>
          </Flex>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}
          >
            <Flex justifyContent="center">
              <Box
                bgImage={`url(${app?.image})`}
                bgSize="cover"
                bgPosition="center"
                w={{ base: "100px", sm: "300px", lg: "400px" }}
                h={{ base: "100px", sm: "300px", lg: "400px" }}
              />
            </Flex>
            <Button
              mx="4"
              position={{ base: "unset", md: "sticky" }}
              top="60"
              as="a"
              href={app?.url}
              target="_blank"
              rounded={"none"}
              w={"auto"}
              mt={8}
              size={"sm"}
              py={"7"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
              rightIcon={<ArrowForwardIcon w={4} h={4} />}
            >
              Visit {app?.name}
            </Button>
            <LikeButton element={app} showCount={true} />
            <Stack spacing={{ base: 6, md: 10 }}>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={"column"}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.200", "gray.600")}
                  />
                }
              >
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text
                    p="4"
                    color={useColorModeValue("gray.500", "gray.400")}
                    fontSize={"2xl"}
                    fontWeight={"300"}
                  >
                    {app?.description}
                  </Text>
                </VStack>
              </Stack>
            </Stack>
          </SimpleGrid>
        </>
      ) : (
        <Loader />
      )}
    </Container>
  );
}
