import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import '../../components/profileComponent/style/App.css';

export default function AddEdit({ onDataUpdate }) {
  const [categoryName, setCategoryName] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [isAvailable, setIsAvailable] = useState(true);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
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
        onDataUpdate(); // Notify the parent component about the data update
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
          <div className='' style={{ marginLeft: '30px', marginRight: '30px', marginTop: '20px', marginBottom: 'auto' }}>
            <img
              className="imgProfileStyles"
              src="http://bootdey.com/img/Content/avatar/avatar1.png"
              alt=""
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <Form className=' form-user' onSubmit={handleSubmit}>
            <div className='user-row'>
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
                label="Available"
                checked={isAvailable}
                onChange={() => setIsAvailable(!isAvailable)}
              />
            </div>
            <button type='submit' className='custom-button-3'>
              SUBMIT
            </button>
          </Form>
        </div>
      </div>
    </>
  );
}