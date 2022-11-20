import Layout from '../../components/UI/Layout';

import './explore-avatar.scss';
import head1 from '../../assets/images/exploreAvatar/head1.png'
import head2 from '../../assets/images/exploreAvatar/head2.png'
import head3 from '../../assets/images/exploreAvatar/head3.png'
import head4 from '../../assets/images/exploreAvatar/head4.png'
import head5 from '../../assets/images/exploreAvatar/head5.png'
import head6 from '../../assets/images/exploreAvatar/head6.png'
import head7 from '../../assets/images/exploreAvatar/head3.png'
import head8 from '../../assets/images/exploreAvatar/head8.png'
import head9 from '../../assets/images/exploreAvatar/head9.png'
import head0 from '../../assets/images/exploreAvatar/head0.png'

import { Text } from '../../components/UI/Text';
// import { Button } from '../../components/UI/Button';



const avatarArary = [
  {
    img: head1,
    name: 'zeki',
    text: 'Free spirited, fun, laughs alot and also a sport enthusiast'
  }, {
    img: head2,
    name: 'dev',

    text: 'Believes change begins with words and willpowe.More of a motivational speaker.'
  }, {
    img: head3,
    name: 'idris',

    text: 'Casual talker, music enthusiast. Enjoys anything entertainment talk.'
  },
  {
    name: 'temmie',
    img: head0,
    text: 'Does not care about what other thinks, not motivated by social norms. enjoys Political talks'
  }, {
    name: 'noble',
    img: head4,
    text: 'Introverted, Reads alot and enjoys career talks.'
  }, {
    name: 'crooz',
    img: head5,
    text: 'Stable, Confident, Affectionate and communicates well. Enjoys relationship talks,'
  },

  {
    name: 'temmie',
    img: head0,
    text: 'Does not care about what other thinks, not motivated by social norms. enjoys Political talks'
  }, {
    name: 'noble',
    img: head6,
    text: 'Hard worker, independent and available on request. Mostly into career talks.'
  }, {
    name: 'josh',
    img: head7,
    text: 'Hard worker, independent and available on request. Mostly into career talks.'
  }, {
    name: 'frex',
    img: head8,
    text: 'More of a motivational speaker.'
  }, {
    name: 'bobby dev',
    img: head9,
    text: 'Relaxed, always calm and not easily ruffled, Enjoys all tyes of discussion'
  }, {
    name: 'temmie',
    img: head0,
    text: 'Does not care about what other thinks, not motivated by social norms. enjoys Political talks'
  },



]

const CustomizeAudio = () => {
  return (
    <Layout>
      <div className={`p-4 lg:px-20`}>
        <div className="head_wrapper text-center space-y-3">
          <Text w={'black'} type={'header1'}>
            Explore Our Avatars at VoxClips
          </Text>

          <Text w={'md'} type={'text4'} className={'hidden md:block'}>
            visit our avatar hub and know which
            character best suits your podcast video
          </Text>
        </div>

        <main className="my-4 w-full grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-11">
          {

            avatarArary.map((item, index) => (
              <div key={index} className="avatar_card text-center flex flex-col justify-between bg-blue-100 rounded-xl p-4 space-y-3 items-center">
                <div className="image ">
                  <img src={item.img} alt="" className='w-[95%] h-[95%] md:w-full md:h-full mx-auto' />
                </div>

                <div className="info">
                  <Text w={'bold'} type={'text4'} cap>
                    {item.name}
                  </Text>
                  <Text w={'md'} type={'text4'} className={'hidden md:block'}>
                    {item.text}
                  </Text>

                </div>

              </div>
            ))
          }
        </main>

      </div>
    </Layout>
  );
};

export default CustomizeAudio;
