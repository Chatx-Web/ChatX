import { useEffect } from "react";
import NavBar from "../components/reusable/nav-bar";
import Container from "../components/reusable/container";
import { useTitle } from "../hooks/use-title";

export default function Services() {
  useEffect(() => {
    useTitle("ChatX | Services");
  }, []);

  return (
    <main>
      <NavBar />
      <Container className="mt-24">
        <p>Hello services!</p>
      </Container>
    </main>
  );
}
