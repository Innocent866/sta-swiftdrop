import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../../components/profileComponent/style/App.css';
import {
  Star,
} from 'lucide-react';
export default function Review() {
  return(
    <>
      <div className='company-info-container'style={{ width: '930px', height: '95%', right: '20', border: '1px groove'}}>
        <h3 className='company-info-heading '>Review Settings</h3>
      
     <div className='flex-container'>

<Form className='custom-form'>
    <div className='custom-row align-items-center'>
        <div className='custom-form-group group' id='formBasicEmail'>
          <label>Default fee for all resturant</label>
        <InputGroup className="mb-3">
        <InputGroup.Text >
          <Star/>
        </InputGroup.Text >
       
        <Form.Control
          className='custom-input'  style={{ width: '570px' }}
        />
      </InputGroup>
        </div>
        <div className='custom-form-group group' id='formBasicEmail'>
        <label >Status</label>
            <Form.Select aria-label="Default select example" className='custom-input'style={{ width: '650px' }}>
      <option>Active</option>
      <option value="1">Active</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
        </div>
        <div className=''>
            <button type='submit' className='custom-button-3'>
                Submit
            </button>
        </div>
    </div>
</Form>
     </div>
     </div>
    </>
  )
}