import { Box, chakra, SimpleGrid, useToast } from "@chakra-ui/react";
import { useStateValue } from "../../../context/stateProvider";
import { useEffect, useState } from "react";

import { FaRobot } from "react-icons/fa";

export default function LikeButton({
  element,
  showCount,
}: {
  element: { _id: string; likes: string[] };
  showCount: boolean;
}) {
  const [state, dispatch] = useStateValue();
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(element?.likes?.length);
  const toast = useToast();
  const likeElement = async (userId: string, appId: string) => {
    if (!state.user) {
      toast({
        icon: <FaRobot />,
        title: "Whoops it seems you are not logged in",
        description: "Login or register to enjoy all our cool features",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      // let star = document.getElementById(element._id);
      // star?.classList.toggle("isActive");
      setLiked(!liked);
      let url =
        import.meta.env.VITE_BASE_URL + "users/like" + `/${userId}/${appId}`;
      const data = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const res = await data.json();
      if (res.error) {
        toast({
          title: "Error",
          description: res?.error,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        dispatch({
          type: "SET_USER",
          payload: res?.user,
        });
        setLikeCount(res?.element?.likes?.length);
      }
    }
  };

  useEffect(() => {
    if (state.user) {
      if (element?.likes?.includes(state?.user?._id)) {
        setLiked(true);
      }
    }

    return () => {};
  }, [state?.user?.favourites]);
  return (
    <SimpleGrid columns={2} spacing={10} mt="2">
      <Box
        mr="-10"
        onClick={() => likeElement(state?.user?._id, element?._id)}
        h="100px"
        w="100px"
        id={element?._id}
        className={`heart ${liked && "isActive"}`}
        textOverflow="ellipsis"
        whiteSpace="nowrap"
      >
        {liked ? "Remove from" : "Add to"} favourites
      </Box>
      {showCount && (
        <chakra.p
          display={{
            base: "block",
            lg: "none",
          }}
          ml="2"
          minW={{
            base: "60px",
          }}
          fontSize="xs"
          color="gray.500"
          textAlign="end"
        >
          SAVED BY &nbsp;{likeCount} &nbsp;PEOPLE
        </chakra.p>
      )}
    </SimpleGrid>
  );
}
