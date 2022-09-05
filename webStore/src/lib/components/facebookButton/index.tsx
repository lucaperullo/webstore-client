import { FaFacebook } from "react-icons/fa";
import { Button, Center, Text } from "@chakra-ui/react";

export default function FacebookButton() {
  const facebookPassport = () => {
    window.open(import.meta.env.VITE_BASE_URL + "/users/facebook", "_self");
  };
  return (
    <Center p={8} py={0}>
      <Button
        w={"full"}
        maxW={"md"}
        colorScheme={"facebook"}
        leftIcon={<FaFacebook />}
        onClick={facebookPassport}
      >
        <Center>
          <Text>Continue with Facebook</Text>
        </Center>
      </Button>
    </Center>
  );
}
