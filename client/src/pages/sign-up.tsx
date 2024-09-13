import { Link } from "react-router-dom";
import Button from "../components/reusable/button";
import Input from "../components/reusable/input";
import { useEffect } from "react";
import { useTitle } from "../hooks/use-title";

export default function SignUp() {
  useEffect(() => {
    useTitle("ChatX | Sign Up");
  }, []);

  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[325px]">
      <div className="flex flex-col items-center justify-center gap-5">
        <img src="/logo.png" alt="logo" />
        <h3 className="text-3xl font-medium">Sign up</h3>
      </div>
      <div className="flex flex-col gap-4 mt-12">
        <Input type="email" placeholder="Email" className="px-4 py-2.5" />
        <Input type="password" placeholder="Password" className="px-4 py-2.5" />
        <Input type="text" placeholder="Name" className="px-4 py-2.5" />
        <Button className="py-2.5" variant="primary">
          Sign up
        </Button>
      </div>
      <div className="flex flex-col gap-4 mt-4 text-center">
        <p className="text-sm font-semibold text-[var(--border)]">
          By creating an account you agree to our{" "}
          <Link to="/terms" className="text-[var(--primary)]">
            Terms of Service
          </Link>
          .
        </p>
        <p className="text-sm font-semibold">
          Already have an account?{" "}
          <Link to="/login" className="text-[var(--primary)]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
