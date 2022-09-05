import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useStateValue } from "../../../context/stateProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FacebookButton from "lib/components/facebookButton";
import GoogleButton from "lib/components/googleButton";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [state, dispatch] = useStateValue();
  const signin = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    let url = "http://localhost:20012/users/login";
    let data = {
      email,
      password,
    };
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let { user } = await response.json();

    if (user) {
      dispatch({
        type: "SET_USER",
        payload: user,
      });
      setTimeout(() => {
        dispatch({
          type: "SET_LOADING",
          payload: false,
        });
      }, 1000);

      console.log(state);
      navigate("/");
    }
  };

  const navigate = useNavigate();

  return (
    <Flex
      minH={"calc(100vh - 80px)"}
      minW="100%"
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                onChange={(e: any) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  onChange={(e: any) => setPassword(e.target.value)}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-around"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link
                  color={"blue.400"}
                  onClick={() => navigate("/forgot-password")}
                >
                  Forgot password?
                </Link>
              </Stack>
              {/* <Stack>
                <FacebookButton />
                <GoogleButton />
              </Stack> */}
              <Flex justifyContent={"space-around"}>
                Don't have an account?
                <Link color={"blue.400"} onClick={() => navigate("/signup")}>
                  Sign up
                </Link>{" "}
              </Flex>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={() => signin()}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
