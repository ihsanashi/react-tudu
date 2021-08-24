import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/index';
import Landing from './pages/Landing';
import NoMatch from './pages/NoMatch';
import ProtectedRoute from './auth/protected-route';
import { useAuth0 } from '@auth0/auth0-react';

import Loading from './components/Loading';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <Loading />;

  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path='/' component={Home} />
        <Route exact path='/landing' component={Landing} />
        <Route path='*' component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
