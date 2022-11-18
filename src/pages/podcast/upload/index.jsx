import Layout from '../../../components/UI/Layout';
import microphone from '../../../assets/icons/microphone-podcast_upload.svg'
import musicnote from '../../../assets/icons/musicnote.svg'
import google from '../../../assets/icons/google-drive.svg'
import dropbox from '../../../assets/icons/dropbox.svg'
import one_drive from '../../../assets/icons/one-drive.svg'
import link from '../../../assets/icons/bx_link.svg'
import { Button } from '../../../components/UI/Button';
import { useState } from 'react';

const UploadPodcast = () => {
  const [audio,setAudio]=useState(null)

  const handleClick =(e)=>{
    setAudio(e.target.value)
    console.log(audio)
    
  }
 
  return <Layout>
    <div className='max-w-[1440px] w-[90%] mx-auto mt-10 '>
      <h2 className='h2-text font-[600] text-center max-text-[50px] text-[20px]'>Upload Audio</h2>

      <div className='p-text opacity-60 my-5 border rounded-lg bg-[#EFF3F6] border-opacity-20 text-center p-5 grid gap-3'>
        <p className=' '>Over 0.5MB, up to 500MB, 2 Hours max.</p>
        <p className='flex gap-1 justify-center items-center'>
          <span>
            <img
            src={musicnote}
            alt="musicnote"
            className='max-w-[15px]'
            />
          </span>
          File Format: mp3, wav or m4a 
          </p>
      </div>

      <div className=' opacity-70 my-5 py-5 md:py-10 border-[3px] bg-[#FFFFFF] rounded-lg border-dashed border-opacity-20 w-[90%] mx-auto'>
        <div className='flex justify-center'>
          <img 
          src={microphone}
          alt="microphone podcast"
          className='w-[32px] max-w-full'
          />
        </div>

        <h4 className='h3-text text-center'>Drag and Drop Podcast Audio</h4>
        <div className='flex justify-center gap-2 items-center'>
          <p className='p-text'>or</p>
          <label onClick={handleClick} className="text-[#2563EB] p-text">
          <input 
          type='file' 
          className='hidden'/>
          browse
          </label>

        </div>
      </div>

      <div className='-[3px] border-green-50 my-5'>
        <div className='flex w-[90%] mx-auto justify-center text-[12px] text-[700] gap-5'>
          <div className='flex gap-2 items-center '><img src={link} alt="google-drive" className='w-[16px] max-w-[25px]'/><p>Url</p></div>
          <div className='flex gap-2 items-center'><img src={google} alt="google-drive" className='w-[16px] max-w-[25px]' /><p>Google Drive</p></div>
          <div className='flex gap-2 items-center'><img src={dropbox} alt="google-drive" className='w-[16px] max-w-[25px]'/><p>Dropbox</p></div>
          <div className='flex gap-1 items-center'><img src={one_drive} alt="google-drive" className='max-w-[25px]'/><p>One Drive</p></div>    
        </div>
      </div>
      <div className='my-10 justify-center flex'><Button label={'Upload'}/></div>

    </div>
  </Layout>;
};

export default UploadPodcast;
