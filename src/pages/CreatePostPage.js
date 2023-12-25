import React, { useState } from 'react';
import '../styles/CreatePostPage.css'; // Assurez-vous que le chemin vers votre fichier CSS est correct

const CreatePostPage = () => {
  const [post, setPost] = useState({
    title: '',
    content: '',
    image: null
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  };

  const handleImageChange = (event) => {
    // Ici, vous pouvez gérer le téléchargement d'images
    // Par exemple, en utilisant FileReader ou en envoyant l'image à un serveur
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ici, vous pouvez ajouter la logique pour créer le post
    console.log(post);
  };

  return (
    <div className="create-post-container">
      <h1>Créer un Nouveau Post</h1>
      <form className="create-post-form" onSubmit={handleSubmit}>
        <label>
          Titre :
          <input 
            type="text" 
            name="title" 
            value={post.title} 
            onChange={handleInputChange} 
          />
        </label>
        <label>
          Contenu :
          <textarea 
            name="content" 
            value={post.content} 
            onChange={handleInputChange} 
          />
        </label>
        <label>
          Image :
          <input 
            type="file" 
            name="image" 
            onChange={handleImageChange} 
          />
        </label>
        <button type="submit">Publier</button>
      </form>
    </div>
  );
};

export default CreatePostPage;
