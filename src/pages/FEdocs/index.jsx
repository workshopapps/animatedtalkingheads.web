import Layout from '../../components/UI/Layout';
import { Button } from '../../components/UI/Button';
import { Text } from '../../components/UI/Text';

const Home = () => {
  return (
    <Layout>
      <div className="w-full p-6 md:p-11">
        <div className="code my-11 space-y-6">
          <Text type={'header2'} cap w={'bold'}>
            variants of buttons
          </Text>
          <Text cap type={'text1'} w={'md'}>
            primary button
          </Text>

          <Button label={'hello world'} />

          <Text type={'text3'} w={'md'}>
            code
          </Text>

          <div className="code_block md:w-1/2 h-auto p-11 bg-black text-orange-300">
            <code>
              import {' {Button}'} from '../components/UI/Button';
              <br />
              <br />
              <code> {"  <Button label={'hello world'} />"}</code>
            </code>
          </div>
        </div>

        <div className="code my-11 space-y-3">
          <Text cap type={'text1'} w={'md'}>
            ghost button
          </Text>

          <Button label={'hello world'} ghost />

          <Text type={'text3'} w={'md'}>
            code
          </Text>

          <div className="code_block md:w-1/2 h-auto p-11 bg-black text-orange-300">
            <code>
              import {'{Button}'} from '../components/UI/Button';
              <br />
              <br />
              <code> {"   <Button label={'hello world'} ghost />"}</code>
            </code>
          </div>
        </div>

        <div className="code my-11 space-y-3">
          <Text cap type={'text1'} w={'md'}>
            loading button
          </Text>

          <Button label={'hello world'} isLoading />

          <Text type={'text3'} w={'md'}>
            code
          </Text>

          <div className="code_block md:w-1/2 h-auto p-11 bg-black text-orange-300">
            <code>
              import {'{Button}'} from '../components/UI/Button';
              <br />
              <br />
              <code> {" <Button label={'hello world'} isLoading />"}</code>
            </code>
          </div>
        </div>

        <hr className="md:w-1/2" />
        <div className="code my-11 space-y-6">
          <Text type={'header2'} cap w={'bold'}>
            variants of Text
          </Text>
          <Text cap type={'text1'} w={'md'}>
            header1
          </Text>

          <Text type={'header1'} w={'black'}>
            the is a very bold header1
          </Text>

          <Text type={'text3'} w={'md'}>
            code
          </Text>

          <div className="code_block md:w-1/2 h-auto p-11 bg-black text-orange-300">
            import {' {Text}'} from '../components/UI/Text';
            <br />
            <br />
            <code> {"<Text type={'header1'} w={'black'}> the is a very bold header</Text>"} </code>
          </div>
        </div>

        <div className="code my-11 space-y-6">
          <Text cap type={'text4'} w={'md'}>
            text4
          </Text>

          <Text type={'text4'} w={'md'}>
            {' '}
            the is a very small text
          </Text>

          <Text type={'text3'} w={'md'}>
            code
          </Text>

          <div className="code_block md:w-1/2 h-auto p-11 bg-black text-orange-300">
            import {' {Text}'} from '../components/UI/Text';
            <br />
            <br />
            <code> {"<Text type={'text4'} w={'md'}> the is a very small  text</Text>"} </code>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
