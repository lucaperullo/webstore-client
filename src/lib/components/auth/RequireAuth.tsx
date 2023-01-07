import { useStateValue } from "../../../context/stateProvider";
import { Navigate } from "react-router-dom";
import { authorise } from "guard";
import { useLayoutEffect } from "react";

type PrivateRouteProps = {
  children: React.ReactNode;
  redirectTo?: string;
};
// get context state value

const RequireAuth = ({
  children,
  redirectTo = "/login",
}: PrivateRouteProps) => {
const loggedIn = localStorage.getItem("user");





  return !!loggedIn ? (
    (children as React.ReactElement)
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default RequireAuth;
