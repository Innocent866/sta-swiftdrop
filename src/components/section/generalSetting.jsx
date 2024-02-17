import { Link } from "react-router-dom";
import GeneralSettingComponent from "../generalSettingComponent/hello";
import GeneralSettings from "../generalSettingComponent/GeneralSettings";

export default function generalSetting() {
    return (

        <>

            <div className="height">
                
                <div className="breadcrumb-flex">

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb  pt-2 rounded-3">
                            <li className="breadcrumb-item"><a href="#"  className="text-dark text-decoration-none">Application</a></li>
                            
                            <li className="breadcrumb-item active" aria-current="page"><Link to="/general-setting" className="text-decoration-none" style={{ color: "#F8B602" }}>General Setting</Link></li>
                        </ol>
                    </nav>
                </div>
                <div className="py-2">
                <div className="flex">
                <div className="main">
                    <GeneralSettingComponent/>
                    <GeneralSettings/>
                    </div>
                    </div>
                </div>
            </div>
        </>

    )

}