import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element, isLoggedIn }) {
  return isLoggedIn ? element : <Navigate to="/signin" replace />;
}

export default ProtectedRoute;
