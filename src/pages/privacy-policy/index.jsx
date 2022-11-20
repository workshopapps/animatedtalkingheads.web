// import { Outlet } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Layout from '../../components/UI/Layout';
import { Text } from '../../components/UI/Text';
import LinkComponent from './link';
import MainCard from './main-card';
import Top from './top';

const PrivacyPolicy = () => {
  return (
    <>
      <Outlet />
      <Layout>
        <div>
          <Top />
          <div className="px-3 lg:px-20">
            <MainCard>
              <ul className="bg-white rounded-md p-[16px] lg:px-[66px] lg:py-[32px] flex flex-wrap justify-left lg:justify-center mb-[24px] ">
                <LinkComponent text={'1. About privacy policy'} href={'about'} />
                <LinkComponent text={'2. How we use your information'} href={'how-we-use-information'} />
                <LinkComponent text={'3. How to contact us'} href={'/contact'} />
                <LinkComponent text={'4. Cookies'} href={'cookies'} />
                <LinkComponent text={'5. Information we collect about you'} href={'information'} />
                <LinkComponent text={'6. Changes to policy'} href={'changes-to-policy'} />
              </ul>
              <div className="p-[16px] lg:pt-[24px] lg:px-[32px] bg-white rounded-md rounded-br-none rounded-bl-none">
                <Text className={'!text-base lg:!text-2xl !font-normal'}>
                  Privacy Policy for Podstar (Suggested Web Name)
                </Text>
                <Text className={'!text-base lg:!text-2xl !font-normal mb-[15px] '}>
                  Thank you for visiting the Podcast.com website. You arrived at this Privacy Policy
                  page from one of the above sites, referred to herein as “this website”. This
                  Privacy Policy is subject to changes by Team Clutch (hereinafter “Team/Company”)
                  at any time and at our discretion without notice by updating this posting. We
                  understand how important internet users place on their privacy, and this Privacy
                  Policy describes how we use any private information collected from you across our
                  website. Please read this Privacy Policy before using this website or submitting
                  any personal information.
                </Text>
                <Text className={'!text-base lg:!text-2xl !font-normal'}>
                  Information We Collect
                </Text>
                <Text className={'!text-base lg:!text-2xl !font-normal  pb-[20px]'}>
                  We only ask for personal information, like names, addresses, phone numbers, email
                  addresses, when we truly need it to provide
                  a service to you. We collect it by fair and lawful means, with your knowledge and
                  consent. We will only use your personal information for the following purposes: To
                  deliver the products and/or services to you that you have requested; Validate your
                  compliance with the terms and conditions; For content improvement and feedback
                  purposes; To reach you, when necessary, regarding your use of the website or
                  product(s). We only retain collected information for as long as necessary to
                  provide you with your requested service. What data we store, we’ll protect within
                  commercially acceptable means to prevent loss and theft, as well as unauthorized
                  access, disclosure, copying, use or modification. We don’t share any personally
                  identifying information publicly or with third-parties, except when required to by
                  your received permission.You are free to refuse our request for your personal
                  information, with the understanding that we may be unable to provide you with some
                  of your desired services.If you have any questions about how we handle user data
                  and personal information, feel free to contact us.
                </Text>
              </div>
            </MainCard>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PrivacyPolicy;
