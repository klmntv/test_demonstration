import { RouterProvider } from "react-router-dom"
import { router } from "./router/Router"

export const App = () => (
  <div className="app">
    <RouterProvider router={router} />
  </div>
)
