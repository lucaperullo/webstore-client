import type { PathRouteProps } from "react-router-dom";

import Home from "lib/pages/home";
import ForgotPassword from "lib/pages/forgot-password";
import Login from "lib/pages/login";
import Signup from "lib/pages/signup";
import Profile from "lib/pages/profile";
import Discover from "lib/pages/discover";

export const routes: Array<PathRouteProps> = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/",
    element: <Discover />,
  },
  {
    path: "games",
    element: <Home />,
  },
  {
    path: "applications",
    element: <Home />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },

  {
    path: "favourites",
    element: <Home />,
  },
  {
    path: "settings",
    element: <Home />,
  },
];
