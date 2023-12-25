import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ErrorPage.css'; // Assurez-vous que le chemin vers votre fichier CSS est correct

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>404 - Page Non Trouvée</h1>
      <p>Désolé, la page que vous cherchez n'existe pas ou a été déplacée.</p>
      <Link to="/posts">Retourner à l'accueil</Link>
    </div>
  );
};

export default ErrorPage;
