import Form from 'react-bootstrap/Form';
import '../profileComponent/style/App.css';
import Signature from "../../Asset/Asset-1.svg"
import Id from "../../Asset/id-card-back.svg"
export default function Profiles() {

  return(
    <>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className='user-container'style={{ width: '838px', height: '90%', right: '20', border: '1px groove', marginTop:'40px'}}>
        <h5 className='user-title'>Driver's info, image & Signature</h5>
      
     <div className='use'>
      <div className=''style={{marginLeft:'30px', marginRight:'30px', marginTop:'60px', marginBottom:'auto'}}>
        
      <img
              className=" imgProfileStyle"
              src="http://bootdey.com/img/Content/avatar/avatar1.png"
              alt=""
            />
        <button
          type="submit"
          className="user-button"
        >
           Upload
        </button>
      </div>
      <Form className=' form-user'>
<div className='user-row'>
        <div className='custom-column'>
          <div className='lines'>
            <label htmlFor='name'>User Name</label>
            <input
              type='text'
              name='company'
              id='name'
              placeholder='User Name'
              autoComplete='family-name'
              className='text-5'
            />
          </div>
          <div className='lines'>
            <label htmlFor='name'>Full Name</label>
            <input
              type='text'
              name='phone-name'
              id='phone'
              placeholder='Full-Name'
              autoComplete='family-name'
              className='text-5'
            />
          </div>
          <div className='lines'>
            <label htmlFor='name'>Phone-Number</label>
            <input
              type='text'
              name='email-address'
              id='emal'
              placeholder='Phone-Number'
              autoComplete='family-name'
              className='text-5'
            />
          </div>
          <div className='lines'>
            <label htmlFor='name'>Email</label>
            <input
              type='text'
              name='email-address'
              id='emal'
              placeholder='Phone-Number'
              autoComplete='family-name'
              className='text-5'
            />
          </div>
        </div>
        <div className='custom-column-2 '>
            <label htmlFor='city' className='don'>Signature</label>
            <div className='textss'>
              <img src={Signature} className='sig'/>
              <button className='custom-button-pro'>
        Change Signature
      </button>
          </div>
        </div>
      </div>
      
      
    </Form>
     </div>
     </div>

     {/**Personal Info */}
     <div className='user-container'style={{ width: '838px', height: '300%', right: '20', border: '1px groove', marginTop:'40px'}}>
        <h5 className='user-title'>Driver's info, image & Signature</h5>
      
     <div className='use'>
      <Form className=' form-user'>
<div className='user-row-9'>
        <div className='custom-column-40'>
          <div className='lines'>
            <label htmlFor='name'>Postal Zip Code</label>
            <input
              type='text'
              name='company'
              id='name'
              placeholder='Postal Code'
              autoComplete='family-name'
              className='text-5'
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
              className='text-5'
            />
          </div>
          <div className='lines'>
            <label htmlFor='name'>Country</label>
            <input
              type='text'
              name='phone-name'
              id='phone'
              placeholder='Country'
              autoComplete='family-name'
              className='text-5'
            />
          </div>
          <div className='lines'>
            <label htmlFor='name'>State</label>
            <input
              type='text'
              name='email-address'
              id='emal'
              placeholder='State'
              autoComplete='family-name'
              className='text-5'
            />
          </div>
          <div className='lines'>
            <label htmlFor='name'>City</label>
            <input
              type='text'
              name='email-address'
              id='emal'
              placeholder='City'
              autoComplete='family-name'
              className='text-5'
            />
          </div>
          <div className='lines'>
          <label >ID Type</label>
            <Form.Select aria-label="Default select example" className='text-5'>
      <option>Personal ID Card</option>
      <option value="1">Percent</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    </div>
    <div className='lines'>
            <label htmlFor='name'>ID Number</label>
            <input
              type='number'
              name='email-address'
              id='emal'
              placeholder='ID Number'
              autoComplete='family-name'
              className='text-5'
            />
          </div>
          <button className='profi'>Cancel</button>
          <button className='profib'>Save</button>
        </div>
        <div className='custom-column-23 '>
            <label htmlFor='city' className='prof'>Signature</label>
            <div className='texts-67'>
              <img src={Id} className='sig-3'/>
              <button className='custom-button-pro'>
        Change Signature
      </button>
          </div>
          <label htmlFor='city' className='prof'>Signature</label>
            <div className='texts-67'>
              <img src={Id} className='sig-3'/>
              <button className='custom-button-pro'>
        Change Signature
      </button>
          </div>
        </div>
      </div>
      
      
    </Form>
     </div>
     </div>
     </div>
    </>
  )
}