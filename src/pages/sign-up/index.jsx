import Layout from '../../components/UI/Layout';
import SignUpSection from './SignUp';
import '../sign-up/styles/index.css'


const SignUp = () => {
    return <Layout>
      <section className="sign-up-section">
       <SignUpSection />
      </section>
    </Layout>
}

export default SignUp;
