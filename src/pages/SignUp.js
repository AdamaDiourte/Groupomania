// // SignUp.js
// import React, { useState } from 'react';
// import '../styles/SignUp.css';

// const SignUp = () => {
  
//   const [user, setUser] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     role: '' // Par exemple, si vous voulez que l'utilisateur indique son rôle dans l'entreprise.
//   });

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Ici, vous pouvez gérer l'envoi des données d'inscription (ex: appel à une API)
//     console.log(user);
//   };

//   return (
    
//     <div className="signup-container">
//       <h1 className="signup-title">Inscription</h1>
//       <form className="signup-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="firstName"
//           placeholder="Prénom"
//           value={user.firstName}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="lastName"
//           placeholder="Nom de famille"
//           value={user.lastName}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="role"
//           placeholder="Rôle dans l'entreprise"
//           value={user.role}
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={user.email}
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Mot de passe"
//           value={user.password}
//           onChange={handleChange}
//         />
//         <button type="submit">S'inscrire</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;

// SignUp.js

import React, { useState } from 'react';
import '../styles/SignUp.css'; // Assurez-vous que le chemin vers votre fichier CSS est correct

const SignUp = () => {
  const [user, setUser] = useState({
    nom: '',
    prenom: '',
    statut: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error('Échec de l\'inscription');
      }

      const data = await response.json();
      console.log(data);
      // Gérer la suite après l'inscription réussie
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
      // Gérer l'erreur d'inscription ici
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nom"
          placeholder="Nom"
          value={user.nom}
          onChange={handleChange}
        />
        <input
          type="text"
          name="prenom"
          placeholder="Prénom"
          value={user.prenom}
          onChange={handleChange}
        />
        <input
          type="text"
          name="statut"
          placeholder="Statut"
          value={user.statut}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={user.password}
          onChange={handleChange}
        />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default SignUp;
