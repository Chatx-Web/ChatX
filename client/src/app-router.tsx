import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Services from "./pages/services";
import SignUp from "./pages/sign-up";
import Login from "./pages/login";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/services" Component={Services} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/login" Component={Login} />
      </Routes>
    </BrowserRouter>
  );
}
