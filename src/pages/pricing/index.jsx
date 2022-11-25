import Layout from '../../components/UI/Layout';
import Card from './card';
import tick from '../../assets/icons/tick-box.svg';
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
      'Access to 100+ custom and customizable avatars',
      'Edit and move avatars in different parts of the video',
      'Add emotions to your avatar',
      'Access to 200+ custom and customizable backgrounds',
      'Connect and collaborate with other creator on Voxclips',
      'Custom watermark and caption videos',
      'Priority export queue',
      'Save your brand templates',
      'Custom intro and outro videos',
      'Priority support'
    ]
  ];

  return (
    <Layout>
      <div className="max-w-[1440px] mx-auto w-[90%]">
        <div className="my-10">
          <div className="flex flex-col gap-5 lg:gap-10 text-center">
            <p className="font-semibold text-3xl lg:text-5xl">Voxclips Pricing</p>
            <p className="lg:text-3xl text-base hidden md:block">
              Ready to scale your Audio Content by transforming it into amazing animated videos?
            </p>
            <p className="lg:text-2xl text-base hidden md:block">
              Voxclips is trusted by <span className="text-pri-600">2,384+</span> content creators,
              podcasters and personal brands.
            </p>
            <p className="lg:text-3xl text-base hidden md:block">
              Try the Free Plan and then Go Pro to enjoy more exciting features
            </p>
            <div className="lg:text-2xl text-base md:hidden block">
              Trusted by <span className="text-pri-600">2,000</span> content creators, podcasters
              and personal brands
            </div>

            <p className="lg:text-3xl text-base md:hidden block">
              Pick the right plan for you and then Go Pro to enjoy more exciting features.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
            <Card
              title="Forever Plan"
              tier="free"
              currency="$0"
              buttonLabel={'Get Started'}
              slogan="Start creating videos on the go">
              {offers[0].map((value, index) => (
                <div key={index}>
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
              title="Forever Plan"
              tier="Billed yearly or $23.99 billed monthly"
              currency="$0"
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
          <div className="mt-20  ">
            <p className="font-semibold text-3xl lg:text-5xl text-center my-10 "> FAQ</p>
            <div className="grid gap-7 lg:gap-10">
              <div>
                <div className="lg:text-2xl text-xl"> Will there be a free plan forever?</div>
                <div className="lg:text-xl text-base mt-2">
                  Yes! We plan to make the free tier a forever benefit. We want you to be able to
                  enjoy as many features as possible. Start getting creative!
                </div>
              </div>
              <div>
                <div className="lg:text-2xl text-xl">Why should I get the Podcaster Plan?</div>
                <div className="lg:text-xl text-base mt-2">
                  The Podcaster Plan has more features that affords you the opportunity to explore
                  more exciting features from Voxclips.
                </div>
              </div>
              <div>
                <div className="lg:text-2xl text-xl">
                  Why should I get the Content Creator Plan?
                </div>
                <div className="lg:text-xl text-base mt-2">
                  When you want to make the best of Voxclips, the Content Creator Plan is perfect if
                  you. Opportunities are limitless for you.
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto w-[80%]">
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
