import Form from 'react-bootstrap/Form';
import "../profileComponent/style/App.css"
export default function Account() {
  return(
    <>
      <div className="company-info-container"style={{ width: '820px', height: '98%', right: '20', border: '1px groove'}}>
        <h3 className='company-info-heading'>Company Information</h3>
      
     <div className='flex-container '>
     <Form className='form-container'>
      <div className='row align-items-center'>
      <Form.Group className="group" controlId="formBasicEmail">
        <Form.Label>Business Type</Form.Label>
        <input
                  type="text"
                  name="company"
                  placeholder="Business Name "
                  autoComplete="family-name"
                  className=" input" style={{ paddingLeft: '10px' }}
                />
      </Form.Group>
      <Form.Group className="group" controlId="formBasicEmail">
        <Form.Label>Company Name</Form.Label>
        <input
                  type="text"
                  name="email"
                  placeholder="Company Name"
                  autoComplete="family-name"
                  className=" input" style={{ paddingLeft: '10px' }}
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
                />
      </Form.Group>
      <Form.Group className="group" controlId="formBasicEmail">
        <Form.Label>Identification Number</Form.Label>
        <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Id-Number"
                  autoComplete="family-name"
                  className="input" style={{ paddingLeft: '10px' }}
                />
      </Form.Group>

  
   <Form.Group className="group" controlId="formBasicEmail">
        <Form.Label>Postal Code</Form.Label>
        <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Postal-code"
                  autoComplete="family-name"
                  className="input" style={{ paddingLeft: '10px' }}
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
                />
      </Form.Group>
      <Form.Group className="group" controlId="formBasicEmail">
        <Form.Label>Country</Form.Label>
        <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Country"
                  autoComplete="family-name"
                  className="input" style={{ paddingLeft: '10px' }}
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
