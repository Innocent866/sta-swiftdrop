import React, { useState } from 'react';
import User from './User';
import Setmenu from './index';

export default function ParentComponent() {
  const [previewImage, setPreviewImage] = useState('');

  const handleImageChange = (previewImage) => {
    setPreviewImage(previewImage);
  };

  return (
    <>
      <User handleImageChange={handleImageChange} previewImage={previewImage} />
      <Setmenu previewImage={previewImage} />
    </>
  );
}