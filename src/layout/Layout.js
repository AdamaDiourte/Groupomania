import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import '../styles/Layout.css';
import logo from '../Images/logo.png';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="Logo de l'entreprise" className="navbar-logo" />
        </Link>
        <div className="navbar-links">
          <Link to="/create-post">Créer un Post</Link>
          <Link to="/profile/:userId">
            <FontAwesomeIcon icon={faUserCircle} size="2x" className="navbar-profile-icon" />
          </Link>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="footer">
        <p>© 2023 Groupmania. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Layout;
