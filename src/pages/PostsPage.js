import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/PostsPage.css';

const PostsPage = () => {
  // Données factices pour les posts et les commentaires
  const posts = [
    {
      id: 1,
      userId: 'user1', // ID factice de l'utilisateur
      userImage: null, // Ici, vous insérez le chemin de l'image de profil de l'utilisateur
      title: 'Premier Post',
      content: 'Ceci est le contenu du premier post.',
      image: 'chemin/vers/image1.jpg',
      likes: 10,
      dislikes: 2,
      comments: [
        {
          id: 1,
          content: 'Super post !',
          imageUrl: 'chemin/vers/imageCommentaire1.jpg',
        },
        {
          id: 2,
          content: 'Très intéressant.',
          imageUrl: null,
        }
      ]
    },
    {
      id: 2,
      userId: 'user2',
      userImage: null,
      title: 'Deuxième Post',
      content: 'Voici un peu plus de contenu.',
      image: null,
      likes: 5,
      dislikes: 1,
      comments: [
        {
          id: 3,
          content: 'J\'aime beaucoup.',
          imageUrl: null,
        }
      ]
    }
  ];

  const defaultAvatar = 'chemin/vers/default-avatar.jpg'; // Chemin vers l'avatar par défaut

  return (
    <div className="posts-container">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <div className="post-header">
            <Link to={`/profile/${post.userId}`}>
              <img 
                src={post.userImage || defaultAvatar} 
                alt="Profil"
                className="profile-image" 
              />
            </Link>
            <Link to={`/post/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
          </div>
          {post.image && <img src={post.image} alt="Post" className="post-image" />}
          <p>{post.content}</p>
          <div className="post-reactions">
            <span><FontAwesomeIcon icon={faThumbsUp} /> {post.likes}</span>
            <span><FontAwesomeIcon icon={faThumbsDown} /> {post.dislikes}</span>
          </div>
          <div className="comments">
            <h3>Commentaires</h3>
            {post.comments.map((comment) => (
              <div key={comment.id} className="comment">
                {comment.imageUrl && <img src={comment.imageUrl} alt="Comment" className="comment-image" />}
                <p>{comment.content}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
