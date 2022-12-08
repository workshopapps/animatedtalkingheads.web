import Layout from '../../components/UI/Layout';
import FaqTitle from './faq_title/FaqTitle';
import FaqContent from './faq_content/FaqContent';
import Chat from './chat/Chat';

const Faqs = () => {
  return (
    <Layout>
      <FaqTitle />
      <FaqContent />
      <Chat />
    </Layout>
  );
};

export default Faqs;
