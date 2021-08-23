import { Helmet } from 'react-helmet';
import { Header, BackHeader, Wrapper } from '../components';

function ItemDetails() {
  return (
    <>
      <Helmet>
        <meta name='description' content='Further details on a to-do item' />
        <title>Item title here</title>
      </Helmet>
      <Header />
      <BackHeader link='/' />
      <Wrapper className='p-4'>
        <div className='container'>
          <div className='max-w-xl mx-auto'></div>
        </div>
      </Wrapper>
    </>
  );
}

export default ItemDetails;
