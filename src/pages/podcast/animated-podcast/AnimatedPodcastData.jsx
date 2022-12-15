import '../animated-podcast/css/index.css'


const AnimatedPodcastData = ({video}) => {


  return (
    <section className="podcast-card">
      <div className='video-preview-container'>
        <video controls src={video.video_url} width="100%" height={"340px"} > 
          Sorry, your browser doesn't support embedded videos, but don't worry, you can
        </video>
      </div>
      <div className='video-data'> 
        <div className='video-details'>
          <p className='text-sm'>{video._id}</p>
          {/* <p className='date-created'>Date Created: props.date, 2022</p> */}
        </div>
        {/* <button className='btn share-btn'>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path fill="#fff" d="M17.75 15a3.75 3.75 0 0 0-2.918 1.418L9.349 12.99c.2-.645.2-1.335 0-1.98l5.483-3.427a3.75 3.75 0 1 0-.833-2.333c.004.336.054.669.15.99L8.667 9.668a3.75 3.75 0 1 0 0 4.665l5.482 3.427a3.59 3.59 0 0 0-.15.99A3.75 3.75 0 1 0 17.75 15Zm0-12a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Zm-12 11.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Zm12 6.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z"/></svg>
          Share Animation
        </button> */}

        <a target={"_blank"} rel="noreferrer" href={video.video_url} download>
          <button className='btn download-btn'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="#1C4CB6" d="M15.26 22.25H8.74c-4.91 0-7.01-2.1-7.01-7.01v-.13c0-4.44 1.75-6.58 5.67-6.95.4-.03.78.27.82.68.04.41-.26.78-.68.82-3.14.29-4.31 1.77-4.31 5.46v.13c0 4.07 1.44 5.51 5.51 5.51h6.52c4.07 0 5.51-1.44 5.51-5.51v-.13c0-3.71-1.19-5.19-4.39-5.46a.75.75 0 0 1-.68-.81c.04-.41.39-.72.81-.68 3.98.34 5.76 2.49 5.76 6.96v.13c0 4.89-2.1 6.99-7.01 6.99Z"/><path fill="#1C4CB6" d="M12 15.63c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v12.88c0 .42-.34.75-.75.75Z"/><path fill="#1C4CB6" d="M12 16.75c-.19 0-.38-.07-.53-.22l-3.35-3.35a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0L12 14.94l2.82-2.82c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.35 3.35c-.15.15-.34.22-.53.22Z"/></svg>
            Download
          </button>
        </a>
      </div>
        
    </section>
    )
}


export default AnimatedPodcastData;