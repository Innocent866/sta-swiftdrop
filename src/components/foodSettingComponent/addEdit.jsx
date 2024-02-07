import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import '../../components/profileComponent/style/App.css';

export default function AddEdit({ onDataUpdate }) {
  const [categoryName, setCategoryName] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [isAvailable, setIsAvailable] = useState(true);
  const navigate = useNavigate(); // Initialize useHistory hook

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  
    // Check if a file is selected
    if (file) {
      // Generate a URL for the selected file
      const imageUrl = URL.createObjectURL(file);
      // Set the generated URL as the source of the image element
      document.getElementById('previewImage').src = imageUrl;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('image', imageFile);
      formData.append('title', categoryName);
      formData.append('isAvailable', isAvailable);

      const response = await fetch('https://swifdropp.onrender.com/api/v1/category/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Category added successfully:', responseData);
        //onDataUpdate(); // Notify the parent component about the data update
        navigate('/food-setting/SetMenu'); // Navigate back to the SetMenu page
      } else {
        console.error('Error adding category:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  return (
    <>
      <div className='user-container' style={{ width: '900px', height: '90%', right: '20', border: '1px groove' }}>
        <h3 className='user-title'>Add/Edit Food Category</h3>
        <div className='use'>
          <div className='' style={{ marginLeft: '60px', marginRight: '10px', marginTop: '5px', marginBottom: 'auto' }}>
          <img
            id="previewImage"
            className="imgProfileStyles"
            src="http://bootdey.com/img/Content/avatar/avatar1.png"
            alt="Image"
          />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <Form className=' form-user' onSubmit={handleSubmit}>
            <div className='user-row-add'>
              <div className='custom-form-group group' id='formBasicEmail'>
                <label>Category Name</label>
                <Form.Control
                  className='custom-input'
                  style={{ width: '450px' }}
                  placeholder='Category Name'
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                />
              </div>
            </div>
            <div className='user-row'>
            <Form.Check
              type="switch"
              id="custom-switch"
              label={isAvailable ? "Available" : "Unavailable"} // Set label based on isAvailable state
              checked={isAvailable}
              onChange={() => setIsAvailable(!isAvailable)}
            />
            </div>
            {/* Add onClick event handler to the button */}
            <button type='submit' className='custom-button-3' onClick={handleSubmit}>
              SUBMIT
            </button>
          </Form>
        </div>
      </div>
    </>
  );
}