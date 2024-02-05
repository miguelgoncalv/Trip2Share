import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // User successfully logged in, redirect to HomePage...not implemented yet
    } catch (error) {
      setError(error.message); // Displaying error message
    }
  };

  return (
    <div className="login-form">
      <p> Log in to your account to share your latest adventures, and plan your next journey. Your next unforgettable experience is just a few clicks away.
      </p>
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>Don’t have an account yet? Sign up and start sharing your travel stories with the world.</p>
    </div>
  );
}

export default Login;
