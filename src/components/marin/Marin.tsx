import { FC } from "react"
import App from "./src/App"

interface MarinProps {}

export const Marin: FC<MarinProps> = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "90%",
        maxHeight: "80%",
      }}
    >
      <App />
    </div>
  )
}
