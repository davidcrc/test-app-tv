import { Navigate, useRoutes } from "react-router-dom";

import { Paths } from "./paths/path.routes";
import { AppRoutes } from "./app.routes";

export const Router = () => {
  return useRoutes([
    ...AppRoutes,
    {
      path: "*",
      children: [
        {
          path: "*",
          element: <Navigate to={Paths.INDEX} replace />,
        },
      ],
    },
  ]);
};
