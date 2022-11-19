import Layout from '../../components/UI/Layout';
import Hero from './Hero/Hero';
import Meet from './meet/Meet';
import Future from './future/Future';
import './index.modules.scss';

const Careers = () => {
  return (
    <Layout>
      <Hero />
      <Meet />
      <Future />
    </Layout>
  );
};

export default Careers;
