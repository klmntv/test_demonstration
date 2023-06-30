import { FC } from "react"
import App from "./src/App"

interface RogatkinProps {}

export const Rogatkin: FC<RogatkinProps> = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "100%",
      }}
    >
      Rogatkin
      <App />
    </div>
  )
}
