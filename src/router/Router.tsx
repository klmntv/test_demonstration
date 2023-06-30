import { RouteObject, createBrowserRouter } from "react-router-dom"
import { Root } from "../components/Root"
import { Hojikov } from "../components/hojikov/Hojikov"
import { Renard } from "../components/renard/Renard"
import { Rogatkin } from "../components/rogatkin/Rogatkin"
import { Marin } from "../components/marin/Marin"

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "marin",
        element: <Marin />,
      },
      {
        path: "hojikov",
        element: <Hojikov />,
      },
      {
        path: "renard",
        element: <Renard />,
      },
      {
        path: "rogatkin",
        element: <Rogatkin />,
      },
    ],
  },
]

export const router = createBrowserRouter(routes)
