import { Routes, Route } from "react-router-dom";

import RequireAuth from "lib/components/auth/RequireAuth";
import Page404 from "lib/pages/404";

import { routes, privateRoutes } from "./routes";

const Routings = () => {
  return (
    <Routes>
      {routes.map((routeProps) => (
        <Route {...routeProps} key={routeProps.path as string} />
      ))}
      {privateRoutes.map(({ element, ...privateRouteProps }) => (
        <Route
          element={
            <RequireAuth
              redirectTo={`/login?redirectTo=${privateRouteProps.path}`}
            >
              {element}
            </RequireAuth>
          }
          {...privateRouteProps}
          key={`privateRoute-${privateRouteProps.path}`}
        />
      ))}
    </Routes>
  );
};

export default Routings;
