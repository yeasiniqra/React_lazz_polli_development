import { useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import authContext from '../store/auth-context';

const useAuthGuard = (fallbackPath = '/') => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticating, isAuthenticated } = useContext(authContext);

  useEffect(() => {
    if (!isAuthenticating && !isAuthenticated) {
      let from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    }
  }, [isAuthenticating, isAuthenticated, navigate, fallbackPath, location]);
};

export default useAuthGuard;
