import { useState } from "react";
import { Link } from "react-router-dom";

interface SignUpFormProps {
  onSubmit: (name: string, email: string, password: string, confirmPassword: string) => void;
  error: string | null;
  success: string | null;
}

export default function SignUpForm({ onSubmit, error, success }: SignUpFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name, email, password, confirmPassword);
  };

  return (
    <section className="signup-section">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" placeholder="Enter your full name" required value={name} onChange={e => setName(e.target.value)} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required value={email} onChange={e => setEmail(e.target.value)} />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Create a password" required value={password} onChange={e => setPassword(e.target.value)} />

        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" placeholder="Confirm your password" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />

        <button type="submit">Register</button>

        {error && <p className="error-text">{error}</p>}
        {success && <p className="success-text">{success}</p>}

        <p className="signup-footer-text">
          Already have an account? <Link to="/log_in">Log in here</Link>
        </p>
      </form>
    </section>
  );
}
