import { Navigate, useRoutes } from "react-router-dom";

import { Paths } from "./paths/path.routes";
import { AppRoutes } from "./app.routes";

export const Router = () => {
  return useRoutes([
    // {
    //   path: "/",
    //   element: <Navigate to={Paths.HOME} replace />,
    // },
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
