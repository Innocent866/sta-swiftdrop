import {
    UtensilsCrossedIcon,
    ThumbsUp,
    Percent,
  } from 'lucide-react';
  import '../../components/profileComponent/style/App.css'
  import {Link} from "react-router-dom"

export default function FoodSettingComponent() {
    const Menu = [
        {title: "Food Categories/Add Categories", icon:<UtensilsCrossedIcon size={25}/>, href:"SetMenu"},
        {title: "Review Settings", icon:<ThumbsUp size={25}/>, href:"Review"},
        {title: "Resturant fee", icon:<Percent size={25}/>, href:"Percent"},
      ] 

    return(
        <>
        <div className='menu-container'>
          <nav className='menu' style={{ width: '400px', height: '200px', border: '1px groove', marginLeft:'-20px'}}>
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