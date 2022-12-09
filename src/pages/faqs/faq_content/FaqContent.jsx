import React from 'react';
import Box from '../Box';
import { Link } from 'react-router-dom';
import styles from './faq_content.module.scss';

export default function FaqContent() {
  const a = (
    <>
      Kindly visit our{' '}
      <Link to="/about">
        {' '}
        <span style={{ color: '#2563eb' }}>About us</span>
      </Link>{' '}
      page for further details or{' '}
      <Link to="/contact">
        {' '}
        <span style={{ color: '#2563eb' }}>Contact us</span>{' '}
      </Link>{' '}
      for further enquiries or suggestions.
    </>
  );

  return (
    <div className={styles.content}>
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

      <Box question={'How do I learn more about Voxclips?'} answer={a} />

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
  );
}
