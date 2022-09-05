import { useStateValue } from "../../../context/stateProvider";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  children: React.ReactNode;
  redirectTo?: string;
};
// get context state value

const RequireAuth = ({
  children,
  redirectTo = "/login",
}: PrivateRouteProps) => {
  const [state] = useStateValue();
  console.log(state.user);
  // add your own authentication logic here
  const isAuthenticated = !!state.user;

  return isAuthenticated ? (
    (children as React.ReactElement)
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default RequireAuth;
