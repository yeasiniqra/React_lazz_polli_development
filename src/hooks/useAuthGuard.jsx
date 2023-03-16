import { useEffect, useContext } from 'react';
import authContext from '../store/auth-context';

const useAuthGuard = (fallbackPath = '/') => {
  const { isAuthenticating, isAuthenticated, open } = useContext(authContext);
  useEffect(() => {
    if (!isAuthenticating && !isAuthenticated) {
      open('LOGIN', fallbackPath)
     
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticating, isAuthenticated,fallbackPath]);
};

export default useAuthGuard;
