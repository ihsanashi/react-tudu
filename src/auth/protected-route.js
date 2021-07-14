import { Route, Redirect } from 'react-router-dom';
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';
import Loading from '../components/Loading';

const ProtectedRoute = ({ component, ...args }) => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <Route
      component={withAuthenticationRequired(component, {
        onRedirecting: () => <Loading />,
      })}
      {...args}
    />
  ) : (
    <Redirect to='/landing' />
  );
};

export default ProtectedRoute;
