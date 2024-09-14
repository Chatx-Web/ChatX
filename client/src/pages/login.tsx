import { Link } from "react-router-dom";
import Button from "../components/reusable/button";
import Input from "../components/reusable/input";
import { useEffect } from "react";
import { useTitle } from "../hooks/use-title";
import NavBar from "../components/reusable/nav-bar";

export default function Login() {
  useEffect(() => {
    useTitle("ChatX | Login");
  }, []);

  return (
    <>
      <NavBar />
      <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[325px]">
        <div className="flex flex-col items-center justify-center gap-5">
          <img src="/logo.png" alt="logo" />
          <h3 className="text-3xl font-medium">Login</h3>
        </div>
        <div className="flex flex-col gap-4 mt-12">
          <Input type="email" placeholder="Email" className="px-4 py-2.5" />
          <Input
            type="password"
            placeholder="Password"
            className="px-4 py-2.5"
          />
          <Button className="py-2.5" variant="primary">
            Login
          </Button>
        </div>
        <div className="flex flex-col gap-4 mt-4 text-center">
          <p className="text-sm font-semibold">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[var(--primary)]">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
