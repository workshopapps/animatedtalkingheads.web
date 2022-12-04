import Layout from '../../../components/UI/Layout';
import styles from '../Policy/styles.module.css';
import { Link } from 'react-router-dom';
import Box from '../../term-of-use/Box';
import { Text } from '../../../components/UI/Text';
//import { Text } from '../../components/UI/Text';
// import { routes } from '../../libs/links';
// import { scroller, Element } from 'react-scroll';

const Policy = () => {
  // const scrollToElement = (element) => {
  //     scroller.scrollTo(element, {
  //         duration: 1500,
  //         delay: 100,
  //         smooth: true,
  //         offset: -150
  //     });
  // };

  return (
    <Layout>
      <section className="bg-sec w-full grid justify-center items-center h-[135px] md:h-[216px] mb-20">
        <h1 className="font-bold text-2xl md:text-5xl text-[#f4f4f4] ">Terms of Use</h1>
      </section>

      <section>
        <div className={styles.nav}>
          <div className={styles.term_te}>
            <Link to="/terms-of-use/term">Terms and Conditions</Link>
          </div>

          <div className={styles.term}>
            <li>
              <Link to="/terms-of-use/policy" activeClassName="active">
                Privacy Policy
              </Link>
            </li>
          </div>
        </div>

        <div className="p-[16px] lg:pt-[24px] lg:px-[96px] bg-white rounded-md rounded-br-none rounded-bl-none">
          <Text className={'!text-base  lg:!text-xl !font-normal mb-7'}>
            Updated on November 16th, 2022
          </Text>
          <Text className={'!text-base lg:!text-xl !font-normal mb-[15px] '}>
            This Privacy Policy document describes how Voxclips collects, uses and shares your data.
            This isn’t applicable to any information collected offline or via channels other than
            this website.
          </Text>
        </div>

        <div className="bg-[#fbfbfb]">
          <div className="px-3 lg:px-20 mb-20">
            <Box
              question={'How we use your information'}
              answer={
                <p>
                  At Voxclips, accessible from www.Voxclips.com, one of our main priorities is the
                  privacy of our visitors. This Privacy Policy document contains types of
                  information that is collected and recorded by Voxclips and how we use it.
                  <br></br>
                  <br></br>
                  If you have additional questions or require more information about our Privacy
                  Policy, do not hesitate to contact us.<br></br>
                  This Privacy Policy applies only to our online activities and is valid for
                  visitors to our website with regards to the information that they share and/or
                  collect in Voxclips. This policy is not applicable to any information collected
                  offline or via channels other than this website.
                </p>
              }
            />

            <Box
              question={'Cookies'}
              answer={
                <p>
                  <p>
                    As is common practice with almost all professional websites this site uses
                    cookies, which are tiny files that are downloaded to your computer, to improve
                    your experience. This page describes what information they gather, how we use it
                    and why we sometimes need to store these cookies. We will also share how you can
                    prevent these cookies from being stored however this may downgrade or "break"
                    certain elements of the sites functionality.
                    <br></br>
                    <br></br>
                    We use cookies for a variety of reasons detailed below. Unfortunately, in most
                    cases there are no industry standard options for disabling cookies without
                    completely disabling the functionality and features they add to this site. It is
                    recommended that you leave on all cookies if you are not sure whether you need
                    them or not in case they are used to provide a service that you use.
                    <br></br>
                    <br></br>
                    You can prevent the setting of cookies by adjusting the settings on your browser
                    (see your browser Help for how to do this). Be aware that disabling cookies will
                    affect the functionality of this and many other websites that you visit.
                    Disabling cookies will usually result in also disabling certain functionality
                    and features of this site. Therefore, it is recommended that you do not disable
                    cookies.
                    <br></br>
                    <br></br>
                    <p>The Cookies We Set</p>
                    <br></br>
                    <ul>
                      <li className="list-disc list-inside">
                        {' '}
                        Account related cookies: If you create an account with us then we will use
                        cookies for the management of the signup process and general administration.
                        These cookies will usually be deleted when you log out however in some cases
                        they may remain afterwards to remember your site preferences when logged
                        out.
                      </li>
                      <br></br>
                      <li className="list-disc list-inside">
                        Login related cookies: We use cookies when you are logged in so that we can
                        remember this fact. This prevents you from having to log in every single
                        time you visit a new page. These cookies are typically removed or cleared
                        when you log out to ensure that you can only access restricted features and
                        areas when logged in.
                      </li>
                      <br></br>

                      <li className="list-disc list-inside">
                        Site preferences cookies: In order to provide you with a great experience on
                        this site we provide the functionality to set your preferences for how this
                        site runs when you use it. In order to remember your preferences. We need to
                        set cookies so that this information can be called whenever you interact
                        with a page is affected by your preferences.
                      </li>
                    </ul>
                  </p>
                </p>
              }
            />
            <Box
              question={'Information we collect'}
              answer={
                <p>
                  <p>
                    We only ask for personal information, like names, addresses, phone numbers,
                    email addresses, and sometimes credit card information when we truly need it to
                    provide a service to you. We collect it by fair and lawful means, with your
                    knowledge and consent. We will only use your personal information for the
                    following purposes:
                  </p>
                  <br></br>
                  <ul>
                    <li className="list-disc list-inside">
                      To deliver the products and/or services to you that you have requested;
                    </li>
                    <br></br>
                    <li className="list-disc list-inside  ">
                      Validate your compliance with the terms and conditions;
                    </li>
                    <br></br>
                    <li className="list-disc list-inside  ">
                      content improvement and feedback purposes;
                    </li>
                    <br></br>
                    <li className="list-disc list-inside ">
                      To reach you, when necessary, regarding your use of the website or product(s).
                    </li>
                  </ul>
                  <br></br> <br></br>
                  We only retain collected information for as long as necessary to provide you with
                  your requested service. What data we store, we’ll protect within commercially
                  acceptable means to prevent loss and theft, as well as unauthorized access,
                  disclosure, copying, use or modification.
                  <br></br>
                  <br></br>
                  We don’t share any personally identifying information publicly or with
                  third-parties, except when required to by your received permission.You are free to
                  refuse our request for your personal information, with the understanding that we
                  may be unable to provide you with some of your desired services. If you have any
                  questions about how we handle user data and personal information, feel free to
                  contact us.
                </p>
              }
            />
            <Box
              question={'Changes to policy'}
              answer={
                <p>
                  We may update this policy from time to time to reflect our current practice and
                  ensure compliance with applicable laws. When we post changes to this policy, we
                  will revise the “Last Updated” date at the top of this policy. If we make any
                  material changes to the way we collect, use, store and/or share your personal
                  data, we will take appropriate measures to notify you. We recommend that you check
                  this page from time to time to inform yourself of any changes.
                </p>
              }
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Policy;
