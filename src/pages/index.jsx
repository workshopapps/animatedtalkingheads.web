import { Button } from '../components/UI/Button';
import { Text } from '../components/UI/Text';

import Layout from '../components/UI/Layout';

const Home = () => {
  return (
    <Layout>
      {/* <Button label={'hello world'} ghost /> */}

      <div className="w-full p-6 md:p-11">
        <div className="code my-11 space-y-6">
          <Text type={'header2'} cap w={'bold'}>
            variants of buttons
          </Text>

          <hr />
          <Text cap type={'text1'} w={'md'}>
            primary button
          </Text>

          <Button label={'hello world'} />

          <Text type={'text3'} w={'md'}>
            how to
          </Text>

          <div className="code_block w-full h-auto p-11 bg-black text-orange-300">
            <code>
              import {' {Button}'} from '../components/UI/Button';
              <br />
              <br />
              <code> {"  <Button label={'hello world'} />"}</code>
            </code>
          </div>
        </div>

        <div className="code my-11 space-y-">
          <hr />
          <Text cap type={'text1'} w={'md'}>
            ghost button
          </Text>

          <Button label={'hello world'} ghost />

          <Text type={'text3'} w={'md'}>
            how to
          </Text>

          <div className="code_block w-full h-auto p-11 bg-black text-orange-300">
            <code>
              import {'{Button}'} from '../components/UI/Button';
              <br />
              <br />
              <code> {"   <Button label={'hello world'} ghost />"}</code>
            </code>
          </div>
        </div>

        <div className="code my-11 space-y-">
          <hr />
          <Text cap type={'text1'} w={'md'}>
            loading button
          </Text>

          <Button label={'hello world'} ghost isLoading />

          <Text type={'text3'} w={'md'}>
            how to
          </Text>

          <div className="code_block w-full h-auto p-11 bg-black text-orange-300">
            <code>
              import {'{Button}'} from '../components/UI/Button';
              <br />
              <br />
              <code> {" <Button label={'hello world'} isLoading />"}</code>
            </code>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
