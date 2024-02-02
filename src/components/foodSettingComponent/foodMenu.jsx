import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import menu from '../../Asset/menu-6.svg'
import '../../components/profileComponent/style/App.css'
import {
  Pencil,
  Trash2Icon
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export default function foodMenu() {
  const navigate  = useNavigate();
  return (
    <>
    <div>
    <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Rating</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: 'rgba(216, 216, 216, 0.1)' }}>
            <td>1</td>
            <td><img src={menu}/></td>
            <td>Best Sellers</td>
            <td>Lorem ipsum dolor sit amet consectetur</td>
            <td>4.9</td>
            <td>
            <Form style={{width:'10px'}}>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        style={{ transform: 'scale(1.5)', borderColor:'green' }}
      />
      </Form>
            </td>
            <td><button style={{width:'100%', borderRadius:'15px', backgroundColor:'transparent', borderColor:'#4DB6AC', color:'#4DB6AC'}}>Active</button></td>
            <td><p style={{cursor:'pointer'}}>Edit <Pencil/></p><p style={{cursor:'pointer', marginTop:'-10px'}}>Delete <Trash2Icon/></p></td>
          </tr>
          </tbody>

          <tbody>
          <tr style={{ backgroundColor: 'rgba(216, 216, 216, 0.1)' }}>
            <td>1</td>
            <td><img src={menu}/></td>
            <td>Best Sellers</td>
            <td>Lorem ipsum dolor sit amet consectetur.</td>
            <td>4.9</td>
            <td>
            <Form style={{width:'10px'}}>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        style={{ transform: 'scale(1.5)', borderColor:'green' }}
      />
      </Form>
            </td>
            <td><button style={{width:'80px', borderRadius:'15px', backgroundColor:'transparent', borderColor:'#4DB6AC', color:'#4DB6AC'}}>Active</button></td>
            <td><p style={{cursor:'pointer'}}>Edit <Pencil/></p><p style={{cursor:'pointer', marginTop:'-10px'}}>Delete <Trash2Icon/></p></td>
          </tr>
          </tbody>
        </Table>
        <div>
          <button className='custom-button-1' style={{marginTop:'-70px'}}  onClick={() =>{
            navigate('/food-setting/AddEdit');
          }}>+Add a New Category</button>
          </div>
        </div>
    </>
)
}