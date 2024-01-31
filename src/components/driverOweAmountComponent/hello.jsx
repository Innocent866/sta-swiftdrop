import Table from 'react-bootstrap/Table';
import menu from '../../Asset/menu-6.svg'
import Form from 'react-bootstrap/Form';
import '../../components/profileComponent/style/App.css'
import {
  Pencil,
} from 'lucide-react';

export default function DriverOweAmountComponent() {

    return (

        <>
<div>
      <h4 style={{display:'flex'}}>
        Resturant Owe Amount
        <p style={{marginLeft:'20px', width: '290px', height: '40px', right: '20', border: '1px groove', backgroundColor:'white', textAlign:'center'}}>Total Withdraw:$120.35</p>
        <p style={{marginLeft:'20px', width: '290px', height: '40px', right: '20', border: '1px groove', backgroundColor:'#FF5252', textAlign:'center', color:'white'}}>Total Remaining:$120.35</p>
      </h4>
      <div style={{ width: '99%', height: '400px', backgroundColor:'white'}}>
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
            <th>Driver full name</th>
            <th>Withdraw</th>
            <th>Remaining Amount</th>
            <th>Payment Method</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: 'rgba(216, 216, 216, 0.1)' }}>
            <td>1</td>
            <td><img src={menu}/></td>
            <td>Gorge Samuel</td>
            <td>$50.00</td>
            <td>$46.35</td>
            <td>$Paypal</td>
            <td><p style={{cursor:'pointer'}}>Edit <Pencil/></p></td>
          </tr>
          </tbody>

          <tbody>
          <tr style={{ backgroundColor: 'rgba(216, 216, 216, 0.1)' }}>
            <td>1</td>
            <td><img src={menu}/></td>
            <td>Best Sellers</td>
            <td>$50.00</td>
            <td>$46.99</td>
            <td>$Paypal </td>
            <td><p style={{cursor:'pointer'}}>Edit <Pencil/></p></td>
          </tr>
          </tbody>
          <tbody>
          <tr style={{ backgroundColor: 'rgba(216, 216, 216, 0.1)' }}>
            <td>1</td>
            <td><img src={menu}/></td>
            <td>Best Sellers</td>
            <td>$50.00</td>
            <td>$46.99</td>
            <td>$Paypal </td>
            <td><p style={{cursor:'pointer'}}>Edit <Pencil/></p></td>
          </tr>
          </tbody>
          <tbody>
          <tr style={{ backgroundColor: 'rgba(216, 216, 216, 0.1)' }}>
            <td>1</td>
            <td><img src={menu}/></td>
            <td>Best Sellers</td>
            <td>$50.00</td>
            <td>$46.99</td>
            <td>$Paypal </td>
            <td><p style={{cursor:'pointer'}}>Edit <Pencil/></p></td>
          </tr>
          </tbody>
        </Table>
        </div>
        <div>
          </div>
          <h5 style={{display:'flex', justifyContent:'space-between'}}>Showing 1-10 from 28 data  
              <p style={{marginLeft:'950px', width: '25px', height: '30px', backgroundColor:'white',  border: '1px groove', textAlign:'center', cursor:'pointer'}} className='changed'>1</p>
              <p style={{width: '25px', height: '30px', backgroundColor:'white',  border: '1px groove', textAlign:'center', cursor:'pointer'}} className='changed'>2</p>
          </h5>
          </div>

        </div>
            
        </>

    )

}