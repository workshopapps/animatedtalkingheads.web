import Layout from "../../../components/UI/Layout";
import { Text } from "../../../components/UI/Text";
import MainCard from "../main-card";
import Top from "../top";

const HowWeUseInformation = () => {
  return (
    <Layout>
      <div>
        <Top />
        <MainCard>
          <Text
            label={"How we use Information"}
            className="!font-medium mb-[32px] !text-[20px] lg:!text-[36px] text-pri"
          />
          <div className="p-[16px] lg:pt-[24px] lg:px-[32px] bg-white rounded-md rounded-br-none rounded-bl-none">
            <Text className={"!text-base lg:!text-2xl !font-normal  pb-[20px]"}>
              At Voxclips, accessible from voxclips.hng.tech, one of our main priorities is the
              privacy of our visitors. This Privacy Policy document contains types of information
              that is collected and recorded by Debpay and how we use it.
            </Text>
            <Text className={"!text-base lg:!text-2xl !font-normal  pb-[20px]"}>
              If you have additional questions or require more information about our Privacy Policy,
              do not hesitate to contact us.
            </Text>
            <Text className={"!text-base lg:!text-2xl !font-normal  pb-[40px] lg:pb-[80px]"}>
              This Privacy Policy applies only to our online activities and is valid for visitors to
              our website with regards to the information that they share and/or collect in
              Voxclips. This policy is not applicable to any information collected offline or via
              channels other than this website.
            </Text>
          </div>
        </MainCard>
      </div>
    </Layout>
  );
};
export default HowWeUseInformation;
