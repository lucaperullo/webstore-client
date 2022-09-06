import type { PathRouteProps } from "react-router-dom";

import Home from "lib/pages/home";
import ForgotPassword from "lib/pages/forgot-password";
import Login from "lib/pages/login";
import Signup from "lib/pages/signup";
import Profile from "lib/pages/profile";
import Discover from "lib/pages/discover";
import Games from "lib/pages/games";
import Apps from "lib/pages/apps";

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
    element: <Games />,
  },
  {
    path: "applications",
    element: <Apps />,
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
