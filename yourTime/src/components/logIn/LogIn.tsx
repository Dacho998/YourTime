import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { loginUser } from '../../services/auth';
import LoginForm from './LogInForm';
import './css/LogIn.css';
import "./css/LogInResponsive.css"

export default function Login() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (email: string, password: string) => {
    loginUser(email, password)
      .then(data => {
        login(data.user);
        navigate('/');
      })
      .catch(err => setError(err.message || 'Login failed. Please try again.'));
  };

  return (
    <section className="login-section">
      <LoginForm onSubmit={handleLogin} error={error} />
    </section>
  );
}
