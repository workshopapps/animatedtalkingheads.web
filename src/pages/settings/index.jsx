import Layout from '../../components/UI/Layout';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';

const Setting = () => {
  return (
    <Layout>
      <main className='w-[85vw] m-auto'>
        <header className="text-3xl capitalize mt-8">SETTINGS</header>
        <div className="grid md:justify-around md:grid-cols-[0.5fr_1fr] lg:grid-cols-2">
          <LeftSection />
          <RightSection />
        </div>
      </main>
    </Layout>
  )
};

export default Setting;
