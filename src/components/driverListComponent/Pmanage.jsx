import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import '../../components/profileComponent/style/App.css'
import {
  Timer,
  Calendar,
  Trash2Icon
} from 'lucide-react';
export default function Pmanage() {

    return (

        <>

            <div>
      <div style={{ width: '70%', height: '400px', backgroundColor:'white', marginTop:'40px', marginRight:'800px'}}>
          <label>Enter Sum Of Payment</label>
        <div style={{display:'flex'}}>
        <input style={{width:'30%'}}/>
        <button style={{width:'146px', height:'45px', left:'250px', backgroundColor:'#3B5998', color:'white', marginLeft:'20px'}}>Pay Now</button>
        </div>
      <h5 style={{display:'flex', marginTop:'10px',  width: '99%', height: '40px', backgroundColor:'white'}}>
        Show 
          <Form.Select aria-label="Default select example" style={{width:'70px', height:'40px'}}>
      <option>10</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </Form.Select>
    Entries  
    <input style={{marginLeft:'54%'}}/>
      </h5>
      <div>
    <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Date/Time</th>
            <th>Trasaction Number</th>
            <th>Paid</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: 'rgba(216, 216, 216, 0.1)' }}>
            <td>1</td>
            <td style={{display:'flex'}}><p style={{cursor:'pointer'}}><Calendar/>25.03.2024 </p><p style={{cursor:'pointer',  marginLeft:'20px'}}><Timer/>4:00pm </p></td>
            <td style={{ color:'#3B5998'}}>PAY-476SW404DF34</td>
            <td>$400.00</td>
            <td style={{display:'flex'}}><p style={{cursor:'pointer'}}>Delete <Trash2Icon/></p></td>
          </tr>
          </tbody>

          <tbody>
          <tr style={{ backgroundColor: 'rgba(216, 216, 216, 0.1)' }}>
            <td>2</td>
            <td style={{display:'flex'}}><p style={{cursor:'pointer'}}><Calendar/>25.03.2024 </p><p style={{cursor:'pointer',  marginLeft:'20px'}}><Timer/>4:00pm</p></td>
            <td style={{ color:'#FF5151'}}>PAY-476SW404DF34</td>
            <td>$400.00</td>
            <td style={{display:'flex'}}><p style={{cursor:'pointer'}}>Delete <Trash2Icon/></p></td>
          </tr>
          </tbody>
          <tbody>
          <tr style={{ backgroundColor: 'rgba(216, 216, 216, 0.1)' }}>
            <td>3</td>
            <td style={{display:'flex'}}><p style={{cursor:'pointer'}}><Calendar/>25.03.2024 </p><p style={{cursor:'pointer',  marginLeft:'20px'}}><Timer/>4:00pm </p></td>
            <td style={{ color:'#3B5998'}}>PAY-476SW404DF34</td>
            <td>$400.00</td>
            <td style={{display:'flex'}}><p style={{cursor:'pointer'}}>Delete <Trash2Icon/></p></td>
          </tr>
          </tbody>
        </Table>
        </div>
        <div>
          </div>
          <h5 style={{display:'flex', justifyContent:'space-between'}}>Showing 1-10 from 100 data  
          <div style={{ display: 'flex', gap: '5px' }}>
          <p style={{ width: '25px', height: '30px', backgroundColor: 'white', border: '1px groove', textAlign: 'center', cursor: 'pointer' }} className='changed'>1</p>
          <p style={{ width: '25px', height: '30px', backgroundColor: 'white', border: '1px groove', textAlign: 'center', cursor: 'pointer' }} className='changed'>2</p>
          <p style={{ width: '25px', height: '30px', backgroundColor: 'white', border: '1px groove', textAlign: 'center', cursor: 'pointer' }} className='changed'>3</p>
        </div>
      </h5>
          
          </div>
                
            </div>
            
        </>

    )

}