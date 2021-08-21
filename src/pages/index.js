import { Helmet } from 'react-helmet';
import { Header, List, Wrapper } from '../components';
import AddNew from '../components/AddNew';

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
          <AddNew />
          <List />
        </div>
      </Wrapper>
    </>
  );
}

export default Home;
