import { useEffect } from "react";
import HomeDescription from "./components/home/description";
import HomeHeading from "./components/home/heading";
import NavBar from "./components/home/nav-bar";
import Container from "./components/reusable/container";
import { useTitle } from "./hooks/use-title";

function App() {
  useEffect(() => {
    useTitle("ChatX | Home");
  }, []);

  return (
    <main>
      <NavBar />
      <Container className="mt-24">
        <div className="flex items-center justify-between">
          <HomeHeading />
          <HomeDescription />
        </div>
      </Container>
    </main>
  );
}

export default App;
