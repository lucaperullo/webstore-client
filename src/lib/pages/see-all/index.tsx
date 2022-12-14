import {
  Box,
  Container,
  Flex,
  IconButton,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useStateValue } from "../../../context/stateProvider";
import AppFullCard from "lib/components/app-full-card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowBackIcon } from "@chakra-ui/icons";
import Title from "lib/components/title";

export default function SeeAllApps() {
  const { path } = useParams();
  const { id } = useParams();
  const [apps, setApps] = useState<any>(null);
  const [state, dispatch] = useStateValue();

  const getApps = () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });

    let url = import.meta.env.VITE_BASE_URL + `category/${path}/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        dispatch({
          type: "SET_LOADING",
          payload: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getApps();
  }, [id, path]);

  return (
    <Container
      maxW={{
        base: "100%",
        md: "7xl",
      }}
      p={0}
    >
      <Title title={apps?.name} description={apps?.description} />
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
            {apps?.name}
          </Text>
          <Text
            fontSize={{
              base: "sm",
              md: "md",
              lg: "xl",
            }}
            fontWeight={100}
          >
            {apps?.description}
          </Text>
        </Flex>
      </Flex>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 2,
          xl: 4,
        }}
        spacing={4}
        p="4"
      >
        {path === "discover" && (
          <>
            {apps?.discoverz?.slice(6)?.map((app: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: 0 + index * 0.005 }}
              >
                {" "}
                <AppFullCard app={app} path={path} />
              </motion.div>
            ))}
          </>
        )}
        {path === "games" && (
          <>
            {apps?.games?.slice(6)?.map((app: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: 0 + index * 0.005 }}
              >
                {" "}
                <AppFullCard app={app} path={path} />
              </motion.div>
            ))}
          </>
        )}
        {path === "apps" && (
          <>
            {apps?.apps?.slice(6)?.map((app: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: 0 + index * 0.005 }}
              >
                {" "}
                <AppFullCard app={app} path={path} />
              </motion.div>
            ))}
          </>
        )}

        {path === "paid" && (
          <>
            {apps?.paids?.slice(6)?.map((app: any, index: number) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: 0 + index * 0.005 }}
                >
                  <AppFullCard app={app} path={path} />
                </motion.div>
              );
            })}
          </>
        )}

        {/* {!!apps &&
        apps?.length &&
        apps?.map((app: any) => (
          <Box key={app.id}>
            <AppFullCard />
          </Box>
        ))} */}
      </SimpleGrid>
    </Container>
  );
}
