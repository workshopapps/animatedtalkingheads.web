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
import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../../components/UI/Text'; 
import styles from '../upload/index.module.scss'
import { Link } from 'react-router-dom';
import {useDropzone} from 'react-dropzone'


const UploadPodcast = () => {
  const [audio,setAudio]=useState(null)
  const [name,setName] = useState(null)
  const [upload,setUpload] = useState(false)
  const [error,setError]=useState(null)
  const [uploaded,setUploaded] = useState(false)
  const [loading,setLoading] = useState({
    label: 'Upload',
    isDisabled:false, })  

  
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles[0])
    setAudio(acceptedFiles[0])
    setName(acceptedFiles[0].name)
  }, [])
  const {getRootProps, getInputProps,isDragActive}
    = useDropzone({onDrop})

 
  const uploadFile=()=>{
  if(audio.type !=='audio/mpeg'){
    setError('Only audio files are supported')
  } 
   else if(audio ){
    setLoading({...loading,isDisabled:true})
    setUpload(true)
    uploadFunction()
    setTimeout(()=>{
      setUploaded(true)
      setUpload(false)
      console.log("yes")
     }, 2000);
    }
  }

  const uploadFunction = () => {

    const data = new FormData()
    data.append('podcast', audio)
   
    fetch('https://api.voxlips.hng.tech/podcasts/upload/', {
      
      method: 'POST',
      body: data,
      headers:{
        'Access-Control-Allow-Origin': "*",
        'content-type': 'multipart/form-data',
        'Access-Control-Allow-Credentials': 'true',
        "user_id":"507f191e810c19729de860ea"

      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error(error)
    })
  }
 
 
  return(
  <Layout>
    <div className='text-center max-w-[1440px] w-[90%] mx-auto mt-10 '>
      <Text label="Upload Audio" w="semibold" type="text1" data-testid="header"/>
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

      <div  {...getRootProps()} className={` cursor-pointer  my-5 py-10 border-[3px] bg-[#FFFFFF] rounded-lg border-dashed border-opacity-20 w-[90%] mx-auto ${error && "border-red-600 opacity-100"}`}>
      
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
        <div></div>
        :<div>
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
        <div >
              <div >
                <input {...getInputProps({id:"mine",accept:"audio/*"})} />
                {
                  isDragActive ?
                    <p>Drop the files here ...</p> :
                    <div>
                    <Text label="Drag and Drop Podcast Audio" type="text2" w="sm"/>
                    <p>or <span className='text-pri-600 cursor-pointer'>{uploaded ? "change file" : "browse"}</span></p>
                    </div>
                }
              </div>
             
         </div>
          }  
        </div>
        {error &&<p className='text-red-700'>{error}</p>}
      </div>
    

      <div className='-[3px] border-green-50 my-5'>
        <div className='flex mx-auto  justify-center  text-[12px] font-bold gap-3 gap-y-2'>
          <div className='flex gap-1 md:gap-2 items-center cursor-pointer'><img src={link} alt="google-drive" className='w-[16px] max-w-[25px]'/><p data-testid="url">Url</p></div>
          <div className='flex gap-1 md:gap-2 items-center cursor-pointer'><img src={google} alt="google-drive" className='w-[16px] max-w-[25px]' /><p>Google Drive</p></div>
          <div className='flex gap-1 md:gap-2 items-center cursor-pointer'><img src={dropbox} alt="google-drive" className='w-[16px] max-w-[25px]'/><p>Dropbox</p></div>
          <div className='flex gap-1 md:gap-2 items-center cursor-pointer'><img src={one_drive} alt="google-drive" className='max-w-[25px]'/><p>One Drive</p></div>    
        </div>
      </div>
      {uploaded ?
      <Link to="/podcast/customize">
        <div className='my-10 justify-center flex'>< Button label="Start Creating" /></div>
      </Link>
      :
      <div className='my-10 justify-center flex '>< Button {...loading} onClick={uploadFile} /></div>
      }
    </div>
   
  </Layout>
  )
};

UploadPodcast.propTypes = {
  loading : PropTypes.object,
  isLoading: PropTypes.bool,
  isDisabled:PropTypes.bool,
  label : PropTypes.number,
  name : PropTypes.string
}

export default UploadPodcast;
