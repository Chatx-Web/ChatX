import Container from "../reusable/container";
import Logo from "../reusable/logo";
import Button from "../reusable/button";
import { Link } from "react-router-dom";

interface NavLinkProps {
  to: string;
  content: string;
}

function NavLink({ to, content }: NavLinkProps) {
  return (
    <Link
      to={to}
      className="p-0.5 rounded font-medium transition-colors duration-300"
    >
      {content}
    </Link>
  );
}

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex flex-col justify-center h-20 shadow-sm shadow-white/10 bg-opacity-25 backdrop-blur-lg backdrop-filter z-10">
      <Container className="flex items-center justify-between">
        <Logo />
        <div className="space-x-4">
          <NavLink to="/" content="Home" />
          <NavLink to="/about" content="About" />
          <NavLink to="/contact" content="Contact" />
          <NavLink to="/services" content="Services" />
        </div>
        <Button className="py-1 px-2">Login</Button>
      </Container>
    </nav>
  );
}
