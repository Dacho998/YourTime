import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { singupUser } from "../../services/auth";
import SingUpForm from "./SingUpFrom";
import "./css/SingUp.css";
import "./css/SingUpResponsive.css"

export default function SingUp() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSingUp = async (name: string, email: string, password: string, confirmPassword: string) => {
    setError(null);
    setSuccess(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const data = await singupUser(name, email, password);
      setSuccess(data.message);
      setTimeout(() => navigate("/log_in"), 1500);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return <SingUpForm onSubmit={handleSingUp} error={error} success={success} />;
}
