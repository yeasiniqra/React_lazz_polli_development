import { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import authContextV2 from '../store/auth-context-v2';

const useAuthGuard = (fallbackPath = '/') => {
  const history = useHistory();
  const { isAuthenticating, isAuthenticated } = useContext(authContextV2);

  useEffect(() => {
    if (!isAuthenticating) {
      history.replace(fallbackPath);
    }
  }, [isAuthenticating, isAuthenticated, history, fallbackPath]);
};

export default useAuthGuard;
