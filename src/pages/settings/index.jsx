import Layout from '../../components/UI/Layout';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const Setting = () => {
  return (
    <Layout>
      <main className='w-[75vw] m-auto'>
        <header className="text-3xl capitalize mt-8">Settings</header>
        <div className="grid md:flex md:justify-between ml-8">
          <LeftSection />
          <RightSection />
        </div>
      </main>
    </Layout>
  )

};

export default Setting;
