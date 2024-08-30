import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </BrowserRouter>
  );
}
