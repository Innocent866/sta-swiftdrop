import Form from 'react-bootstrap/Form';
import "../profileComponent/style/App.css"
import Id from "../../Asset/registration-certificate-back.svg"
import front from "../../Asset/registration-certificate-front.svg"
import bike from "../../Asset/Scooter-Delivery-Mockup-3.svg"
export default function Vehicle() {
    
  return(
    <>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className='company-info-container'style={{ width: '880px', height: '100%', right: '20', border: '1px groove', marginLeft:'8px', marginTop:'40px'}}>
        <h3 className='company-info-heading '>Registered Vehicle</h3>
      
     <div className='flex-container'>

<Form className='custom-form' >
    <div className='custom-row align-items-center'>

            <div style={{display:'flex', justifyContent:'space-between'}}>
            
            <div className='texts-67'>
            <label htmlFor='city' className=''>Vehicle Photo</label>
              <img src={bike} className='sig-333'/>
              <button className='custom-button-pros'>
        Change Photo
      </button>
          </div>

          <div className='texts-67'>
            <label htmlFor='city' className=''>Certificate Photo/Front</label>
              <img src={front} className='sig-33'/>
              <button className='custom-button-pros'>
        Change Photo
      </button>
          </div>
            </div>

            <div className='texts-698'>
            <label htmlFor='city' className=''>Certificate Photo/Back</label>
              <img src={Id} className='sig-33'/>
              <button className='custom-button-pros'>
        Change Photo
      </button>
        </div>

        <Form.Group className="group" controlId="formBasicEmail">
        <Form.Label>Vehicle Type</Form.Label>
        <input
                  type="text"
                  name="company"
                  placeholder="Scooter"
                  autoComplete="family-name"
                  className=" input" style={{ paddingLeft: '10px' }}
                />
      </Form.Group>
      <Form.Group className="group" controlId="formBasicEmail">
        <Form.Label>Vhicle Manufacture</Form.Label>
        <input
                  type="text"
                  name="email"
                  placeholder="Toyota"
                  autoComplete="family-name"
                  className=" input" style={{ paddingLeft: '10px' }}
                />
      </Form.Group>
      <Form.Group className="group" controlId="formBasicEmail">
        <Form.Label>Vehicle Model</Form.Label>
        <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Model"
                  autoComplete="family-name"
                  className="input" style={{ paddingLeft: '10px' }}
                />
      </Form.Group>
      <Form.Group className="group" controlId="formBasicEmail">
        <Form.Label>Vehicle Color</Form.Label>
        <input
                  type="text"
                  name="phone"
                  id="phoneNumber"
                  placeholder="Black"
                  autoComplete="family-name"
                  className=" input" style={{ paddingLeft: '10px' }}
                />
      </Form.Group>
      <Form.Group className="group" controlId="formBasicEmail">
        <Form.Label>Registration Number</Form.Label>
        <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Registration Number"
                  autoComplete="family-name"
                  className="input" style={{ paddingLeft: '10px' }}
                />
      </Form.Group>

  
   <Form.Group className="group" controlId="formBasicEmail">
        <Form.Label>Fuel Type</Form.Label>
        <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Diesel"
                  autoComplete="family-name"
                  className="input" style={{ paddingLeft: '10px' }}
                />
      </Form.Group>
      <Form.Group className="group" controlId="formBasicEmail">
        <Form.Label>Date Of Manufacture</Form.Label>
        <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Manufacturing Date"
                  autoComplete="family-name"
                  className="input" style={{ paddingLeft: '10px' }}
                />
        
      </Form.Group>
      <Form.Group className="group" controlId="formBasicEmail">
        <Form.Label>Registration Date</Form.Label>
        <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Registration Date"
                  autoComplete="family-name"
                  className="input" style={{ paddingLeft: '10px' }}
                />
      </Form.Group>
        </div>
        <div className=''>
            <button type='submit' style={{width:'207px', height:'45px', backgroundColor:'#4DB6AC', color:'white', marginTop:'10px'}}>
                Save
            </button>
    </div>
</Form>
     </div>
     </div>
               </div>
    </>
  )
}