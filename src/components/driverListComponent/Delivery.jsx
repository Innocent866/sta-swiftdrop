import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import '../../components/profileComponent/style/App.css'
import {
  Timer,
  Calendar
} from 'lucide-react';
export default function Delivery() {

    return (

        <>

            <div>
      <div style={{ width: '102%', height: '400px', backgroundColor:'white', marginTop:'40px'}}>
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
            <th>Pickup Location</th>
            <th>Drop Location</th>
            <th>Invoice</th>
            <th>fee</th>
            <th>Status</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: 'rgba(216, 216, 216, 0.1)' }}>
            <td>1</td>
            <td style={{display:'flex'}}><p style={{cursor:'pointer'}}>25.03.2024 <Calendar/></p><p style={{cursor:'pointer',  marginLeft:'20px'}}>4:00pm <Timer/></p></td>
            <td>03 john str</td>
            <td>25 lagoon estate</td>
            <td style={{ color:'#3B5998'}}>WER456D4</td>
            <td>$400.00</td>
            <td><button style={{width:'80px', borderRadius:'15px', backgroundColor:'transparent', borderColor:'#4DB6AC', color:'#4DB6AC'}}>Active</button></td>
            <td style={{display:'flex'}}><p style={{cursor:'pointer'}}>Available</p></td>
          </tr>
          </tbody>

          <tbody>
          <tr style={{ backgroundColor: 'rgba(216, 216, 216, 0.1)' }}>
            <td>2</td>
            <td style={{display:'flex'}}><p style={{cursor:'pointer'}}>25.03.2024 <Calendar/></p><p style={{cursor:'pointer',  marginLeft:'20px'}}>4:00pm <Timer/></p></td>
            <td>03 john str</td>
            <td>25 lagoon estate</td>
            <td style={{ color:'#FF5151'}}>WER456D4</td>
            <td>$400.00</td>
            <td><button style={{width:'80px', borderRadius:'15px', backgroundColor:'transparent', borderColor:'#FF5252', color:'#FF5252'}}>Canceled</button></td>
            <td style={{display:'flex'}}><p style={{cursor:'pointer'}}>Unavailable</p></td>
          </tr>
          </tbody>
          <tbody>
          <tr style={{ backgroundColor: 'rgba(216, 216, 216, 0.1)' }}>
            <td>3</td>
            <td style={{display:'flex'}}><p style={{cursor:'pointer'}}>25.03.2024 <Calendar/></p><p style={{cursor:'pointer',  marginLeft:'20px'}}>4:00pm <Timer/></p></td>
            <td>03 john str</td>
            <td>25 lagoon estate</td>
            <td style={{ color:'#3B5998'}}>WER456D4</td>
            <td>$400.00</td>
            <td><button style={{width:'80px', borderRadius:'15px', backgroundColor:'transparent', borderColor:'#4DB6AC', color:'#4DB6AC'}}>Active</button></td>
            <td style={{display:'flex'}}><p style={{cursor:'pointer'}}>Available</p></td>
          </tr>
          </tbody>
          <tbody>
          <tr style={{ backgroundColor: 'rgba(216, 216, 216, 0.1)' }}>
            <td>4</td>
            <td style={{display:'flex'}}><p style={{cursor:'pointer'}}>25.03.2024 <Calendar/></p><p style={{cursor:'pointer',  marginLeft:'20px'}}>4:00pm <Timer/></p></td>
            <td>03 john str</td>
            <td>25 lagoon estate</td>
            <td style={{ color:'#FF5151'}}>WER456D4</td>
            <td>$400.00</td>
            <td><button style={{width:'80px', borderRadius:'15px', backgroundColor:'transparent', borderColor:'#FF5252', color:'#FF5252'}}>Canceled</button></td>
            <td style={{display:'flex'}}><p style={{cursor:'pointer'}}>Too Far</p></td>
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