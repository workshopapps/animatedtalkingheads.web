import Layout from '../../components/UI/Layout';
import styles from './styles.module.css';
import WhyVoxClips1 from './images/WhyVoxClips - 1.png';
import WhyVoxClips2 from './images/WhyVoxClips - 2.png';
import WhyVoxClips3 from './images/WhyVoxClips - 3.png';
import UpcomingEvents1 from './images/UpcomingEventsPicture.png';
import Logo from './images/Logo.png';
import User from './images/User.png';

import { Text } from '../../components/UI/Text';
import { Button } from '../../components/UI/Button';

const Communities = () => {
  const WhyChooseVoxClipsItem = ({ title, text, imgSrc, style = '' }) => {
    return (
      <li className={`${styles.CommunityWhyChooseVox} ${style}`}>
        <div>
          <Text label={title} type="header2" />
          <br />
          <Text label={text} type="body" />
        </div>
        <img src={imgSrc} alt={title} />
      </li>
    );
  };
  const UpcomingEventsListItem = ({
    date = '23 November, 2022',
    title = 'Animation IT events and Synposium',
    imgSrc = UpcomingEvents1,
    buttonText = 'Join\u00A0Us'
  }) => {
    return (
      <li className={styles.CommunityPageUpcomingEventsListItem}>
        <img src={imgSrc} alt={title} />
        <div>
          <div>
            <Text label={date} type="text2" />
            <Text label={title} type="text1" />
          </div>
          <Button label={buttonText} />
        </div>
      </li>
    );
  };
  const CommunityPageHeaderBanner = ({ title }) => {
    return (
      <div className={styles.CommunityPageHeaderBanner}>
        <Text label={title} type="header2" />
        <Text label="Follow" type="text2" />
      </div>
    );
  };
  const CommunityPageAnnouncementsListItem = ({
    imgSrc = Logo,
    title = 'FREE Animate 2D Podcast Starter Package',
    titleType = 'text2',
    text = 'Voxclips has partnered with the team at HNG to offer Animate Podcast 2D starter packages to our entire community for free!',
    textType = 'text3',
    details = 'Voxclips Admin_Admin( Admin). 1 yr ago. 3 replies.',
    detailsType = 'text3'
  }) => {
    return (
      <li className={styles.CommunityPageAnnouncementsListItem}>
        <img src={imgSrc} alt={title} />
        <div>
          <Text label={title} type={titleType} />
          <Text label={text} type={textType} className={styles.CommunityPageListItemText} />
          <Text label={details} type={detailsType} />
        </div>
      </li>
    );
  };

  return (
    <Layout>
      <div className={styles.CommunityPageContainer}>
        <main>
          <h1>Welcome to the Voxclips community!</h1>
          <h2>Why Choose Voxclips?</h2>
          <p>
            Are you a creator looking for more ways to give your podcast traction and more
            listeners? Voxclips unlocks a creative way to engage your listeners, tell great stories
            and make an impact.
          </p>
        </main>
        <ul>
          <WhyChooseVoxClipsItem
            title="Our Experience"
            text="Led by a passionate, collaborative team with a strive for excellence, 
            creating an exceptional digital product remains the common goal across our 
            cross-functional teams."
            imgSrc={WhyVoxClips1}
          />
          <WhyChooseVoxClipsItem
            title="Our Technology"
            text="Voxclips is committed to producing top-quality animated videos by incorporating an easy AI model that breathes life into your podcasts.
            Using Artificial Intelligence, we’re transforming the process of content creation to unleash human creativity for good.
            "
            imgSrc={WhyVoxClips2}
            style={styles.reverse}
          />
          <WhyChooseVoxClipsItem
            title="Our Value"
            text="Since 2022 Voxclips has been committed to creating 
            more engaging and attention-grabbing podcasts that would 
            visualize and deliver all users' podcast experiences better."
            imgSrc={WhyVoxClips3}
          />
        </ul>
        <Text
          label="Subscribe to our newsletter for the latest updates and events"
          type="header2"
          className={styles.CommunityPageSubscribeHeader}
        />
        <div className={styles.CommunityPageSubscribeInfoContainer}>
          <input
            type="text"
            name="CommunityPageSubscribeEmailInput"
            id="CommunityPageSubscribeEmailInput"
            placeholder="Enter your email address"
          />
          <button>Subscribe</button>
        </div>
        <div className={styles.CommunityPageUpcomingEventsBanner}>
          <p>Upcoming Events</p>
        </div>
        <ul className={styles.CommunityPageUpcomingEvents}>
          <UpcomingEventsListItem />
          <UpcomingEventsListItem />
          <UpcomingEventsListItem />
        </ul>
        <Text label="View All" type="text2" className={styles.CommunityPageLink} />
        <CommunityPageHeaderBanner title="Announcements" />
        <ul className={styles.CommunityPageAnnouncements}>
          <CommunityPageAnnouncementsListItem />
          <CommunityPageAnnouncementsListItem />
          <CommunityPageAnnouncementsListItem />
        </ul>
        <CommunityPageHeaderBanner title="Feature Request" />
        <ul className={styles.CommunityPageFeatureRequests}>
          <CommunityPageAnnouncementsListItem
            imgSrc={User}
            title="Download Source Video"
            titleType="text1"
            text="Hey Team, love your work, I was however wondering if I could download src videos for an..."
            details="Bambam.   1 yr ago.   3 replies."
          />
          <CommunityPageAnnouncementsListItem
            imgSrc={User}
            title="Why is the podcast Upload limited to 1?"
            titleType="text1"
            text="Hey Team, love your work, I was however wondering if I could download src videos for an..."
            details="Bambam.   1 yr ago.   3 replies."
          />
          <CommunityPageAnnouncementsListItem
            imgSrc={User}
            title="Animation that can be edited before download"
            titleType="text1"
            text="Hey Team, love your work, why can't animations be edited after I have finished conversion? Would re..."
            details="Bambam.   1 yr ago.   3 replies."
          />
        </ul>
      </div>
    </Layout>
  );
};

export default Communities;
