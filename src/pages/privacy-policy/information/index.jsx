import Layout from "../../../components/UI/Layout";
import { Text } from "../../../components/UI/Text";
import MainCard from "../main-card";
import Top from "../top";

const PrivacyInformation = () => {
  return (
    <Layout>
      <div>
        <Top />
        <MainCard>
          <Text
            label={"Information we collect"}
            className="!font-medium mb-[32px] !text-[20px] lg:!text-[36px] text-pri"
          />
          <div className="p-[16px] lg:pt-[24px] lg:px-[32px] bg-white rounded-md rounded-br-none rounded-bl-none">
            <Text className={"!text-base lg:!text-2xl !font-normal  pb-[10px] "}>
              We only ask for personal information, like names, addresses, phone numbers, email
              addresses, and sometimes credit card information when we truly need it to provide a
              service to you. We collect it by fair and lawful means, with your knowledge and
              consent. We will only use your personal information for the following purposes:
            </Text>
            <ul>
              <li className="list-disc list-inside  !text-base lg:!text-2xl !font-normal  pb-[40px]">
                To deliver the products and/or services to you that you have requested;
              </li>
              <li className="list-disc list-inside !text-base lg:!text-2xl !font-normal  pb-[40px] ">
                Validate your compliance with the terms and conditions;
              </li>
              <li className="list-disc list-inside !text-base lg:!text-2xl !font-normal  pb-[40px] ">
                content improvement and feedback purposes;
              </li>
              <li className="list-disc list-inside  !text-base lg:!text-2xl !font-normal  pb-[40px]">
                To reach you, when necessary, regarding your use of the website or product(s).
              </li>
            </ul>
          </div>
        </MainCard>
      </div>
    </Layout>
  );
};
export default PrivacyInformation;
