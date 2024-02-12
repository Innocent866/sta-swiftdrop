import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function User() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [companyInfo, setCompanyInfo] = useState({
    Companyname: '',
    phoneNumber: '',
    email: '',
    address: '',
    city: '',
    state: '',
    code: ''
  });
  const [image, setImage] = useState('');

  useEffect(() => {
    // Fetch company info
    fetchCompanyInfo();
  }, []);

  const fetchCompanyInfo = () => {
    // Fetch company info from API
    axios.get('https://swifdropp.onrender.com/api/v1/company/details/6581527dc96a438562098fef')
      .then(response => {
        const data = response.data;
        setCompanyInfo({
          Companyname: data.Companyname || '',
          phoneNumber: data.phoneNumber || '',
          email: data.email || '',
          address: data.address || '',
          city: data.city || '',
          state: data.state || '',
          code: data.code || ''
        });
        // Set the image URL from the fetched data
        setImage(data.image || '');
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching company info:', error);
        setLoading(false);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompanyInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send updated company info to API
    axios.put('https://swifdropp.onrender.com/api/v1/company/edit/6581527dc96a438562098fef', companyInfo)
      .then(response => {
        console.log('Company info updated successfully:', response.data);
        navigate('/profile/User');
      })
      .catch(error => {
        console.error('Error updating company info:', error);
      });
  };

  function handleImage(e) {
    console.log(e.target.files)
    setImage(e.target.files[0]);
  }

  function handleApi() {
    const formData = new FormData();
    formData.append('image', image);
    axios.put('https://swifdropp.onrender.com/api/v1/company/profile/picture/6581527dc96a438562098fef', formData)
      .then((res) => {
        console.log(res);
        setImage(res.data.imageUrl || ''); // Update image URL with the newly uploaded image URL
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
      });
  }

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', marginLeft: '-40px' }}>
          <Spinner animation="border" style={{ width: '4rem', height: '4rem' }} />
        </div>
      ) : (
        <div className='user-container' style={{ width: '1060px', height: '496px', right: '20', border: '1px groove', top: '172px', marginLeft: '5px', left: '475px' }}>
          <h3 className='user-title'>Edit Personal Information</h3>

          <div className='use'>
            <div className='' style={{ marginLeft: '10px', marginRight: '10px', marginTop: '60px', marginBottom: 'auto' }}>
              <img className='imgProfileStyle' src={image} alt='preview' />
              <input type='file' onChange={handleImage} />
              <Button type='submit' className='user-button' onClick={handleApi}>
                Upload
              </Button>
            </div>
            <form onSubmit={handleSubmit}>
            <div className=' form-user'>
              <div className='user-row'>
                <div className='custom-column'>
                  <div className='lines'>
                    <label htmlFor='name'>Company Name</label>
                    <input
                      type='text'
                      name='Companyname'
                      id='name'
                      placeholder='Name'
                      autoComplete='off'
                      className='text12'
                      value={companyInfo.Companyname}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='lines'>
                    <label htmlFor='name'>Phone Number</label>
                    <input
                      type='text'
                      name='phoneNumber'
                      id='phone'
                      placeholder='Phone Number'
                      autoComplete='off'
                      className='text12'
                      value={companyInfo.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='lines'>
                    <label htmlFor='name'>Email Address</label>
                    <input
                      type='text'
                      name='email'
                      id='email'
                      placeholder='Email'
                      autoComplete='off'
                      className='text12'
                      value={companyInfo.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='lines'>
                    <label htmlFor='name'>Address</label>
                    <textarea
                      name='address'
                      id='address'
                      placeholder='address'
                      autoComplete='off'
                      className='text121'
                      value={companyInfo.address}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className='custom-column-2 '>
                  <div className='lines'>
                    <label htmlFor='city'>City</label>
                    <input
                      type='text'
                      name='city'
                      placeholder='City'
                      autoComplete='off'
                      className='text-user'
                      value={companyInfo.city}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className='lines'>
                    <label htmlFor='city'>State</label>
                    <input
                      type='text'
                      name='state'
                      id='state'
                      placeholder='State'
                      autoComplete='off'
                      className='text-user'
                      value={companyInfo.state}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className='lines'>
                    <label htmlFor='city'>Postal Zip Code</label>
                    <input
                      type='text'
                      name='code'
                      id='code'
                      placeholder='Postal Zip Code'
                      autoComplete='off'
                      className='text-user'
                      value={companyInfo.code}
                      onChange={handleInputChange}
                    />
                  </div>
                  <button type='submit' className='custom-button'>
                    Save
                  </button>
                </div>
              </div>
            </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}