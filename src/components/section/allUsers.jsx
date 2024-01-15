import { Link } from "react-router-dom";
import AllUserComponent from "../allUserComponent/hello"
export default function allUserSection() {

    return (

        <>

            <div className="height">
                <div className="breadcrumb-flex">

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb  pt-2 rounded-3">
                            <li className="breadcrumb-item"><a href="#"  className="text-dark text-decoration-none">Application</a></li>
                            <li className="breadcrumb-item"><a href="#"  className="text-dark text-decoration-none">Users</a></li>
                            <li className="breadcrumb-item active" aria-current="page"><Link to="/all-user" className="text-decoration-none" style={{ color: "#F8B602" }}>All Users</Link></li>
                        </ol>
                    </nav>
                </div>
                <div>
                    <AllUserComponent/>
                </div>
            </div>

        </>

    )

}