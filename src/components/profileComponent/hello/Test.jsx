/*import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../../profileComponent/style/App.css'
export default function Account(props) {

  const navigate  = useNavigate()
  return(
    <>
      <div className="company-info-container" id='Company' style={{ width:'500%', height: '824%', right: '20', border: '1px groove', marginLeft:'20px'}}>
        <h3 className='company-info-heading'>Company Information</h3>
      
     <div className='flex-container '>
     <Form className='form-container'>
      <div className='row align-items-center'>
      <Form.Group className="group" controlId="formBasicEmail">
        <Form.Label>Company Name</Form.Label>
        <input
                  type="text"
                  name="company"
                  placeholder="Name"
                  autoComplete="family-name"
                  className=" input" style={{ paddingLeft: '10px' }}
                  value={props.company || ''}
                  readOnly
                />
      </Form.Group>
      <Form.Group className="group" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <input
                  type="text"
                  name="email"
                  placeholder="Phone Number"
                  autoComplete="family-name"
                  className=" input" style={{ paddingLeft: '10px' }}
                  value={props.email}
                  readOnly
                />
      </Form.Group>
      <Form.Group className="group" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <input
                  type="text"
                  name="phone"
                  id="phoneNumber"
                  placeholder="Email Address"
                  autoComplete="family-name"
                  className=" input" style={{ paddingLeft: '10px' }}
                  value={props.phoneNumber}
                  readOnly
                />
      </Form.Group>
      <Form.Group className="group" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <textarea
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Address"
                  autoComplete="family-name"
                  rows="3" 
                  className="input" style={{ paddingLeft: '10px' }}
                  value={props.address}
                  readOnly
                />
      </Form.Group>

  
   <Form.Group className="group" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="City"
                  autoComplete="family-name"
                  className="input" style={{ paddingLeft: '10px' }}
                  value={props.city} 
                  readOnly
                />
      </Form.Group>
      <Form.Group className="group" controlId="formBasicEmail">
        <Form.Label>State</Form.Label>
        <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="State"
                  autoComplete="family-name"
                  className="input" style={{ paddingLeft: '10px' }}
                  value={props.state}
                  readOnly
                />
        
      </Form.Group>
      <Form.Group className="group" controlId="formBasicEmail">
        <Form.Label>Postal Zip COde</Form.Label>
        <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Postal Zip Code"
                  autoComplete="family-name"
                  className="input" style={{ paddingLeft: '10px' }}
                  value={props.postal}
                  readOnly
                />
      </Form.Group>
      <div className='button-container'>
      <button
          type="button"
          className="custom-submit"
          onClick={() =>{
            navigate('/profile/User');
          }}
        >
           Edit
        </button>
        <button
          type="button"
          className="custom-submit-F" onClick={() =>{
            navigate('/profile/Forgot');
          }} >
           Forgot Password
        </button>
        </div>

   </div>
      
    </Form>
     </div>
     </div>
    </>
  )
}
Account.propTypes = {
  company: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  city: PropTypes.string,
  address: PropTypes.string,
  state: PropTypes.string,
  postal: PropTypes.string,
};*/

import Form from 'react-bootstrap/Form';
import "../style/App.css"
import PropTypes from 'prop-types';
export default function Account(props) {
  return(
    <>
      <div className="company-info-container"style={{ width: '820px', height: '98%', right: '20', border: '1px groove'}}>
        <h3 className='company-info-heading'>Company Information</h3>
      
     <div className='flex-container '>
     <Form className='form-container'>
      <div className='row align-items-center'>
      <Form.Group className="group" controlId="formBasicEmail">
      <Form.Label>Company Name</Form.Label>
        <input
                  type="text"
                  name="company"
                  placeholder="Name"
                  autoComplete="family-name"
                  className=" input" style={{ paddingLeft: '10px' }}
                  value={props.company || ''}
                  readOnly
                />
      </Form.Group>
      <Form.Group className="group" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <input
                  type="text"
                  name="email"
                  placeholder="Phone Number"
                  autoComplete="family-name"
                  className=" input" style={{ paddingLeft: '10px' }}
                  value={props.email}
                  readOnly
                />
      </Form.Group>
      <Form.Group className="group" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <input
                  type="text"
                  name="phone"
                  id="phoneNumber"
                  placeholder="Email Address"
                  autoComplete="family-name"
                  className=" input" style={{ paddingLeft: '10px' }}
                  value={props.phoneNumber}
                  readOnly
                />
      </Form.Group>
      <Form.Group className="group" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <textarea
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Address"
                  autoComplete="family-name"
                  rows="3" 
                  className="input" style={{ paddingLeft: '10px' }}
                  value={props.address}
                  readOnly
                />
      </Form.Group>

  
   <Form.Group className="group" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="City"
                  autoComplete="family-name"
                  className="input" style={{ paddingLeft: '10px' }}
                  value={props.city} 
                  readOnly
                />
      </Form.Group>
      <Form.Group className="group" controlId="formBasicEmail">
        <Form.Label>State</Form.Label>
        <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="State"
                  autoComplete="family-name"
                  className="input" style={{ paddingLeft: '10px' }}
                  value={props.state}
                  readOnly
                />
        
      </Form.Group>
      <Form.Group className="group" controlId="formBasicEmail">
        <Form.Label>Postal Zip COde</Form.Label>
        <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Postal Zip Code"
                  autoComplete="family-name"
                  className="input" style={{ paddingLeft: '10px' }}
                  value={props.postal}
                  readOnly
                />
      </Form.Group>
     
      <button
          type="button"
          style={{ width:'200px', height:'45px', backgroundColor:'#4DB6AC', color:'white', borderRadius:'10px' }}
        >
           Save
        </button>

   </div>
      
    </Form>
     </div>
     </div>
    </>
  )
}

Account.propTypes = {
  company: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  city: PropTypes.string,
  address: PropTypes.string,
  state: PropTypes.string,
  postal: PropTypes.string,
};