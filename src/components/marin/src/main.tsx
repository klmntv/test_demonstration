import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";

if (process.env.NODE_ENV === "development") {
  await import("./mocks/browser.js").then(({ worker }) => worker.start());
}

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />);
