import { Box, Heading, Text, Button, Image, Link } from "@chakra-ui/react";
import Title from "lib/components/title";
import { useNavigate } from "react-router-dom";

export default function Page404() {
  const navigate = useNavigate();

  const handleBackToHome = () => navigate("/");
  return (
    <Box
      textAlign="center"
      py={6}
      px={6}
      bg="white"
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <Title title="404" description="Page not found" />
      <Text fontSize="18px" mt={3} mb={2} fontWeight="600" color="gray.900">
        Page Not Found
      </Text>
      <Text color={"gray.500"} mb={6}>
        The page you're looking for does not seem to exist
      </Text>
      <Text fontSize={30} fontWeight="800">
        Art by{" "}
        <Link
          position="absolute"
          left="70%"
          top="50%"
          transform="rotate(-90deg)"
          color="blue.300"
          href="https://dribbble.com/elinataka"
          target="_blank"
        >
          {" "}
          Elina Takahashi
        </Link>
      </Text>
      <Image mt="-16" src="/assets/ElinaTakahashi.gif" alt="404" mb={6} />

      <Button
        bgGradient="linear(to-r, blue.300, teal.200, blue.400)"
        colorScheme={"blue"}
        color="white"
        variant="solid"
        onClick={handleBackToHome}
      >
        Go to Home
      </Button>
    </Box>
  );
}
