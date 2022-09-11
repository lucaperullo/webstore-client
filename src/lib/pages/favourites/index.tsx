import {
  Box,
  chakra,
  Container,
  Flex,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import AppCard from "lib/components/app-card";
import Category from "lib/components/category";
import { useEffect } from "react";
import { useStateValue } from "../../../context/stateProvider";

export default function Favourites() {
  const [{ favourites }, state, dispatch] = useStateValue();
  const getFavourites = async () => {
    let url = import.meta.env.VITE_BASE_URL + `users/favourites`;
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(state.user.favourites),
    });
    let data = await res.json();
    dispatch({
      type: "SET_FAVOURITES",
      payload: data,
    });
  };
  useEffect(() => {
    getFavourites();
  }, [state.user]);

  return (
    <Container maxW="7xl" pt="8">
      <Flex>
        <Text
          fontSize={{
            base: "2xl",
            md: "4xl",
          }}
          fontWeight="bold"
        >
          Favourites
        </Text>
      </Flex>

      {favourites.map((app: any) => {
        let type = app.type ? "category" : "app";
        return type === "category" ? (
          <Category category={app} />
        ) : (
          <AppCard app={app} path={app.path} />
        );
      })}
    </Container>
  );
}
