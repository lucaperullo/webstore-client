import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { useStateValue } from "../../../context/stateProvider";
import AppFullCard from "lib/components/app-full-card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

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
        console.log(data);
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
    <Box>
      <Text
        fontSize={22}
        fontWeight={700}
        bg="gray.100"
        position="sticky"
        p="8"
        py="4"
        top="20"
        zIndex={2}
        borderBottom="1px solid #e2e8f0"
        _dark={{
          bg: "gray.900",
          borderBottom: "1px solid #2d3748",
        }}
      >
        {apps?.name}
      </Text>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 2,
          xl: 4,
        }}
        spacing={4}
        p="8"
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
                transition={{ duration: 0.3, delay: 0 + index * 0.05 }}
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
                transition={{ duration: 0.3, delay: 0 + index * 0.05 }}
              >
                {" "}
                <AppFullCard app={app} path={path} />
              </motion.div>
            ))}
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
    </Box>
  );
}
