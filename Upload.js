// Upload.js

import React, { useState } from 'react';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size <= 200 * 1024 * 1024) { // Less than 200 MB
        setSelectedFile(file);
        setErrorMessage('');
      } else {
        setSelectedFile(null);
        setErrorMessage('File size exceeds 200 MB limit.');
      }
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('video', selectedFile);

      try {
        const response = await fetch('http://localhost:3000/upload', { // Update URL to your server
          method: 'POST',
          body: formData,
          onUploadProgress: (progressEvent) => {
            const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
            setUploadProgress(progress);
          }
        });
        if (response.ok) {
          console.log('Upload successful');
          setSelectedFile(null);
          setUploadProgress(0);
        } else {
          throw new Error('Upload failed');
        }
      } catch (error) {
        console.error('Upload error:', error);
        setErrorMessage('Upload failed. Please try again later.');
      }
    } else {
      setErrorMessage('Please select a file to upload.');
    }
  };
  

  return (
    <div>
      <h2>Upload Page</h2>
      <input type="file" onChange={handleFileChange} accept="video/*" />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <button onClick={handleUpload}>Upload</button>
      {uploadProgress > 0 && <progress value={uploadProgress} max="100" />}
    </div>
  );
  
};

export default Upload;
