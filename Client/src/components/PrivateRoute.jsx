import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../feature/auth/authSlice';

export default function PrivateRoute({ children }) {
  const user = useSelector(selectCurrentUser);
  return user ? children : <Navigate to="/login" />;
}