import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/hooks';
import { NAVIGATE_TO } from '../constants';

const withAuth =
  <P extends object>(WrappedComponent: React.ComponentType) =>
  (props: P) => {
    const navigate = useNavigate();
    const location = useLocation();
    const {
      state: { token },
    } = useAuth();

    useEffect(() => {
      if (token !== '') {
        navigate(NAVIGATE_TO.TODO, { replace: true });
      } else {
        if (location.pathname === '/signup') {
          navigate(NAVIGATE_TO.SIGNUP, { replace: true });
        } else {
          navigate(NAVIGATE_TO.SIGNIN, { replace: true });
        }
      }
    }, [token]);

    return <WrappedComponent {...props} />;
  };

export default withAuth;
