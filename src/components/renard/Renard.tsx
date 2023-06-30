import { FC } from "react"
import App from "./src/components/App"

interface RenardProps {}

export const Renard: FC<RenardProps> = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "90%" }}>
      <App />
    </div>
  )
}
