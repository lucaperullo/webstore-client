import type { PathRouteProps } from "react-router-dom";

import Home from "lib/pages/home";
import ForgotPassword from "lib/pages/forgot-password";
import Login from "lib/pages/login";
import Signup from "lib/pages/signup";
import Profile from "lib/pages/profile";
import Discover from "lib/pages/discover";
import Games from "lib/pages/games";
import Apps from "lib/pages/apps";
import AppDetail from "lib/pages/app-detail";
import Page404 from "lib/pages/404";
import SeeAllApps from "lib/pages/see-all";
import Working from "lib/pages/working";
import Paid from "lib/pages/paid";
import Favourites from "lib/pages/favourites";

export const routes: Array<PathRouteProps> = [
  {
    path: "/",
    element: <Home />,
  },
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
    path: "/discover",
    element: <Discover />,
  },
  {
    path: "/paid",
    element: <Paid />,
  },
  {
    path: "/detail/:path/:id",
    element: <AppDetail />,
  },

  {
    path: "/category/:path/:id",
    element: <SeeAllApps />,
  },
  {
    path: "games",
    element: <Games />,
  },
  {
    path: "applications",
    element: <Apps />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [

  {
    path: "/profile",
    element: <Profile />,
  },

  {
    path: "favourites",
    element: <Favourites />,
  },
  {
    path: "settings",
    element: <Working />,
  },
];
