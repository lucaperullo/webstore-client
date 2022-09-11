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
} from "@chakra-ui/react";
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
  };
  path: string;
}) {
  const navigate = useNavigate();

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
