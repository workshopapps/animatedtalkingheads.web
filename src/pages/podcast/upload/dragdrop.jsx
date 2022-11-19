import { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import { Text } from "../../../components/UI/Text";

export default function DragDropFile({onUpload}) {
    const drop =useRef(null);


    useEffect(() => {
        drop.current.addEventListener('dragover', handleDragOver);
        drop.current.addEventListener('drop', handleDrop);
    
        return () => {
        // drop.current.removeEventListener('dragover', handleDragOver);
        // drop.current.removeEventListener('drop', handleDrop);
        };
    }, []);
    
    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };
    
  const handleDrop = (e) => {
  e.preventDefault();
  e.stopPropagation();

  const {files} = e.dataTransfer;

  if (files && files.length) {
    onUpload(files);
  }
};

 
    return (
        <div  ref={drop}
        className='FilesDragAndDrop'>
        <Text label="Drag and Drop Podcast Audio" type="text3" w="sm" />
      </div>
    )
  }
  DragDropFile.propTypes = {
    onUpload: PropTypes.func.isRequired,
  };

  