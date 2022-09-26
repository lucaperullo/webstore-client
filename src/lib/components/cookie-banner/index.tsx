import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import CookieModal from "lib/components/cookie-modal";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(
    localStorage.getItem("cookieBanner") || "true"
  );
  const [showModal, setShowModal] = useState(false);

  const onClose = () => setShowModal(false);
  const onOpen = () => setShowModal(true);

  // useEffect(() => {
  //   document.body.style.overflow = "hidden";
  //   return () => {
  //     // enable scrolling on unmount
  //     document.body.style.overflow = "unset";
  //   };
  // }, []);

  return (
    <Box
      position="fixed"
      h="100vh"
      w="100vw"
      left={0}
      top={0}
      zIndex={1000}
      display={showBanner !== "false" ? "flex" : "none"}
      bg="rgba(0,0,0,0.8)"
    >
      <Flex
        position="fixed"
        bottom={!showModal && showBanner !== "false" ? "0" : "-100%"}
        opacity={!showModal && showBanner !== "false" ? 1 : 0}
        right={0}
        w={"full"}
        p={8}
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        transition={"all 0.25s ease-in-out"}
      >
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
          }}
          spacing={4}
        >
          <Flex flexDir="column">
            <Text
              fontSize={{
                base: "md",
                md: "lg",
                lg: "xl",
              }}
              fontWeight={700}
            >
              We value your privacy
            </Text>
            <Text
              fontSize={{
                base: "sm",
                md: "md",
              }}
            >
              We use cookies to enhance your browsing experience, serve
              personalized ads or content to support the project. By clicking
              "Accept", you consent to our use of cookies.
            </Text>
          </Flex>
          <Flex
            flexDirection={{
              base: "column",
              md: "row-reverse",
            }}
          >
            <Button
              ml={{ base: 0, md: 2 }}
              mb={{
                base: 2,
                md: 0,
              }}
              colorScheme="blue"
              variant="solid"
              onClick={() => {
                setShowBanner("false");
                localStorage.setItem("cookieBanner", "false");
              }}
            >
              Accept
            </Button>

            <Button colorScheme="blue" variant="outline" onClick={onOpen}>
              Info
            </Button>
          </Flex>
        </SimpleGrid>
      </Flex>
      <CookieModal onClose={onClose} isOpen={showModal} />
    </Box>
  );
}
