import { useEffect } from "react";
import NavBar from "../components/home/nav-bar";
import Container from "../components/reusable/container";
import { useTitle } from "../hooks/use-title";
import HomeHeader from "../components/home/header";

export default function Home() {
  useEffect(() => {
    useTitle("ChatX | Home");
  }, []);

  return (
    <main>
      <NavBar />
      <Container className="mt-24">
        <HomeHeader />
      </Container>
    </main>
  );
}
