/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import RightSideBar from '../dashboardComponent/bar/RightSideBar';
import Hello from "../dashboardComponent/bar/hello";
export default function newDashboardSection() {

    return (

        <>

            <div className="height">
                <div className="breadcrumb-flex">

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb  pt-2 rounded-3">
                            <li className="breadcrumb-item"><a href="#"  className="text-dark text-decoration-none">Application</a></li>
                            
                            <li className="breadcrumb-item active" aria-current="page"><Link to="/" className="text-decoration-none" style={{ color: "#F8B602" }}>Dashboard</Link></li>
                        </ol>
                    </nav>
                </div>
                <div className='py-2'>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '1rem',
                        }}>
                        {/* <GoogleMapComponent /> */}
                        <RightSideBar />
                        <Hello/>
                    </div>
                </div>     
            </div>

        </>

    )

}