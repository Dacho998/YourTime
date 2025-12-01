import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../../services/auth";
import SignUpForm from "./SignUpFrom";
import "./css/SignUp.css";
import "./css/SignUpResponsive.css"

export default function SignUp() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSignUp = async (name: string, email: string, password: string, confirmPassword: string) => {
    setError(null);
    setSuccess(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const data = await signupUser(name, email, password);
      setSuccess(data.message);
      setTimeout(() => navigate("/log_in"), 1500);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return <SignUpForm onSubmit={handleSignUp} error={error} success={success} />;
}
