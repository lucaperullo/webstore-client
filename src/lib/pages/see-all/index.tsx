import { Box, SimpleGrid } from "@chakra-ui/react";
import { useStateValue } from "../../../context/stateProvider";
import AppFullCard from "lib/components/app-full-card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  }, []);

  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 3,
        lg: 3,
        xl: 4,
      }}
      spacing={40}
      p="8"
    >
      {path === "discover" && (
        <>
          {apps?.discoverz?.slice(6)?.map((app: any) => (
            <AppFullCard app={app} path={path} />
          ))}
        </>
      )}
      {path === "games" && (
        <>
          {apps?.games?.slice(6)?.map((app: any) => (
            <AppFullCard app={app} path={path} />
          ))}
        </>
      )}
      {path === "apps" && (
        <>
          {apps?.apps?.slice(6)?.map((app: any) => (
            <AppFullCard app={app} path={path} />
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
  );
}
