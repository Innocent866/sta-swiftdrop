import { Link } from "react-router-dom";
import FoodSettingComponent from "../foodSettingComponent/hello";
import Percent from "../foodSettingComponent/percent"
import Foodmenu from "../foodSettingComponent/foodMenu"
import AddEdit from "../foodSettingComponent/addEdit"
import SetMenu from "../foodSettingComponent/SetMenu"
import Review from "../foodSettingComponent/Review"
import { Route, Routes} from "react-router-dom"
export default function SettingSection() {

    return (

        <>

            <div className="height">
                <div className="breadcrumb-flex"> 
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb  pt-2 rounded-3">
                            <li className="breadcrumb-item"><a href="#"  className="text-dark text-decoration-none">Application</a></li>
                            <li className="breadcrumb-item"><a href="#"  className="text-dark text-decoration-none">Food Seller</a></li>
                            <li className="breadcrumb-item active" aria-current="page"><Link to="/food-settings" className="text-decoration-none" style={{ color: "#F8B602" }}>Setting</Link></li>
                        </ol>
                    </nav>
                </div>
                <div className="py-2">
                <div className="flex">
                <div className="main">
                    <FoodSettingComponent/>
                    <Routes>
                        <Route path="Foodmenu" element={ <Foodmenu/>}/>
                        <Route path="AddEdit" element={ <AddEdit/>}/>
                        <Route path="Percent" element={ <Percent/>}/>
                        <Route path="Review" element={ <Review/>}/>
                        <Route path="SetMenu" element={ <SetMenu/>}/>
                    </Routes>
                    </div>
                    </div>
                </div>
            </div>
        </>

    )

}