// HomePage.js

// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/HomePage.css';

// const HomePage = () => {
//   return (
//     <div className="home-container">
//       <h1>Bienvenue sur Groupomania</h1>
//       <div className="home-buttons">
//         <Link to="/signin">
//           <button>Connexion</button>
//         </Link>
//         <Link to="/signup">
//           <button>Inscription</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  const postId = 1; // ID factice du post à afficher

  return (
    <div className="home-container">
      <h1>Bienvenue sur Groupomania</h1>
      <div className="home-buttons">
        <Link to="/signin">
          <button>Connexion</button>
        </Link>
        <Link to="/signup">
          <button>Inscription</button>
        </Link>
        <Link to="/posts">
          <button>Voir les Posts</button>
        </Link>
        <Link to={`/post/${postId}`}>
          <button>Voir le Post Spécifique</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;


