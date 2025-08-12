import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/auth'; 
import { useAuth } from '../../context/AuthContext';  
import './LogIn.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const { login } = useAuth(); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const data = await loginUser(email, password);
      login(data.user);              
      navigate('/');       
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <section className="login-section">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">Sign In</button>

        {error && <p className="error-text">{error}</p>}

        <p className="login-footer-text">
          Don't have an account? <Link to="/singup">Sign up</Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
