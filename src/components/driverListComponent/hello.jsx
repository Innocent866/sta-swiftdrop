import Table from 'react-bootstrap/Table';
import menu from '../../Asset/menu-6.svg'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import '../../components/profileComponent/style/App.css'
import {
  Pencil,
  Trash2Icon,
  TimerOffIcon,
  Star
} from 'lucide-react';
export default function DriverListComponent() {
    const navigate = useNavigate();

    return (

        <>
          <Table responsive>
           <div>
                   
            <h4 style={{display:'flex', justifyContent:'space-between', marginBottom:'-20px'}}>
        List Of Drivers
        <div>
        <p style={{marginRight:'-114px', width: '188px', height: '60px', right: '20', border: '1px groove', backgroundColor:'#3B5998', textAlign:'center', color:'white', cursor:'pointer', borderRadius:'10px'}} onClick={()=>{
               navigate('/driver-list/Menu/Profile');
            }}>+Add A New Driver</p>
            </div>
      </h4>
      <div style={{ width: '111%', height: '400px', backgroundColor:'white'}}>
      <h5 style={{display:'flex', marginTop:'10px',  width: '99%', height: '40px', backgroundColor:'white'}}>
        Show 
          <Form.Select aria-label="Default select example" style={{width:'70px', height:'40px'}}>
      <option>10</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </Form.Select>
    Entries  
    <input style={{marginLeft:'68%'}}/>
      </h5>
      <div>
    <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Avatar</th>
            <th>Name Last Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Balance</th>
            <th>Delivered</th>
            <th>Canceled</th>
            <th>Rating</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: 'rgba(216, 216, 216, 0.1)' }}>
            <td>1</td>
            <td><img src={menu}/></td>
            <td style={{cursor:'pointer'}} onClick={()=>{
            }}>Gorge Samuel</td>
            <td>09045657890</td>
            <td>john@email.com</td>
            <td>$230.45</td>
            <td>40</td>
            <td>4</td>
            <td><Star/> <Star/><Star/></td>
            <td><button style={{width:'80px', borderRadius:'15px', backgroundColor:'transparent', borderColor:'#4DB6AC', color:'#4DB6AC'}}>Active</button></td>
            <td style={{display:'flex'}}><p style={{cursor:'pointer'}}>Edit <Pencil/></p><p style={{cursor:'pointer'}}>Delete <Trash2Icon/></p><p style={{cursor:'pointer'}}>Suspension <TimerOffIcon/></p></td>
          </tr>
          </tbody>

          <tbody>
          <tr style={{ backgroundColor: 'rgba(216, 216, 216, 0.1)' }}>
            <td>2</td>
            <td><img src={menu}/></td>
            <td>Gorge Samuel</td>
            <td>09045657890</td>
            <td>john@email.com</td>
            <td>$230.45</td>
            <td>40</td>
            <td>4</td>
            <td><Star/> <Star/><Star/></td>
            <td><button style={{width:'80px', borderRadius:'15px', backgroundColor:'transparent', borderColor:'#4DB6AC', color:'#4DB6AC'}}>Active</button></td>
            <td style={{display:'flex'}}><p style={{cursor:'pointer'}}>Edit <Pencil/></p><p style={{cursor:'pointer'}}>Delete <Trash2Icon/></p><p style={{cursor:'pointer'}}>Suspension <TimerOffIcon/></p></td>
          </tr>
          </tbody>
          <tbody>
          <tr style={{ backgroundColor: 'rgba(216, 216, 216, 0.1)' }}>
            <td>3</td>
            <td><img src={menu}/></td>
            <td>Gorge Samuel</td>
            <td>09045657890</td>
            <td>john@email.com</td>
            <td>$230.45</td>
            <td>40</td>
            <td>4</td>
            <td><Star/> <Star/><Star/></td>
            <td><button style={{width:'80px', borderRadius:'15px', backgroundColor:'transparent', borderColor:'#4DB6AC', color:'#4DB6AC'}}>Active</button></td>
            <td style={{display:'flex'}}><p style={{cursor:'pointer'}}>Edit <Pencil/></p><p style={{cursor:'pointer'}}>Delete <Trash2Icon/></p><p style={{cursor:'pointer'}}>Suspension <TimerOffIcon/></p></td>
          </tr>
          </tbody>
          <tbody>
          <tr style={{ backgroundColor: 'rgba(216, 216, 216, 0.1)' }}>
            <td>4</td>
            <td><img src={menu}/></td>
            <td>Gorge Samuel</td>
            <td>09045657890</td>
            <td>john@email.com</td>
            <td>$230.45</td>
            <td>40</td>
            <td>4</td>
            <td><Star/> <Star/><Star/></td>
            <td><button style={{width:'80px', borderRadius:'15px', backgroundColor:'transparent', borderColor:'#4DB6AC', color:'#4DB6AC'}}>Active</button></td>
            <td style={{display:'flex'}}><p style={{cursor:'pointer'}}>Edit <Pencil/></p><p style={{cursor:'pointer'}}>Delete <Trash2Icon/></p><p style={{cursor:'pointer'}}>Suspension <TimerOffIcon/></p></td>
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
     
    </Table>
        </>
        

        
    )

}