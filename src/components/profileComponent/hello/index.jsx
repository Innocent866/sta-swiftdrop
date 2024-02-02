import {
    UserCheck2Icon,
    UnlockKeyhole,
    SquareUserRound,
    BadgeDollarSign,
    MoreHorizontal,
  } from 'lucide-react';
  import '../../profileComponent/style/App.css'
  import {Link} from "react-router-dom"
   import Swif from "../../../Asset/IMG-20240129-WA0037.jpg"

  export default function Setmenu() {
    const Menu = [
      {title: "Account Settings", icon:<SquareUserRound size={25}/>, href:"Account"},
      {title: "Personal Information", icon:<UserCheck2Icon size={25}/>, href:"User"},
      {title: "Change Password", icon:<UnlockKeyhole size={25}/>, href:"Password"},
      {title: "Saved Payment Method", icon:<BadgeDollarSign size={25}/>, href:"Payment"},
    ]
    return(
      <>
      <div className='menu-container'>
        <nav className='menu' style={{ width: '435px', height: '413px', border: '1px groove', marginLeft:'-20px', top:'172px'}}>
          <div className='menu-set'>
          <img
                className="  menu-avatar"
                src={Swif}
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
      </div>
  </>
  )
  }
  
  