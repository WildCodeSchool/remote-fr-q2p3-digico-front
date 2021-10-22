import { useState } from 'react'

import axios from 'axios';
// import cross from '../../assets/icons/cross.png';
// import './FileUpload.css'

function FileUpload() {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('');
    const [uploadedFile, setUploadedFile] = useState({});

  const handleChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:8000/api/projects/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
    } catch (err) {
      console.log(err)
    }
  };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type='file' id='fileUp' onChange={handleChange} />
                    <label>{filename}</label>
                </div>
                <input type='submit' value='Télécharger'/>
            </form>

        {uploadedFile ? (
        <div>
            <p>{uploadedFile.fileName}</p>
            <img src={uploadedFile.filePath} alt="" />
        </div>
        ) : null}
            {/* {selectedImage && (
                    <div>
                        <img 
                            src={URL.createObjectURL(selectedImage)}
                            alt=""
                            className="img_preview"
                        />
                        <img src={cross} className="cancel_img_preview" onClick={removeSelectedImage} />
                    </div>
                )} */}
        </div>    
    )
}

export default FileUpload
