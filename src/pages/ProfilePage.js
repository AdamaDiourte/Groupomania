import React, { useState } from 'react';
import '../styles/ProfilePage.css'; // Assurez-vous que le chemin vers votre fichier CSS est correct

const ProfilePage = () => {
  const [userProfile, setUserProfile] = useState({
    nom: 'John Doe',
    role: 'Développeur',
    bio: 'Passionné par le développement web et les nouvelles technologies.',
    photo: 'chemin/vers/default-avatar.jpg' // Chemin vers l'image par défaut ou l'image actuelle de l'utilisateur
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserProfile({ ...userProfile, [name]: value });
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title">Profil de l'utilisateur</h1>
      <div className="profile-content">
        <div className="profile-image-container">
          <img src={userProfile.photo} alt="Profil" />
        </div>
        <div className="profile-info">
          <form className="profile-form">
            <label>
              Nom
              <input 
                type="text" 
                name="nom" 
                value={userProfile.nom} 
                onChange={handleInputChange} 
              />
            </label>
            <label>
              Rôle
              <input 
                type="text" 
                name="role" 
                value={userProfile.role} 
                onChange={handleInputChange} 
              />
            </label>
            <label>
              Bio
              <textarea 
                name="bio" 
                value={userProfile.bio} 
                onChange={handleInputChange} 
              />
            </label>
          
            <button type="submit">Enregistrer les modifications</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
