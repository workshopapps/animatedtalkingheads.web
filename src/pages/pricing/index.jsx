import Layout from '../../components/UI/Layout';
import Card from './card';
import tick from '../../assets/icons/tick-box.svg';

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
      <main>
        <div>
          <p>Voxclips Pricing</p>
          <p> Ready to scale your Audio Content by transforming it into amazing animated videos?</p>
          <p>
            {' '}
            Voxclips is trusted by <span>2,384+</span> content creators, podcasters and personal
            brands.
          </p>
          <p>Try the Free Plan and then Go Pro to enjoy more exciting features</p>
          <p>
            {' '}
            Trusted by <span>2,000</span> content creators, podcasters and personal brands
          </p>

          <p>Pick the right plan for you and then Go Pro to enjoy more exciting features.</p>
        </div>

        <div>
          <Card
            title="Forever Plan"
            tier="free"
            currency="$0"
            buttonLabel={'Get Started'}
            slogan="Start creating videos on the go">
            {offers[0].map((value, index) => (
              <div key={index}>
                <div key={index}>
                  <img src={tick} alt="tick" />
                  <div className="text">{value}</div>
                </div>
                <>
                  <hr></hr>
                </>
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
                <div key={index}>
                  <img src={tick} alt="tick" />
                  <div className="text">{value}</div>
                </div>

                <>
                  <hr></hr>
                </>
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
                <div key={index}>
                  <img src={tick} alt="tick" />
                  <div className="text">{value}</div>
                </div>
                <>
                  <hr></hr>
                </>
              </>
            ))}
          </Card>
        </div>
        <div>
          <p> FAQ</p>
          <div>
            <p> Will there be a free plan forever?</p>
            <p>
              Yes! We plan to make the free tier a forever benefit. We want you to be able to enjoy
              as many features as possible. Start getting creative!
            </p>
          </div>
          <div>
            <p>Why should I get the Podcaster Plan?</p>
            <p>
              The Podcaster Plan has more features that affords you the opportunity to explore more
              exciting features from Voxclips.
            </p>
          </div>
          <div>
            <p>Why should I get the Content Creator Plan?</p>
            <p>
              When you want to make the best of Voxclips, the Content Creator Plan is perfect if
              you. Opportunities are limitless for you.
            </p>
          </div>
        </div>
        <div>
          {' '}
          Please send us feedback on our plans and pricing: <span> help@voxclips.com</span>
        </div>
      </main>
    </Layout>
  );
};

export default Pricing;
