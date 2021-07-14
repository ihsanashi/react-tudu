import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/index';
import AddNew from './pages/new';
import Landing from './pages/Landing';
import Help from './pages/Help';
import ViewTodo from './pages/View';
import NoMatch from './pages/NoMatch';
import ProtectedRoute from './auth/protected-route';
import { useAuth0 } from '@auth0/auth0-react';

import { TodoProvider } from './contexts/TodoContext';
import Loading from './components/Loading';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <Loading />;

  return (
    <>
      <TodoProvider>
        <Router>
          <Switch>
            <ProtectedRoute exact path='/' component={Home} />
            <ProtectedRoute exact path='/new' component={AddNew} />
            <ProtectedRoute
              exact
              strict
              path='/todo/:id'
              component={ViewTodo}
            />
            <ProtectedRoute exact path='/help' component={Help} />
            <Route exact path='/landing' component={Landing} />
            <Route path='*' component={NoMatch} />
          </Switch>
        </Router>
      </TodoProvider>
    </>
  );
}

export default App;
