import { RouteObject } from "react-router-dom";
import { Paths } from "./paths/path.routes";
import { HomePage, SearchPage, CollectionsPage, SettingsPage } from "../pages";
import PlayerPage from "../pages/Player.page";
import { AppLayout } from "../shared/layout/app-layout";

export const AppRoutes: RouteObject[] = [
  {
    path: Paths.INDEX,
    element: <AppLayout />,
    children: [
      { path: Paths.INDEX, element: <HomePage /> },
      { path: Paths.SEARCH, element: <SearchPage /> },
      { path: Paths.EPISODES, element: <CollectionsPage /> },
      { path: Paths.SETTINGS, element: <SettingsPage /> },
    ],
  },
  { path: `${Paths.PLAYER}/:index`, element: <PlayerPage /> },
];
