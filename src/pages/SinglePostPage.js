import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/SinglePostPage.css';

const SinglePostPage = () => {
  const navigate = useNavigate();

  const post = {
    id: 1,
    title: 'Titre du Post',
    content: 'Ceci est le contenu du post.',
    image: 'chemin/vers/image-post.jpg',
    likes: 20,
    dislikes: 5
  };

  const handleGoToPosts = () => {
    navigate('/posts');
  };

  const handleEditPost = () => {
    // Logique de modification
  };

  const handleDeletePost = () => {
    // Logique de suppression
    console.log('Suppression du post', post.id);
    // Ici, ajoutez la logique pour supprimer le post de votre backend ou état de l'application
    // Après la suppression, redirigez l'utilisateur, par exemple :
    navigate('/posts');
  };

  return (
    <div className="single-post-container">
      <h1>{post.title}</h1>
      {post.image && <img src={post.image} alt="Post" className="post-image" />}
      <p className="post-content">{post.content}</p>
      <div className="post-reactions">
        <span><FontAwesomeIcon icon={faThumbsUp} /> {post.likes}</span>
        <span><FontAwesomeIcon icon={faThumbsDown} /> {post.dislikes}</span>
      </div>
      <div className="post-actions">
        <button onClick={handleEditPost}>Modifier</button>
        <button onClick={handleDeletePost}>Supprimer</button>
        <button onClick={handleGoToPosts}>Voir les Posts</button>
      </div>
    </div>
  );
};

export default SinglePostPage;
