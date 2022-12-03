import Layout from '../../components/UI/Layout';
import Card from './card';
import tick from '../../assets/icons/tick.svg';
import styles from './index.module.css';

const Pricing = () => {
  const offers = [
    [
      'Five videos per month',
      'Access to 5 avatars',
      'Access to 3 custom backgrounds',
      'Share directly to social networks',
      '1080p animated video'
    ],
    [
      '20 videos per month',
      'Access to over 50 avatars',
      'Move your avatar',
      'Access to 100+ backgrounds',
      'Access to Voxclips creator community',
      'Custom watermark and caption videos',
      'Priority export queue',
      'Save your brand templates',
      'Custom intro and outro videos',
      'Priority support'
    ],
    [
      'Access to 100+ custom avatars',
      'Edit and move avatars in videos',
      'Add emotions to your avatar',
      'Access to 200+ custom backgrounds',
      'Connect and collaborate with others',
      'Custom watermark and caption videos',
      'Priority export queue',
      'Save your brand templates',
      'Custom intro and outro videos',
      'Priority support'
    ]
  ];

  return (
    <Layout>
      <div className="flex justify-center items-center bg-sec-600 p-10 text-white">
        <p className="font-semibold text-3xl lg:text-5xl ">Pricing</p>
      </div>
      <div className="max-w-[1440px] mx-auto w-[90%]">
        <div className="my-10">
          <div className="flex flex-col gap-5 lg:gap-10 text-center">
            <p className="lg:text-2xl text-lg ">
              Ready to scale your Audio Content by transforming it into amazing animated videos?
            </p>
            <p className="lg:text-base text-sm  ">
              Voxclips is trusted by <span className="text-pri-600">2,384+</span> content creators,
              podcasters and personal brands.
            </p>
            <p className="lg:text-2xl text-lg ">
              Try the Free Plan and then Go Pro to enjoy more exciting features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
            <Card
              title="Forever Plan"
              tier="free"
              currency="$0"
              buttonLink="/podcast/upload"
              buttonLabel={'Get Started'}
              slogan="Start creating videos on the go">
              {offers[0].map((value, index) => (
                <div key={index} className="w-[90%] mx-auto">
                  <div className={`${styles.loop_div} `} key={index}>
                    <img className={styles.loop_img} src={tick} alt="tick" />
                    <div className="text">{value}</div>
                  </div>
                  <div className={styles.line}>
                    <hr></hr>
                  </div>
                </div>
              ))}
            </Card>
            <Card
              title="Podcaster Plan"
              buttonLink="/getStarted"
              tier="Billed yearly or $9.99 billed monthly"
              currency="$8.50/mo"
              buttonLabel={'Go Pro'}
              slogan="Access to creative possibilities">
              {offers[1].map((value, index) => (
                <>
                  <div className={styles.loop_div} key={index}>
                    <img className={styles.loop_img} src={tick} alt="tick" />
                    <div className="text">{value}</div>
                  </div>

                  <div className={styles.line}>
                    <hr></hr>
                  </div>
                </>
              ))}
            </Card>
            <Card
              title="Content Cretor Plan"
              tier="Billed yearly or $23.99 billed monthly"
              currency="$18.99/mo"
              buttonLink="/getStarted"
              buttonLabel={'Go Pro'}
              slogan="A world of limitless possibilities">
              {offers[2].map((value, index) => (
                <>
                  <div className={styles.loop_div} key={index}>
                    <img className={styles.loop_img} src={tick} alt="tick" />
                    <div className="text">{value}</div>
                  </div>
                  <div className={styles.line}>
                    <hr></hr>
                  </div>
                </>
              ))}
            </Card>
          </div>

          <div className="mx-auto w-[80%] mt-10">
            <p className="md:text-center mt-10 lg:text-base text-sm">
              Please send us feedback on our plans and pricing:{' '}
              <span className="text-pri-700"> help@voxclips.com</span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
