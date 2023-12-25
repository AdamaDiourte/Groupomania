// SignIn.js

import React, { useState } from 'react';
import '../styles/SignIn.css'; // Assurez-vous que le chemin vers votre fichier CSS est correct

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez gérer l'authentification de l'utilisateur
    console.log(credentials);
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={credentials.password}
          onChange={handleChange}
        />
        <button type="submit">Se Connecter</button>
      </form>
    </div>
  );
};

export default SignIn;
