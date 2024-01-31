import Form from 'react-bootstrap/Form';
import '../../components/profileComponent/style/App.css'

export default function AddEdit() {
  return(
  <>
    <div className='user-container'style={{ width: '900px', height: '90%', right: '20', border: '1px groove'}}>
        <h3 className='user-title'>Add/Edit Food Category</h3>
      
     <div className='use'>
      <div className=''style={{marginLeft:'30px', marginRight:'30px', marginTop:'20px', marginBottom:'auto'}}>
        
      <img
              className=" imgProfileStyle"
              src="http://bootdey.com/img/Content/avatar/avatar1.png"
              alt=""
            />
        <button
          type="submit"
          className="user-button-1"
        >
           Upload
        </button>
      </div>
     <Form className=' form-user'>
<div className='user-row'>
<div className='custom-form-group group' id='formBasicEmail'>
        <label >Category Name</label>
        <Form.Control
          className='custom-input'  style={{ width: '450px' }}
          placeholder='Category Name'
        />
          <label >Description</label>
        <Form.Control
          className='custom-input'  style={{ width: '450px' }}
          placeholder='Description'
        />
          <label >Status</label>
        <Form.Control
          className='custom-input'  style={{ width: '450px' }}
          placeholder='Status'
        />
        </div>
      </div> 
       <button type='submit' className='custom-button-3'>
                SUBMIT
            </button>
      
    </Form>
     </div>
     </div>
  </>
)
}