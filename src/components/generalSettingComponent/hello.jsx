import {
  UserCheck2Icon,
  UnlockKeyhole,
  CreditCard,
  Building2Icon,
  CreditCardIcon,
  CarTaxiFrontIcon,
  MailQuestionIcon,
  Bitcoin,
  BanknoteIcon,

} from 'lucide-react';
import "../profileComponent/style/App.css"
import {Link} from "react-router-dom"

export default function GeneralSettingComponent() {

    const Menu = [
        {title: "General Settings", icon:<UserCheck2Icon size={25}/>, href:"Profile"},
        {title: "Payment Gateway", icon:<CreditCard size={25}/>, href:"Password"},
        {title: "Share & Earn Settings", icon:<Building2Icon size={25}/>, href:"Company"},
        {title: "Business Types", icon:<CreditCardIcon size={25}/>, href:"License"},
        {title: "Admin Types", icon:<CarTaxiFrontIcon size={25}/>, href:"Vehicle"},
        {title: "Role Management", icon:<MailQuestionIcon size={25}/>, href:"Delivery"},
        {title: "Terms Of Use", icon:<Bitcoin size={25}/>, href:"Payout"},
        {title: "Privacy Policy", icon:<BanknoteIcon size={25}/>, href:"Pmanage"},
      ]
      return(
        <>
        <div className='menu-container'>
          <h5 className='tit'>General Settings</h5>
          <nav className='menu' style={{ width: '400px', height: '550%', border: '1px groove', marginLeft:'-20px', marginTop:'-10px'}}>
            <div className='menu-set'>
                <ul className="flex-1 px-3"></ul>
            </div>
            <ul className='menu-top'>
              {Menu.map((menu, index)=>(
                <li key={index} 
                className={'menu-link-drive'}>
                   <Link to={menu.href} className="menu-style" style={{textDecoration:'none'}}>
                   {menu.icon}
                   {menu.title}
                   </Link>
                   {index === 2 && <hr />}
                   {index === 5 && <hr />}
                </li>
              ))}
            </ul>
          </nav>
        </div>
    </>
    )
}
    
    
