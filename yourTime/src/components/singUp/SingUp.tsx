import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { singupUser } from "../../services/auth";
import "./SingUp.css";

const SingUp: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const data = await singupUser(name, email, password);
      setSuccess(data.message);
      setTimeout(() => {
        navigate("/log_in");
      }, 1500);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <section className="singup-section">
      <form className="singup-form" onSubmit={handleSubmit}>
        <h2>Sing Up</h2>

        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your full name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="username"             
          placeholder="Enter your email"
          required
          autoComplete="username"      
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Create a password"
          required
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          placeholder="Confirm your password"
          required
          autoComplete="new-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Register</button>

        {error && <p className="error-text">{error}</p>}
        {success && <p className="success-text">{success}</p>}

        <p className="singup-footer-text">
          Already have an account? <Link to="/log_in">Log in here</Link>
        </p>
      </form>
    </section>
  );
};

export default SingUp;
