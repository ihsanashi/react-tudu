import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import routes from './config/routes';

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
            {routes.map((route) => (
              <Route
                exact
                strict
                key={route.path}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </Router>
      </TodoProvider>
    </>
  );
}

export default App;
