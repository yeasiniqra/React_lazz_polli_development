import { useEffect, useContext } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
import authContext from '../store/auth-context';

const useAuthGuard = (fallbackPath = '/') => {
  // const navigate = useNavigate();
  // const location = useLocation();

  const { isAuthenticating, isAuthenticated, open } = useContext(authContext);

  useEffect(() => {
    if (!isAuthenticating && !isAuthenticated) {
      // let from = location.state?.from?.pathname || "/";
      // navigate(from, { replace: true });
      open('LOGIN', fallbackPath)
     
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticating, isAuthenticated,fallbackPath]);
};

export default useAuthGuard;
