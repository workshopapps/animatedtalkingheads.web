import { ChatIcon } from '../../assets/svg';
import { Button } from '../../components/UI/Button';
import Layout from '../../components/UI/Layout';
import { Text } from '../../components/UI/Text';
import Box from './Box';

const Faqs = () => {
  return (
    <Layout>
      <div className="bg-[#fbfbfb]">
        <Text
          className={'text-[24px] lg:text-[48px] py-[45px] lg:py-[90px] text-center'}
          label={'Frequently Asked Questions'}
        />
        <div className="px-3 lg:px-20 ">
          <Box
            question={'What is VoxClips?'}
            answer={
              'VoxClips is a platform for audio Podcasters to visually engage better with their audience by uploading their audio podcast and converting it to animated talking heads.'
            }
          />
          <Box
            question={'Do I need to create an account to use VoxClips?'}
            answer={
              'Yes, this will help keep the history of your animated talking heads for future downloads.'
            }
          />

          <Box
            question={'How do I learn more about Voxclips?'}
            answer={
              'Kindly visit our About Us page for further details or Contact Us for further enquiries or suggestions.'
            }
          />

          <Box
            question={'Can I upload multiple audios at the same time?'}
            answer={'No, only one audio is required to to create one animated talking head video.'}
          />
          <Box
            question={'Is there an inbuilt mic to create an audio podast on your platform?'}
            answer={
              'No, VoxClips only allows you to convert your audio podcasts  to animated talking heads video.'
            }
          />

          <Box
            question={'Can I download my animated audios and use on other platforms?'}
            answer={'Yes, you can.'}
          />
          <Box
            question={'How do I convert my audio to animated talking head video on VoxClips? '}
            answer={
              'It is simple! Just upload your audio podcast from your device, select your avatar(s) of choice, click Create and watch the magic happen in seconds.'
            }
          />
          <Box
            question={'Is this an animated head talking video generator platform? '}
            answer={'yes!'}
          />

          <Box
            question={'How fast can I convert my audio podcast to animated talking heads video?'}
            answer={'Your audio podcast is converted to animated talking heads video instantly.'}
          />

          <Box
            question={'Can I change my animated avatar after creating my video?'}
            answer={
              'No. You will have to upload your audio again and select the avatar(s) of your choice.'
            }
          />

          <Box
            question={'Can I create interview style of animated talking head video podcast?'}
            answer={
              'Yes, you can, by selecting as many avatars as you want to and synchronizing them to your uploaded audio podcast.'
            }
          />
        </div>
        <section className="border-y my-[128px] hidden lg:block ">
          <div className="flex justify-between max-w-[1288px] mx-auto py-[80px]  px-3 lg:px-20 border-y">
            <div>
              <Text
                label={'Not finding what you are looking for?'}
                className="!text-[32px] text-pri mb-[16px]"
              />
              <Text
                label={'Please Chat with our friendly team'}
                className="!text-[20px] !font-medium "
              />
            </div>
            <Button label={'Get In Touch'} />
          </div>
        </section>
        <div className="lg:hidden px-[43px] pt-[36px] pb-[240px] flex justify-end">
          <ChatIcon />
        </div>
      </div>
    </Layout>
  );
};

export default Faqs;
