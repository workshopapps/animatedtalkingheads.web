import React from 'react';
import styles from './styles.module.css';

import Home from '../../assets/chatbox/Home.png';
import Message from '../../assets/chatbox/Message.png';
import Help from '../../assets/chatbox/Help.png';
import Send from '../../assets/chatbox/Send.png';
import SearchNormal from '../../assets/chatbox/Search-normal.png';
import ArrowRight from '../../assets/chatbox/Arrow-right.png';
import Close from '../../assets/chatbox/Close.png';
import Back from '../../assets/chatbox/Back.svg';
import VoxClips from '../../assets/chatbox/VoxClips.svg';
import MessageSend from '../../assets/chatbox/MessageSend.svg';

const ChatBox = ({ isChatBoxShowing = false, setIsChatBoxShowing }) => {
  const [selectedMenu, setSelectedMenu] = React.useState(1);

  const [homeJSXStatus, setHomeJSXStatus] = React.useState(0);

  const ChatBoxFooterItem = ({ isSelected, onClick, imgSrc, title }) => {
    return (
      <div
        className={`${styles.ChatBoxFooterItem} ${isSelected ? styles.selectedFooterItem : ''}`}
        onClick={onClick}>
        <img src={imgSrc} alt={title} />
        <p>{title}</p>
      </div>
    );
  };

  const HomeJSX = () => {
    const defaultHomeJSX = (
      <>
        <p>Hi, what can we help you with?</p>
        <button className={styles.LeaveAMessageButton} onClick={() => setHomeJSXStatus(1)}>
          <div>
            <p>Leave a message</p>
            <p>We'll be back online in few minutes</p>
          </div>
          <img src={Send} alt="Send" />
        </button>
        <div className={styles.OptionsContainer}>
          <button onClick={() => setHomeJSXStatus(2)}>
            <p>Search for help</p>
            <img src={SearchNormal} alt="Search" />
          </button>
          <button onClick={() => setHomeJSXStatus(3)}>
            <p>Can I get a guide?</p>
            <img src={ArrowRight} alt="Arrow" />
          </button>
          <button onClick={() => setHomeJSXStatus(4)}>
            <p>Why can't I download a video?</p>
            <img src={ArrowRight} alt="Arrow" />
          </button>
        </div>
      </>
    );
    const leaveAMessageJSX = (
      <div className={styles.LeaveAMessageSection}>
        <div className={styles.LeaveAMessageSectionHeader}>
          <button onClick={() => setHomeJSXStatus(0)}>
            <img src={Back} alt="Back" />
          </button>
          <div>
            <img src={VoxClips} alt="VoxClips" />
            <p>
              <span>VoxClips</span>
              <span>Active a few minutes ago</span>
            </p>
          </div>
        </div>
        <div className={styles.LeaveAMessageSectionBody}>
          <p>Please leave a message. We will reply you shortly</p>
        </div>
        <div className={styles.LeaveAMessageBoxContainer}>
          <input type="text" placeholder="Enter Message Here....." />
          <button>
            <img src={MessageSend} alt="Send" />
          </button>
        </div>
      </div>
    );
    return (
      <>
        {homeJSXStatus === 0 && defaultHomeJSX}
        {homeJSXStatus === 1 && leaveAMessageJSX}
      </>
    );
  };

  const MessageJSX = (
    <div className={styles.MessageBoxContainer}>
      <p>Messages</p>
      <p>We are currently not active. Please leave a message, we will be active shortly.</p>
      <button>
        <img src={Send} alt="Send" />
        <span>Send us a message</span>
      </button>
    </div>
  );

  const HelpJSX = (
    <div className={styles.MessageBoxContainer}>
      <p>Help</p>
      <p style={{ fontWeight: 500 }}>
        For any help please contact our customer care personnel using this{' '}
        <span className={styles.link}>Customer Care Link</span>. Thank you for choosing us
      </p>
    </div>
  );

  return (
    <div
      className={styles.ChatBoxContainer}
      style={isChatBoxShowing ? { display: 'block' } : { display: 'none' }}>
      <div
        className={styles.ChatBoxMainContent}
        style={
          homeJSXStatus > 0
            ? { paddingInline: 0, height: '100%' }
            : { paddingInline: '16px', height: 'calc(100% - 78px)' }
        }>
        <button
          className={styles.CloseChatBoxButton}
          onClick={() => setIsChatBoxShowing(false)}
          // style={(isChatBoxShowing && homeJSXStatus > 0) ? { display: 'none' } : { display: 'block' }}
        >
          <img src={Close} alt="Close button" />
        </button>
        {selectedMenu === 1 && <HomeJSX />}
        {selectedMenu === 2 && MessageJSX}
        {selectedMenu === 3 && HelpJSX}
      </div>
      <div
        className={styles.ChatBoxFooter}
        style={homeJSXStatus > 0 ? { display: 'none' } : { display: 'flex' }}>
        <ChatBoxFooterItem
          imgSrc={Home}
          isSelected={selectedMenu === 1}
          onClick={() => setSelectedMenu(1)}
          title="Home"
        />
        <ChatBoxFooterItem
          imgSrc={Message}
          isSelected={selectedMenu === 2}
          onClick={() => setSelectedMenu(2)}
          title="Message"
        />
        <ChatBoxFooterItem
          imgSrc={Help}
          isSelected={selectedMenu === 3}
          onClick={() => setSelectedMenu(3)}
          title="Help"
        />
      </div>
    </div>
  );
};

export default ChatBox;
