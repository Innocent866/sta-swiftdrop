import Form from 'react-bootstrap/Form';
import "../profileComponent/style/App.css"
export default function Password() {
    
  return(
    <>
      <div className='company-info-container'style={{ width: '930px', height: '95%', right: '20', border: '1px groove', marginLeft:'8px', marginTop:'40px'}}>
        <h3 className='company-info-heading '>Change Password</h3>
      
     <div className='flex-container'>

<Form className='custom-form' >
    <div className='custom-row align-items-center'>
            <label >Add Password</label>
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <input type='password' name='old-password' id='old-password' placeholder='Old Password' autoComplete='family-name' className='custom-inputs-m' style={{width:'630px', height:'45px'}} />
            <div>
            <button type='submit' style={{width:'205px', height:'45px', backgroundColor:'#3B5998', color:'white'}}>
                Password Generation
            </button>
            </div>
            </div>
        </div>
        <div className=''>
            <button type='submit' style={{width:'207px', height:'45px', backgroundColor:'#4DB6AC', color:'white', marginTop:'30px'}}>
                Save Password
            </button>
    </div>
</Form>
     </div>
     </div>
    </>
  )
}