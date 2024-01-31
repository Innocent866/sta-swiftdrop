import {
  UserCheck2Icon,
  UnlockKeyhole,
  MoreHorizontal,
  Building2Icon,
  CreditCardIcon,
  CarTaxiFrontIcon,
  MailQuestionIcon,
  Bitcoin,
  BanknoteIcon,

} from 'lucide-react';
import Form from 'react-bootstrap/Form';
import "../profileComponent/style/App.css"
import {Link} from "react-router-dom"
export default function menu() {
  const Menu = [
    {title: "Personal Information", icon:<UserCheck2Icon size={25}/>, href:"Profile"},
    {title: "Change Password", icon:<UnlockKeyhole size={25}/>, href:"Password"},
    {title: "Company Information", icon:<Building2Icon size={25}/>, href:"Company"},
    {title: "Driver License", icon:<CreditCardIcon size={25}/>, href:"License"},
    {title: "Registered Vehicle", icon:<CarTaxiFrontIcon size={25}/>, href:"Vehicle"},
    {title: "Delivery Request History", icon:<MailQuestionIcon size={25}/>, href:"Delivery"},
    {title: "Payout Method", icon:<Bitcoin size={25}/>, href:"Payout"},
    {title: "Payout Mnagement", icon:<BanknoteIcon size={25}/>, href:"Pmanage"},
  ]
  return(
    <>
    <div className='menu-container'>
      <h5 className='tit'>Driver's Profile</h5>
      <nav className='menu' style={{ width: '400px', height: '550%', border: '1px groove', marginLeft:'-20px', marginTop:'-10px'}}>
        <div className='menu-set'>
        <img
              className="  menu-avatar"
              src="http://bootdey.com/img/Content/avatar/avatar1.png"
              alt=""
            />
            <div className=''>
            <h4 className="menu-text-1">Phantom Sam</h4>
            <span className="menu-text-2">Manager</span>
            </div>
            <ul className="flex-1 px-3"></ul>
            <div className="menu-flex-container">
              <div>
                <MoreHorizontal size={20}/>
              </div>
            </div>
        </div>
        <ul className='menu-top'>
          {Menu.map((menu, index)=>(
            <li key={index} 
            className={'menu-link'}>
               <Link to={menu.href} className="menu-style" style={{textDecoration:'none'}}>
               {menu.icon}
               {menu.title}
               </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav className='menu' style={{ width: '400px', height: '350%', border: '1px groove', marginLeft:'-20px', marginTop:'20px'}}>
               <h5 className='sec'>ADMIN'S ALERT SUBMISSION FORM</h5>
               <div>
               <div className='use'>
      <Form className=' form-user'>
<div className='user-row-9'>
        <div className='custom-column-40'>
          <div className='lines'>
            <label htmlFor='name' className='post-2'>Title</label>
            <input
              type='text'
              name='company'
              id='name'
              placeholder='Title'
              autoComplete='family-name'
              className='text-59'
            />
          </div>
          <div className='lines'>
            <label htmlFor='name' className='post-2'>Comments</label>
            <textarea
              type='text'
              name='address'
              id='address'
              placeholder='Comments'
              autoComplete='family-name'
              className='text-59'
            />
          </div>
          <button className='profib'>Save</button>
        </div>
      </div>
    </Form>
     </div>
               </div>
      </nav>

      <nav className='menu' style={{ width: '400px', height: '200%', border: '1px groove', marginLeft:'-20px', marginTop:'20px'}}>
               <h5 className='sec'>Admin's Review Status</h5>
               <label style={{marginLeft:'10px'}}>Review Status</label>
               <div style={{display:'flex', justifyContent:'space-between'}}>
            <Form.Select aria-label="Default select example" className='custom-input' style={{ width: '250px' }}>
      <option >Pending</option>
      <option value="1">Percent</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    <button className='m-d-s'>Save</button>
    </div>
               </nav>
    </div>
</>
)
}

