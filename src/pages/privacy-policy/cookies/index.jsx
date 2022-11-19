import Layout from "../../../components/UI/Layout";
import { Text } from "../../../components/UI/Text";
import MainCard from "../main-card";
import Top from "../top";

const PrivacyCookies = () => {
  return (
    <Layout>
      <div>
        <Top />
        <MainCard>
          <Text
            label={"Cookies"}
            className="!font-medium mb-[32px] !text-[20px] lg:!text-[36px] text-pri"
          />
          <div className="p-[16px] lg:pt-[24px] lg:px-[32px] bg-white rounded-md  mb-[24px]">
            <Text className={"!text-base lg:!text-2xl   text-[#181818]"}>What are Cookies?</Text>
            <Text className={"!text-base lg:!text-2xl !font-normal  pb-[40px]"}>
              As is common practice with almost all professional websites this site uses cookies,
              which are tiny files that are downloaded to your computer, to improve your experience.
              This page describes what information they gather, how we use it and why we sometimes
              need to store these cookies. We will also share how you can prevent these cookies from
              being stored however this may downgrade or "break" certain elements of the sites
              functionality.
            </Text>
          </div>
          <div className="p-[16px] lg:pt-[24px] lg:px-[32px] bg-white rounded-md  mb-[24px]">
            <Text className={"!text-base lg:!text-2xl   text-[#181818]"}>How to use Cookies?</Text>
            <Text className={"!text-base lg:!text-2xl !font-normal  pb-[40px]"}>
              We use cookies for a variety of reasons detailed below. Unfortunately, in most cases
              there are no industry standard options for disabling cookies without completely
              disabling the functionality and features they add to this site. It is recommended that
              you leave on all cookies if you are not sure whether you need them or not in case they
              are used to provide a service that you use.
            </Text>
          </div>
          <div className="p-[16px] lg:pt-[24px] lg:px-[32px] bg-white rounded-md  mb-[24px]">
            <Text className={"!text-base lg:!text-2xl   text-[#181818]"}>Disabling Cookies?</Text>
            <Text className={"!text-base lg:!text-2xl !font-normal "}>
              You can prevent the setting of cookies by adjusting the settings on your browser (see
              your browser Help for how to do this). Be aware that disabling cookies will affect the
              functionality of this and many other websites that you visit. Disabling cookies will
              usually result in also disabling certain functionality and features of this site.
              Therefore, it is recommended that you do not disable cookies.
            </Text>
            <Text className={"!text-base lg:!text-2xl !font-normal  pb-[40px]"}>
              The Cookies We Set.
            </Text>
            <ul>
              <li className="list-disc ml-[16px] lg:mx-[32px]  !text-base lg:!text-2xl !font-normal  pb-[40px]">
                Account related cookies: If you create an account with us then we will use cookies
                for the management of the signup process and general administration. These cookies
                will usually be deleted when you log out however in some cases they may remain
                afterwards to remember your site preferences when logged out.
              </li>
              <li className="list-disc ml-[16px] lg:mx-[32px]  !text-base lg:!text-2xl !font-normal  pb-[40px] ">
                Login related cookies: We use cookies when you are logged in so that we can remember
                this fact. This prevents you from having to log in every single time you visit a new
                page. These cookies are typically removed or cleared when you log out to ensure that
                you can only access restricted features and areas when logged in.
              </li>
              <li className="list-disc ml-[16px] lg:mx-[32px] !text-base lg:!text-2xl !font-normal  pb-[40px] ">
                Surveys related cookies: From time to time we may offer user surveys and
                questionnaires to provide you with interesting insights, helpful tools, or to
                understand our user base more accurately. These surveys may use cookies to remember
                who has already taken part in a survey or to provide you with accurate results after
                you change pages.
              </li>
              <li className="list-disc  ml-[16px] lg:mx-[32px] !text-base lg:!text-2xl !font-normal  pb-[40px]">
                Forms related cookies: When you submit data to through a form such as those found on
                contact pages or comment forms cookies may be set to remember your user details for
                future correspondence.
              </li>
              <li className="list-disc  !text-base lg:!text-2xl !font-normal  pb-[40px]">
                Site preferences cookies: In order to provide you with a great experience on this
                site we provide the functionality to set your preferences for how this site runs
                when you use it. In order to remember your preferences. We need to set cookies so
                that this information can be called whenever you interact with a page is affected by
                your preferences.
              </li>
            </ul>
          </div>
        </MainCard>
      </div>
    </Layout>
  );
};
export default PrivacyCookies;
