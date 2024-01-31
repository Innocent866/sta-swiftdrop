import Form from 'react-bootstrap/Form';
import "../profileComponent/style/App.css"
import Id from "../../Asset/id-card-back.svg"
import front from "../../Asset/id-card-front.svg"
export default function License() {
    
  return(
    <>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className='company-info-container'style={{ width: '880px', height: '95%', right: '20', border: '1px groove', marginLeft:'8px', marginTop:'40px'}}>
        <h3 className='company-info-heading '>Driver's License</h3>
      
     <div className='flex-container'>

<Form className='custom-form' >
    <div className='custom-row align-items-center'>
    <Form.Group className="group" controlId="formBasicEmail">
        <Form.Label>License Number</Form.Label>
        <input
                  type="text"
                  name="email"
                  placeholder="License Number"
                  autoComplete="family-name"
                  className=" input" style={{ paddingLeft: '10px' }}
                />
      </Form.Group>

            <div style={{display:'flex', justifyContent:'space-between'}}>
            
            <div className='texts-69'>
            <label htmlFor='city' className=''>Driver's License/Front</label>
              <img src={front} className='sig-33'/>
              <button className='custom-button-pros'>
        Change Photo
      </button>
          </div>
         
            <div className='texts-690'>
            <label htmlFor='city' className=''>Driver's License/Back</label>
              <img src={Id} className='sig-33'/>
              <button className='custom-button-pros'>
        Change Photo
      </button>
        </div>
            </div>
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