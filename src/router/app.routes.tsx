import { RouteObject } from "react-router-dom";
import { Paths } from "./paths/path.routes";
import AppLayout from "../layout/app-layout/app-layout";
import HomePage from "../pages/Home.page";
import SearchPage from "../pages/Search.page";
import EpisodesPage from "../pages/Episodes.pgae";
import PlayerPage from "../pages/Player.page";

export const AppRoutes: RouteObject[] = [
  {
    path: Paths.INDEX,
    element: <AppLayout />,
    children: [
      { path: Paths.INDEX, element: <HomePage /> },
      { path: Paths.SEARCH, element: <SearchPage /> },
      // { path: Paths.SETTINGS, element: <SettingsPage /> },
      { path: Paths.EPISODES, element: <EpisodesPage /> },
    ],
  },
  { path: `${Paths.PLAYER}/:index`, element: <PlayerPage /> },
];
