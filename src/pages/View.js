import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import Wrapper from '../components/Wrapper';
import BackHeader from '../components/BackHeader';
import { TodoContext } from '../contexts/TodoContext';
import { Route } from 'react-router-dom';
import NoMatch from './NoMatch';

function ViewTodo(props) {
  const { todos } = useContext(TodoContext);

  // Determine if the current URL matches with a todo title from the todos array
  const itemTitle = props.match.params.title.replace(/-/g, ' ').toLowerCase();
  const pageExists = todos.some(
    (item) => item.title.toLowerCase() === itemTitle
  );

  const itemTitleCapitalized = itemTitle.replace(
    /(^\w{1})|(\s{1}\w{1})/g,
    (match) => match.toUpperCase()
  );

  if (pageExists) {
    return (
      <>
        <Helmet>
          <meta name='description' content='View to-do item' />
          <title>Tudu - {itemTitleCapitalized}</title>
        </Helmet>
        <BackHeader link='/' />
        <Wrapper className='p-4'>
          <div className='container'>
            <div className='max-w-xl mx-auto'>
              <h5>Title: {itemTitleCapitalized}</h5>
            </div>
          </div>
        </Wrapper>
      </>
    );
  } else {
    return <Route component={NoMatch} />;
  }
}

export default ViewTodo;
