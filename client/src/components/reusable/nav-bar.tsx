import Container from "./container";
import Logo from "./logo";
import Button from "./button";
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
    <nav className="fixed top-0 left-0 z-10 flex flex-col justify-center w-full h-20 bg-opacity-25 shadow-sm shadow-white/10 backdrop-blur-lg backdrop-filter">
      <Container className="flex items-center justify-between">
        <Logo />
        <div className="space-x-4">
          <NavLink to="/" content="Home" />
          <NavLink to="/about" content="About" />
          <NavLink to="/contact" content="Contact" />
          <NavLink to="/services" content="Services" />
        </div>
        <div className="space-x-4">
          <Link to="/signup">
            <Button className="px-2 py-1" variant="primary">
              Sign up
            </Button>
          </Link>
          <Link to="/login">
            <Button className="px-2 py-1">Login</Button>
          </Link>
        </div>
      </Container>
    </nav>
  );
}
