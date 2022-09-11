import {
  Box,
  chakra,
  Container,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import AppCard from "lib/components/app-card";
import Category from "lib/components/category";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../../context/stateProvider";

export default function Favourites() {
  const [{ favourites }, state, dispatch] = useStateValue();
  const navigate = useNavigate();
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
    if (state.user) {
      getFavourites();
    }
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
      <Grid autoColumns="1fr" gap={6} mt="8" justifyContent={"center"}>
        {favourites.map((app: any) => {
          let type = app.type ? "category" : "app";
          return type === "category" ? (
            <GridItem colSpan={6}>
              {" "}
              <Category category={app} />
            </GridItem>
          ) : (
            <GridItem
              colSpan={{
                base: 3,
                md: 2,
                lg: 1,
              }}
            >
              <AppCard app={app} />
            </GridItem>
          );
        })}
      </Grid>
    </Container>
  );
}
