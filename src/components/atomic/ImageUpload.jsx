import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ImageUpload = ({ onImageUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select an image to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      setUploading(true);
      const response = await axios.post('../utils/cloudinary', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const uploadedImageUrl = response.data.imageUrl;
      setImageUrl(uploadedImageUrl);

      // Pass the URL back to the parent form
      if (onImageUpload) {
        onImageUpload(uploadedImageUrl);
      }
    } catch (error) {
      alert('Failed to upload image: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <ImageUploadWrapper>
      <h4>Upload Club Logo</h4>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <UploadButton
        disabled={!selectedFile || uploading}
        onClick={handleUpload}
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </UploadButton>
      {imageUrl && <PreviewImage src={imageUrl} alt="Uploaded Club Logo" />}
    </ImageUploadWrapper>
  );
};

const ImageUploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const UploadButton = styled.button`
  margin-top: 1rem;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const PreviewImage = styled.img`
  margin-top: 1rem;
  max-width: 200px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
`;

export default ImageUpload;
