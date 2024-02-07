
import {  useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import '../../profileComponent/style/App.css'
import Swif from "../../../Asset/IMG-20240129-WA0037.jpg"
import axios from 'axios';

export default function User() {
  const [info, setInfo] = useState()
  const [tempInfo, setTempInfo] = useState();
  const navigate = useNavigate();
  const [image, setImage] = useState('')
  const [previewImage, setPreviewImage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = 'https://swifdropp.onrender.com/api/v1/company/details/6581527dc96a438562098fef';
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setInfo(data);
        setTempInfo(data);
        
        setTimeout(() => {
          setLoading(false);
        }, 4000);
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message);
      });

    // Check if there is a stored image URL in the database and use it for preview
    const storedImageURL = localStorage.getItem('profileImage');
    if (storedImageURL) {
      setPreviewImage(storedImageURL);
    }
    
  }, []);

  function handleImage(e) {
    const selectedImage = e.target.files[0];

    // Update the state to hold the selected image
    setImage(selectedImage);

    // Create a URL for previewing the selected image
    const imagePreviewURL = URL.createObjectURL(selectedImage);
    
    // Update the state to hold the preview image URL
    setPreviewImage(imagePreviewURL);

    // Store the preview image URL in local storage
    localStorage.setItem('profileImage', imagePreviewURL);
  }

  function handleApi() {
    const formData = new FormData();
    formData.append("image", image);

    axios.put('https://swifdropp.onrender.com/api/v1/company/profile/picture/6581527dc96a438562098fef', formData)
      .then((res) => {
        console.log(res);

        // Assuming the response includes the updated image URL
        const newImageUrl = res.data.imageUrl;

        // Update the state with the new image URL
        setPreviewImage(newImageUrl);

        // Store the new image URL in local storage
        localStorage.setItem('profileImage', newImageUrl);
      })
      .catch((error) => {
        console.error('Error uploading image:', error.message);
      });
  }



const updateInfo = async (event) => {
  event.preventDefault();
  const url = 'https://swifdropp.onrender.com/api/v1/company/edit/6581527dc96a438562098fef';
  fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body:JSON.stringify(tempInfo),
  })
  .then((response) => {
    return response.json()
  })
  .then((data) =>{
    setInfo(data)
    navigate('/profile/Account')
  })
}

  return(
    <>
      <div className='user-container'style={{width:'500%', height: '496px', right: '20', border: '1px groove', top:'172px', marginLeft:'5px', left:'475px'}}>
        <h3 className='user-title'>Add/Edit Personal Information</h3>
      
     <div className='use'>
     <div className='' style={{ marginLeft: '10px', marginRight: '10px', marginTop: '60px', marginBottom: 'auto' }}>
      {previewImage && <img className='imgProfileStyle' src={previewImage || Swif} alt='' />}
      <input type='file' onChange={handleImage} />
      <button type='submit' className='user-button' onClick={handleApi}>
        Submit
      </button>
    </div>
    {loading ? (
            <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh', marginLeft: '-40px' }}>
              <Spinner animation='border' style={{ width: '4rem', height: '4rem' }} />
            </div>
          ) : info ? (
     <Form className=' form-user'>
<div className='user-row'>
        <div className='custom-column'>
          <div className='lines'>
            <label htmlFor='name'>Company Name</label>
            <input
              type='text'
              name='company'
              id='name'
              placeholder='Name'
              autoComplete='family-name'
              className='text12'
              value={tempInfo.Companyname}
              onChange={(e) => {
                setTempInfo({...tempInfo, Companyname: e.target.value})
              }}
            />
          </div>
          <div className='lines'>
            <label htmlFor='name'>Phone-Number</label>
            <input
              type='text'
              name='phone-name'
              id='phone'
              placeholder='Phone-Number'
              autoComplete='family-name'
              className='text12'
              value={tempInfo.phoneNumber}
              onChange={(e) => {
                setTempInfo({...tempInfo, phoneNumber: e.target.value})
              }}
            />
          </div>
          <div className='lines'>
            <label htmlFor='name'>Email-Address</label>
            <input
              type='text'
              name='email-address'
              id='emal'
              placeholder='Email'
              autoComplete='family-name'
              className='text12'
              value={tempInfo.email}
              onChange={(e) => {
                setTempInfo({...tempInfo, email: e.target.value})
              }}
            />
          </div>
          <div className='lines'>
            <label htmlFor='name'>Address</label>
            <textarea
              type='text'
              name='address'
              id='address'
              placeholder='address'
              autoComplete='family-name'
              className='text121'
              value={tempInfo.address}
              onChange={(e) => {
                setTempInfo({...tempInfo, address: e.target.value})
              }}
            />
          </div>
        </div>
        <div className='custom-column-2 '>
          <div className='lines'>
            <label htmlFor='city'>City</label>
            <input
              type='text'
              name='City'
              placeholder='City'
              autoComplete='family-name'
              className='text'
              value={tempInfo.city}
              onChange={(e) => {
                setTempInfo({...tempInfo, city: e.target.value})
              }}
            />
          </div>

          <div className='lines'>
            <label htmlFor='city'>State</label>
            <input
              type='text'
              name='state'
              id='State'
              placeholder='State'
              autoComplete='family-name'
              className='text'
              value={tempInfo.state}
              onChange={(e) => {
                setTempInfo({...tempInfo, state: e.target.value})
              }}
            />
          </div>

          <div className='lines'>
            <label htmlFor='city'>Postal Zip Code</label>
            <input
              type='text'
              name='postal'
              id='Postal'
              placeholder='Postal'
              autoComplete='family-name'
              className='text'
              value={tempInfo.code}
              onChange={(e) => {
                setTempInfo({...tempInfo, code: e.target.value})
              }}
            />
          </div>
          <button className='custom-button' onClick={updateInfo} >
        save
      </button>
        </div>
      </div>
      
      
    </Form>
    
    ) : null}
     </div>
     </div>
    </>
  )
}