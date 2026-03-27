import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function PrivateRoute({ children }) {
  const { user } = useAuth();

  // if not logged in, redirect to login page
  if (!user) {
    return <Navigate to="/login" />;
  }

  // if logged in, show the page
  return children;
}

export default PrivateRoute;