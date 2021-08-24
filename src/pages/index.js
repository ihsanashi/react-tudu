import { Helmet } from 'react-helmet';
import { Header, TodoList, Wrapper, NewTodo, ResetAll } from '../components';

function Home() {
  return (
    <>
      <Helmet>
        <meta
          name='description'
          content='Minimal To-do List application for you to manage your tasks.'
        />
        <title>Tudu - Minimal To-do List</title>
      </Helmet>
      <Header />
      <Wrapper className='p-4 my-5'>
        <div className='container'>
          <NewTodo />
          <TodoList />
          <ResetAll />
        </div>
      </Wrapper>
    </>
  );
}

export default Home;
