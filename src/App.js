import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';
import PostsPage from './pages/PostsPage';
import SinglePostPage from './pages/SinglePostPage';
import ProfilePage from './pages/ProfilePage'; // Assurez-vous d'avoir ce composant
import CreatePostPage from './pages/CreatePostPage'; // Importez le composant de création de post
import ErrorPage from './pages/ErrorPage'; // Importez le composant ErrorPage


const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/post/:id" element={<SinglePostPage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
          <Route path="/create-post" element={<CreatePostPage />} /> {/* Nouvelle route pour la création de post */}
          <Route path="*" element={<ErrorPage />} /> {/* Route pour capturer toutes les routes non définies */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
