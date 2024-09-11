import { useEffect } from "react";
import NavBar from "../components/reusable/nav-bar";
import Container from "../components/reusable/container";
import { useTitle } from "../hooks/use-title";

export default function Contact() {
  useEffect(() => {
    useTitle("ChatX | Contact");
  }, []);

  return (
    <main>
      <NavBar />
      <Container className="mt-24">
        <p>Hello contact!</p>
      </Container>
    </main>
  );
}
