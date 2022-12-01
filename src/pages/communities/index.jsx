import Layout from '../../components/UI/Layout';
import styles from './styles.module.css';
import WhyVoxClips1 from './images/WhyVoxClips - 1.png';
import WhyVoxClips2 from './images/WhyVoxClips - 2.png';
import WhyVoxClips3 from './images/WhyVoxClips - 3.png';
import UpcomingEvents1 from './images/UpcomingEventsPicture.png';
import Logo from './images/Logo.png';
import Avatar from './images/avatar.png';
import { Text } from '../../components/UI/Text';
import { Button } from '../../components/UI/Button';

const Communities = () => {
  const UpcomingEventsListItem = ({
    date = '23 November, 2022',
    title = 'Animation IT events and Synposium',
    imgSrc = UpcomingEvents1,
    buttonText = 'Join\u00A0Us'
  }) => {
    return (
      <div className="w-full">
        <li className={styles.eventsListItem}>
          <img src={imgSrc} alt={title} />
          <div className="flex flex-col">
            <div>
              <h4 className={styles.eventsListDate}>{date}</h4>
              <p className={styles.eventsListTitle}> {title}</p>
            </div>
            <div className="flex grow"></div>
            <div>
              {' '}
              <Button>{buttonText}</Button>{' '}
            </div>
          </div>
        </li>
        <div className={styles.lineHR}></div>
      </div>
    );
  };

  const CommunityPageAnnouncementsListItem = ({
    imgSrc = Logo,
    title = 'FREE Animate 2D Podcast Starter Package',
    text = 'Voxclips has partnered with the team at HNG to offer Animate Podcast 2D starter packages to our entire community for free!',
    details = 'Voxclips Admin_Admin( Admin). 1 yr ago. 3 replies.'
  }) => {
    return (
      <div className={`${styles.annoucement2}`}>
        <div className="flex md:mx-20">
          <img src={imgSrc} alt={title} />
          <div className="ml-4 xl:ml-20">
            <h4>{title}</h4>
            <p>{text}</p>
            <h6>{details}</h6>
          </div>
        </div>
      </div>
    );
  };

  const FeatureRequests = ({ imgSrc, title, text, details }) => {
    return (
      <div className={`${styles.featureRequest} flex`}>
        <div className={`${styles.featureRequestImgBg} shrink-0 flex justify-center items-center`}>
          <img src={imgSrc} alt={title} />
        </div>
        <div className="md:mt-4 ml-4 md:ml-20">
          <h4>{title}</h4>
          <p>{text}</p>
          <h6>{details}</h6>
        </div>
      </div>
    );
  };

  const Container = ({ children }) => {
    return (
      <div className={`${styles.background} px-4 py-10 md:px-10 lg:px-20 2xl:px-28 md:py-20`}>
        {children}
      </div>
    );
  };

  const Container2 = ({ children }) => {
    return <div className={`${styles.background2} px-4 md:px-28`}>{children}</div>;
  };

  return (
    <Layout>
      <div>
        <Container>
          <h1 className={styles.headerText}>Welcome to the Voxclips community!</h1>

          <h2 className={styles.subHeaderText}>Why Choose Voxclips?</h2>

          <p className={styles.welcomeText}>
            Are you a creator looking for more ways to give your podcast traction and more
            listeners? Voxclips unlocks a creative way to engage your listeners, tell great stories
            and make an impact.
          </p>

          {/*  Story */}
          <section className={styles.story}>
            <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2 md:gap-y-10 md:py-16 lg:py-6">
              <div className="basis-3/5">
                <h3> {'Our Experience'} </h3>

                <div className="flex justify-center">
                  <img className="flex md:hidden" src={WhyVoxClips1} alt={'why'} />
                </div>

                <p>
                  Led by a passionate, collaborative team with a strive for excellence, creating an
                  exceptional digital product remains the common goal across our cross-functional
                  teams.
                </p>
              </div>

              <div className="hidden md:flex justify-end">
                <img src={WhyVoxClips1} alt={'why'} />
              </div>

              <img className="hidden md:block" src={WhyVoxClips2} alt={'why'} />

              <div className="basis-3/5">
                <h3> {'Our Technology'} </h3>

                <div className="flex justify-center">
                  <img className="block md:hidden" src={WhyVoxClips2} alt={'why'} />
                </div>

                <p>
                  Voxclips is committed to producing top-quality animated videos by incorporating an
                  easy AI model that breathes life into your podcasts. Using Artificial
                  Intelligence, we’re transforming the process of content creation to unleash human
                  creativity for good.
                </p>
              </div>

              <div className="basis-3/5">
                <h3> {'Our Value'} </h3>

                <div className="flex justify-center">
                  <img className="block md:hidden" src={WhyVoxClips3} alt={'why'} />
                </div>

                <p>
                  Since 2022 Voxclips has been committed to creating more engaging and
                  attention-grabbing podcasts that would visualize and deliver all users' podcast
                  experiences better.
                </p>
              </div>

              <div className="hidden md:flex justify-end">
                <img className="basis-2/5" src={WhyVoxClips3} alt={'why'} />
              </div>
            </div>
          </section>

          <Text
            label="Subscribe to our newsletter for the latest updates and events"
            type="header2"
            className={styles.newsletterHeading}
          />

          <div className={styles.subcribe}>
            <input
              type="text"
              name="CommunityPageSubscribeEmailInput"
              id="CommunityPageSubscribeEmailInput"
              placeholder="Enter your email address"
            />
            <button>Subscribe</button>
          </div>
          <div className={styles.eventsBanner}>
            <p>Upcoming Events</p>
          </div>

          <ul className={styles.events}>
            <UpcomingEventsListItem />
            <UpcomingEventsListItem />
            <UpcomingEventsListItem />
          </ul>

          <div className="flex justify-end">
            {' '}
            <button className={styles.viewAll}>View All</button>{' '}
          </div>
        </Container>

        <Container2>
          <div className={`${styles.annoucement} py-10 flex justify-between`}>
            <h5>Announcements</h5>
            <p>Follow</p>
          </div>
        </Container2>

        <Container>
          <div className={'flex flex-col'}>
            <CommunityPageAnnouncementsListItem />
            <CommunityPageAnnouncementsListItem />
            <CommunityPageAnnouncementsListItem />
          </div>

          <div className="mt-6 flex justify-end">
            {' '}
            <button className={styles.viewAll}>View All</button>{' '}
          </div>
        </Container>

        <Container2>
          <div className={`${styles.annoucement} py-10 flex justify-between`}>
            <h5>Feature Request</h5>
            <p>Follow</p>
          </div>
        </Container2>

        <Container>
          <div className={'flex flex-col'}>
            <FeatureRequests
              imgSrc={Avatar}
              title="Download Source Video"
              titleType="text1"
              text="Hey Team, love your work, I was however wondering if I could download src videos for an..."
              details="Bambam.   1 yr ago.   3 replies."
            />
            <FeatureRequests
              imgSrc={Avatar}
              title="Why is the podcast Upload limited to 1?"
              titleType="text1"
              text="Hey Team, love your work, I was however wondering if I could download src videos for an..."
              details="Bambam.   1 yr ago.   3 replies."
            />
            <FeatureRequests
              imgSrc={Avatar}
              title="Animation that can be edited before download"
              titleType="text1"
              text="Hey Team, love your work, why can't animations be edited after I have finished conversion? Would re..."
              details="Bambam.   1 yr ago.   3 replies."
            />
          </div>

          <div className="mt-6 flex justify-end">
            {' '}
            <button className={styles.viewAll}>View All</button>{' '}
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Communities;
