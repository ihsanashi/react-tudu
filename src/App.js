import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import AddNew from './pages/new';
import NoMatch from './pages/NoMatch';
import ViewTodo from './pages/View';
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
            <Route exact path='/new' component={AddNew} />
            <Route exact path='/' component={Home} />
            <Route exact strict path='/todo/:title' component={ViewTodo} />
            <Route path='*' component={NoMatch} />
          </Switch>
        </Router>
      </TodoProvider>
    </>
  );
}

export default App;
