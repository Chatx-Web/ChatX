import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={App} />
      </Routes>
    </BrowserRouter>
  );
}
