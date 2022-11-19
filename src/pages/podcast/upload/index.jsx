import Layout from '../../../components/UI/Layout';
import microphone from '../../../assets/icons/upload_podcast/microphone-podcast_upload.svg'
import musicnote from '../../../assets/icons/upload_podcast/musicnote.svg'
import google from '../../../assets/icons/upload_podcast/google-drive.svg'
import dropbox from '../../../assets/icons/upload_podcast/dropbox.svg'
import one_drive from '../../../assets/icons/upload_podcast/one-drive.svg'
import link from '../../../assets/icons/upload_podcast/bx_link.svg'
import music from '../../../assets/icons/upload_podcast/music.svg'
import correct from '../../../assets/icons/upload_podcast/correct.svg'
import { Button } from '../../../components/UI/Button';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Header1 } from '../../../components/UI/Text/text.stories';
import { Text } from '../../../components/UI/Text';
import DragDropFile from './dragdrop';
import styles from '../upload/index.module.scss'
import { Link } from 'react-router-dom';

const UploadPodcast = () => {
  const [audio,setAudio]=useState(null)
  const [name,setName] = useState(null)
  const [upload,setUpload] = useState(false)
  const [uploaded,setUploaded] = useState(false)
  const [loading,setLoading] = useState({
    label: 'Upload',
    isDisabled:false, })  


  const handleFileSelected = (e) => {
    const {files}=e.target
    console.log(files)
    console.log(setAudio(files))
    setName(e.target.files[0].name)
    console.log(audio)
    

  }
  const uploadFile=()=>{
    if(audio){
    setLoading({...loading,isDisabled:true})
    setUpload(true)
    setTimeout(()=>{
      setUploaded(true)
      setUpload(false)
      console.log("yes")
     }, 2000);
    }
  }
  const onUpload=(file)=>{
   console.log(file)
   setName(file[0].name)
   
  }
 
 
  return <Layout>
    <div className='text-center max-w-[1440px] w-[90%] mx-auto mt-10 '>
      <Header1 label="Upload Audio" w="semibold" data-testid="header"/>
      <div className='opacity-60 my-5 border rounded-lg bg-[#EFF3F6] border-opacity-20 text-center py-5 px-2 grid gap-3'>
        <Text label="Over 0.5MB, up to 500MB, 2 Hours max." type="text4" w="sm" />
        <div className='flex gap-1 justify-center items-center'>
          <span>
            <img
            src={musicnote}
            alt="musicnote"
            className='max-w-[15px]'
            />
          </span>
           
          <Text label="File Format: mp3, wav or m4a" type="text4" w="sm"/>
          </div>
      </div>

      <div className=' opacity-70 my-5 py-10 border-[3px] bg-[#FFFFFF] rounded-lg border-dashed border-opacity-20 w-[90%] mx-auto'>
      
        <div className='flex justify-center'>
          {uploaded? 
          <img 
          src={correct}
          alt="microphone podcast"
          className='w-[30px] md:w-[50px]'
          />
          :
          <img 
          src={microphone}
          alt="microphone podcast"
          className='w-[30px] md:w-[100px]'
          />
            }
        </div>
       
        {!uploaded && <div>{!upload ?
        <div><DragDropFile
        onUpload={onUpload}
        /></div>:<div>
       <Text label="Your file is uploading" type="text2" w="sm" />  
       <div className={styles.ring}><div></div><div></div><div></div><div></div></div>
       </div>
      }</div>
    }

       {uploaded &&
       <div className='flex justify-center mt-5'>
           <img 
           src={music}
           alt="microphone podcast"
           className='w-[20px] md:w-[30px]'
           />
           </div>
          }
        <div className='flex justify-center gap-2 items-center mb-20'>
          
          {name? <Text label={name} type="text4" w="sm" />    
            :    
          <label onClick={()=>handleFileSelected} className="text-[#2563EB] p-text cursor-pointer">
          <input 
          onChange={handleFileSelected}
          type='file' 
          className='hidden'/>
          {uploaded? "change":"browse"}
          </label>
          }
        </div>
     
      </div>
    
     
      <div className='-[3px] border-green-50 my-5'>
        <div className='flex mx-auto  justify-center  text-[12px] font-bold gap-3 gap-y-2'>
          <div className='flex gap-1 md:gap-2 items-center cursor-pointer'><img src={link} alt="google-drive" className='w-[16px] max-w-[25px]'/><p data-testid="url">Url</p></div>
          <div className='flex gap-1 md:gap-2 items-center cursor-pointer'><img src={google} alt="google-drive" className='w-[16px] max-w-[25px]' /><p>Google Drive</p></div>
          <div className='flex gap-1 md:gap-2 items-center cursor-pointer'><img src={dropbox} alt="google-drive" className='w-[16px] max-w-[25px]'/><p>Dropbox</p></div>
          <div className='flex gap-1 md:gap-2 items-center cursor-pointer'><img src={one_drive} alt="google-drive" className='max-w-[25px]'/><p>One Drive</p></div>    
        </div>
      </div>
      {uploaded 
      ?
      <Link to="/podcast/customize">
        <div className='my-10 justify-center flex '>< Button label="Start Creating" /></div>
      </Link>
      :
      <div className='my-10 justify-center flex '>< Button {...loading} onClick={uploadFile} /></div>
      }
    </div>
  </Layout>;
};

UploadPodcast.propTypes = {
  loading : PropTypes.object,
  isLoading: PropTypes.bool,
  isDisabled:PropTypes.bool,
  label : PropTypes.number,
  name : PropTypes.string
}

export default UploadPodcast;
