import Table from 'react-bootstrap/Table';
import menu from '../../Asset/menu-6.svg'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
         <div style={{ position: 'relative' }}>
        <p style={{ width: '188px', height: '60px', border: '1px groove', backgroundColor:'#3B5998', textAlign:'center', color:'white', cursor:'pointer', borderRadius:'10px', position: 'absolute', top: '-30px', right: '20px', marginTop:'30px', fontSize:'21.9px' }} onClick={()=>{
               navigate('/driver-list/Menu/Profile');
            }}>+Add A New Driver</p>
         
            <div style={{
              width: '1270px',
              height:'750px',
              border: '1px solid #ccc',
              padding: '10px',
              backgroundColor: 'white',
              marginTop: '70px',
              }}>
               <h5 style={{ display: 'flex', alignItems: 'center' }}>
        <span>Show</span> 
        <Form.Select aria-label="Default select example" style={{ width: '70px', height: '40px' }}>
            <option>10</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </Form.Select>
        Entries
        <input style={{  marginLeft: 'auto' }}/>
    </h5>
      
               <Table
            style={{
              width: '1250px',
              height: '605px',
              border: '1px solid #ccc',
              borderRadius: '10px',
              backgroundColor: 'white',
            }} responsive="sm">

        <thead>
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
                </thead>
                <tbody style={{height:'-60.8px'}}>
                      <tr >
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
                

          
          <tr>
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