import Layout from '../../components/UI/Layout';
import Hero from './Hero/Hero';
import Meet from './meet/Meet';
import Future from './future/Future';
import Why from './why/Why';
import Roles from './roles/Roles';
// import './index.modules.scss';

const Careers = () => {
  return (
    <Layout>
      <Hero />
      <Meet />
      <Future />
      <Why />
      <Roles />
    </Layout>
  );
};

export default Careers;
