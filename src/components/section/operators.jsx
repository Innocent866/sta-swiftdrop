import { Link } from "react-router-dom";
import OperatorsComponent from "../operatorsComponent/hello";
export default function operatorsSection() {

    return (

        <>

            <div className="height">
                <div className="breadcrumb-flex">

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb  pt-2 rounded-3">
                            <li className="breadcrumb-item"><a href="#"  className="text-dark text-decoration-none">Application</a></li>
                            <li className="breadcrumb-item"><a href="#"  className="text-dark text-decoration-none">Users</a></li>
                            <li className="breadcrumb-item active" aria-current="page"><Link to="/operators" className="text-decoration-none" style={{ color: "#F8B602" }}>Operators</Link></li>
                        </ol>
                    </nav>
                </div>
                <div>

                    <OperatorsComponent/>
                </div>
            </div>

        </>

    )

}