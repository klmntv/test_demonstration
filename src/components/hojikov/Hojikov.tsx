import { FC } from "react"
import App from "./src/App"

interface HojikovProps {}

export const Hojikov: FC<HojikovProps> = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <App />
    </div>
  )
}
