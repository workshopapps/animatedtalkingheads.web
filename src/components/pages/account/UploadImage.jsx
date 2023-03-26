import axios from "axios";
import { useState, useRef } from "react";
import { FiUpload } from "react-icons/fi";
import { UserAuth } from "../../../context/AuthContext";
import LoadingButton from "../../UI/Button/LoadingBtn";
import ModalWrapper from "../../UI/Modal/ModalWrapper"

const UploadImage = ({ open, handleClose }) => {

    const { user } = UserAuth();

    const [loading, setLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const fileInput = useRef(null);


    // This function will be triggered when the file field change
    const handleChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };

    const handleClick = () => {
        if (fileInput.current) fileInput.current.click()
    }

    const uploadedImages = (
        selectedImage &&
            <div className="flex justify-center items-center h-80"
                role="button" aria-label="preview image" 
                style={{borderRadius: 4,cursor: "pointer", display: "flex", alignItems: "center"}} onClick={handleClick}>
                <img                 
                    src={URL.createObjectURL(selectedImage)}
                    alt="Thumb"
                    />
            </div>
    )

    const uploadBG = (
        <div aria-label="upload widget" onClick={handleClick} 
            className="flex flex-col justify-center items-center h-80"
            style={{ cursor: "pointer", border: "0.2em dashed gray", borderRadius: 10 }}
            role="button">

            <div>
                <FiUpload size={80} />
            </div>


            <p>Click to Upload Image</p>

        {/* 
            <p sx={{mt: 2}} variant="subtitle2">Drag and Drop your Image here</p> */}

        </div>
    )


  const uploadToServer = async () => {

    const formData = new FormData();
    formData.append('profile_pic', selectedImage);
    //formData.append('file_name', name);
    //let uploadStatus = 0;

    const url = 'https://api.voxclips.hng.tech/api/v1/auth/update-user';

    const config = {
      onUploadProgress: (progressEvent) => {
        console.log(progressEvent)
        //const { loaded, total } = progressEvent;
        // uploadStatus = Math.floor((loaded * 100) / total);

        // if (uploadStatus <= 100) {
        //   setPercentage(uploadStatus);
        // }
      },
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${user}`
      }
    };

    setLoading(true)

    try {
      const resp = await axios.post(url, formData, config);
      await resp.data;
    } catch (error) {
      console.log(error.message);
    }

    setLoading(false)
  };

    return (
        <ModalWrapper title={"Upload Profile Image"} open={open} handleClose={handleClose} >
            <input aria-label={"upload input"}  accept="image/*" type="file" ref={fileInput}   style={{display: "none"}} onChange={handleChange}/>
            {   selectedImage ? uploadedImages : uploadBG   }

            <LoadingButton loading={loading} onClick={uploadToServer}>Upload</LoadingButton>
        </ModalWrapper>
    )
    
}

export default UploadImage