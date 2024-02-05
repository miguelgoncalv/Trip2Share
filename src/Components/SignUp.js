import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import './SignUp.css';

function SignUp() {
  // State declarations
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [pronouns, setPronoums] = useState('');
  const [nationality, setNationality] = useState('');
  const [languages, setLanguages] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      setIsSignedUp(true);
    } catch (error) {
      setError(error.message);
    }
  }

  if (isSignedUp) {
    return (
      <div className="signup-success">
        <h1>Sign Up Successful</h1>
        <p>Welcome to Trip 2Share, {name}! Your account has been successfully created.</p>
        {/* Redirect to login page */}
      </div>
    );
  }

  return (
    <div className="signup-form">
      <h1>Sign Up</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
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
        <input 
          type="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          placeholder="Gender"
          required
        />
      <input 
      type="text"
       value={pronouns}
        onChange={(e) => setPronoums(e.target.value)} 
        placeholder="Pronouns"
        required
      />

        <input 
          type="nationality"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
          placeholder="Nationality"
          required
        />
        <input 
          type="languages"
          value={languages}
          onChange={(e) => setLanguages(e.target.value)}
          placeholder="Languages Spoken"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
