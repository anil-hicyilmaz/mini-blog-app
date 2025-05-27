import { useNavigate } from 'react-router-dom';

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    alert('Logged out!');
    navigate('/login');
  };

  return <button onClick={handleLogout}>Logout</button>;
}
