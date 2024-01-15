import { Link } from "react-router-dom";
import AdministratorsComponent from "../administratorComponent/hello/index"
export default function AdministratorSection() {

    return (

        <>

            <div className="height">
                <div className="breadcrumb-flex">

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb  pt-2 rounded-3">
                            <li className="breadcrumb-item"><a href="#"  className="text-dark text-decoration-none">Application</a></li>
                            
                            <li className="breadcrumb-item active" aria-current="page"><Link to="/administrators" className="text-decoration-none" style={{ color: "#F8B602" }}>Administrator</Link></li>
                        </ol>
                    </nav>
                </div>
                <div className="py-2">
                    <AdministratorsComponent/>
                </div>
            </div>

        </>

    )

}