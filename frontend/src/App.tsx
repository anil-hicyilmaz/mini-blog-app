import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PrivateRoute from './components/PrivateRoute';
import CreatePostPage from './pages/CreatePostPage';
import UserPostsPage from './pages/UserPostsPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/new-post" element={<PrivateRoute><CreatePostPage /></PrivateRoute>} />
        <Route path="/my-posts" element={<PrivateRoute><UserPostsPage /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}
