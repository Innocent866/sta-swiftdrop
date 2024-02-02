import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../../components/profileComponent/style/App.css';
import {
  Percent,
} from 'lucide-react';
export default function percent() {
  return(
    <>
      <div className='company-info-container'style={{ width: '930px', height: '95%', right: '20', border: '1px groove'}}>
        <h3 className='company-info-heading '>Resturant Fees</h3>
      
     <div className='flex-container'>

<Form className='custom-form'>
    <div className='custom-row align-items-center'>
        <div className='custom-form-group group' id='formBasicEmail'>
            <label >Status</label>
            <Form.Select aria-label="Default select example" className='custom-input' style={{ width: '650px' }}>
      <option>Percent</option>
      <option value="1">Percent</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
        </div>
        <div className='custom-form-group group' id='formBasicEmail'>
          <label>Default fee for all resturant</label>
        <InputGroup className="mb-3">
        <InputGroup.Text >
          <Percent/>
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
            <button type='submit' className='custom-button' style={{ width: '250px' }}>
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