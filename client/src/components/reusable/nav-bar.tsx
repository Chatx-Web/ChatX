import Container from "./container";
import Logo from "./logo";
import Button from "./button";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { createStyle } from "../../utils/create-style";
import { navLinks } from "../../data";

export type NavLinkType = {
  id: string;
  to: string;
  content: string;
};

interface NavLinkProps extends Omit<NavLinkType, "id"> {}

function LargeNavLink({ to, content }: NavLinkProps) {
  return (
    <Link
      to={to}
      className="p-0.5 rounded font-medium transition-colors duration-300"
    >
      {content}
    </Link>
  );
}

function LargeScreenNav() {
  const location = useLocation();

  return (
    <Container className="items-center justify-between hidden md:flex">
      <Logo />
      <div className="space-x-4">
        {navLinks.map((navLink) => (
          <LargeNavLink key={navLink.id} {...navLink} />
        ))}
      </div>
      {location.pathname !== "/signup" && location.pathname !== "/login" ? (
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
      ) : null}
    </Container>
  );
}

function SmallNavLink({ to, content }: NavLinkProps) {
  return (
    <Link to={to}>
      <div className="px-2 py-1 rounded-md border border-[var(--border)] hover:border-[var(--primary)] duration-300">
        <p>{content}</p>
      </div>
    </Link>
  );
}

function SmallScreenNav() {
  const location = useLocation();
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    if (menuActive) {
      createStyle(document.body, {
        overflow: "hidden",
      });
    } else {
      createStyle(document.body, {
        overflow: "auto",
      });
    }
  }, [menuActive]);

  return (
    <Container className="flex items-center justify-between md:hidden">
      <Logo />
      <Button className="px-2 py-1" onClick={() => setMenuActive(true)}>
        Menu
      </Button>
      {menuActive && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-[var(--bg-color)]"
          onClick={() => setMenuActive(false)}
        >
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-[var(--bg-color)] w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <p>Hello nav!</p>
              <Button
                className="px-2 py-1"
                onClick={() => setMenuActive(false)}
              >
                Close
              </Button>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              {navLinks.map((navLink) => (
                <SmallNavLink key={navLink.id} {...navLink} />
              ))}
              {location.pathname !== "/signup" &&
              location.pathname !== "/login" ? (
                <div className="grid grid-cols-2 gap-4">
                  <Link to="/signup">
                    <Button className="w-full py-2" variant="primary">
                      Sign up
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button className="w-full py-2">Login</Button>
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 z-10 flex flex-col justify-center w-full h-20 bg-opacity-25 shadow-sm shadow-white/10 backdrop-blur-lg backdrop-filter">
      <LargeScreenNav />
      <SmallScreenNav />
    </nav>
  );
}
