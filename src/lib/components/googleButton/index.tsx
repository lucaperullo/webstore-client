import { FcGoogle } from "react-icons/fc";
import { Button, Center, Text } from "@chakra-ui/react";

export default function GoogleButton() {
  const googlePassport = () => {
    window.open(import.meta.env.VITE_BASE_URL + "/users/google", "_self");
  };
  return (
    <Center p={8} py={0}>
      <Button
        w={"full"}
        maxW={"md"}
        variant={"outline"}
        leftIcon={<FcGoogle />}
      >
        <Center>
          <Text>Sign in with Google</Text>
        </Center>
      </Button>
    </Center>
  );
}
