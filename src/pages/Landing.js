import { Helmet } from 'react-helmet';
import Wrapper from '../components/Wrapper';

function Landing() {
  return (
    <>
      <Helmet>
        <title>Tudu - Landing page</title>
        <meta
          name='description'
          content='Welcome to Tudu! Here you can add and organise your to-do items. Get started today.'
        />
      </Helmet>
      <Wrapper className='p-4 my-5'>
        <div className='container'>
          <h3>Tudu Landing page</h3>
        </div>
      </Wrapper>
    </>
  );
}

export default Landing;
