import Layout from "../../../components/UI/Layout";
import { Text } from "../../../components/UI/Text";
import MainCard from "../main-card";
import Top from "../top";

const PrivacyChanges = () => {
  return (
    <Layout>
      <div>
        <Top />
        <MainCard>
          <Text
            label={"Changes to policy"}
            className="!font-medium mb-[32px] !text-[20px] lg:!text-[36px] text-pri"
          />
          <div className="p-[16px] lg:pt-[24px] lg:px-[32px] bg-white rounded-md rounded-br-none rounded-bl-none">
            
            <Text className={"!text-base lg:!text-2xl !font-normal  pb-[40px] lg:pb-[80px]"}>
              We may update this policy from time to time to reflect our current practice and ensure
              compliance with applicable laws. When we post changes to this policy, we will revise
              the “Last Updated” date at the top of this policy. If we make any material changes to
              the way we collect, use, store and/or share your personal data, we will take
              appropriate measures to notify you. We recommend that you check this page from time to
              time to inform yourself of any changes.
            </Text>
          </div>
        </MainCard>
      </div>
    </Layout>
  );
};
export default PrivacyChanges;
