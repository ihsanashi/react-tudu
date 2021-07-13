import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/index';
import AddNew from './pages/new';
import Landing from './pages/Landing';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import ResetPassword from './pages/auth/reset';
import ResetPasswordStatus from './pages/auth/resetStatus';
import Help from './pages/Help';
import ViewTodo from './pages/View';
import NoMatch from './pages/NoMatch';

import { TodoProvider } from './contexts/TodoContext';

function App() {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
      </Helmet>

      <TodoProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/new' component={AddNew} />
            <Route exact path='/landing' component={Landing} />
            <Route exact path='/auth/login' component={Login} />
            <Route exact path='/auth/register' component={Register} />
            <Route
              exact
              path='/auth/reset-password'
              component={ResetPassword}
            />
            <Route
              exact
              path='/auth/reset-password-status'
              component={ResetPasswordStatus}
            />
            <Route exact path='/help' component={Help} />
            <Route exact strict path='/todo/:id' component={ViewTodo} />
            <Route path='*' component={NoMatch} />
          </Switch>
        </Router>
      </TodoProvider>
    </>
  );
}

export default App;
