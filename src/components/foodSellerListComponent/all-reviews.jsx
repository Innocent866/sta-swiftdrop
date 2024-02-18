import FoodSellListSidebar from "./foodSellListSidebar";
import { useState } from 'react';

import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';


export default function AllReviewsComponent() {
    



    

    useEffect(() => {
        
    }, []);
    
    
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 2;
   
    
    const [tableData] = useState([
        {
        id: '34ER',
        image: '/public/review-prof.png',
        fullName: 'Tikka Masala',
        phone: "+1 (366) 345-34556",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor felis tellus.",
        rating: 4,
        date: "23.04.22",
        invoice: "HGF23F5F",
        },
        {
        id: '24ER',
        image: '/public/review-prof.png',
        fullName: 'Tikka Masala',
        phone: "+1 (366) 345-34556",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor felis tellus.",
        rating: 4,
        date: "23.04.22",
        invoice: "HGF23F5F",
        },
        {
            id: '35ER',
            image: '/public/review-prof.png',
            fullName: 'Tikka Masala',
            phone: "+1 (366) 345-34556",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor felis tellus.",
            rating: 4,
            date: "23.04.22",
            invoice: "HGF23F5F",
            },
        // Add more rows as needed
    ]);
    //const [currentPage, setCurrentPage] = useState(1);
    //const perPage = 5; 
    // const renderStarIcons = (rating) => {
    //     const starColor = rating >= 4 ? 'gold' : 'gray'; // Adjust color logic as needed
    //     const stars = Array.from({ length: rating }, (_, index) => (
    //     <FontAwesomeIcon key={index} icon={faStar} color={starColor} />
    //     ));
    //         return stars;
    // };

    const renderStarIcons = (rating) => {
        const starColor = rating >= 4 ? 'gold' : 'gray'; // Adjust color logic as needed
        const stars = Array.from({ length: rating }, (_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} color={starColor} />
        ));
        return stars;
    };

    

    // const deleteData = (id) => {
        
    //     console.log(`Deleting data with ID: ${id}`);
    // };

    const totalItems = tableData.length;
    const totalPages = Math.ceil(totalItems / perPage);
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const currentItems = tableData.slice(startIndex, endIndex);

    const changePage = (page) => {
        setCurrentPage(page);
    };

    const AdminStatusOptions = [
        { value: 'active', label: 'active' },
        { value: 'Inactive', label: 'Inactive' },
        { value: 'suspend', label: 'suspend' },
        { value: 'pending', label: 'pending' },
        
        
    ];
    const [selectedAdminStatus, setSelectedAdminStatus] = useState(null);

    const handleAdminStatusChange = (selectedOption) => {
        setSelectedAdminStatus(selectedOption);
      };


    return (

        <>

            <div>
                   
                <div className="row">
                    <div>
                        <div className="between-flex mb-2">
                            <div className=''>
                                <p>Restaurants’ Profile</p>
                            
                            </div>
                            
                        </div> 
                    </div>
                    <div className="col-12 col-xl-4">
                        <FoodSellListSidebar />
                    </div>
                    <div className="col-12 col-xl-8">
                        <div className="card custom-card w-100 mb-3">
                            <div className="card-body position-relative">
                                <div className="row">                        
                                    <div className="">                                  
                                        <p>All Reviews</p>                                  
                                    </div>
                                    <hr/>
                                </div>
                                
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead className="col-19">
                                            <tr className="">
                                                <th className="col">ID</th>
                                                <th className="col">AVATAR</th>
                                                <th className="col">Full NAME</th>
                                                <th className="col">
                                                    PHONE
                                                </th>
                                                <th className="col">
                                                    REVIEW
                                                </th>
                                                <th className="col">RATING</th>
                                                <th className="col">DATE</th>
                                                <th className="col">INVOICE</th>
                                                
                                            </tr>
                                        </thead>

                                        <tbody>
                                        {currentItems.map((data) => (
                                            <tr key={data.id} className="">
                                            <td className="col">{data.id}</td>
                                            <td className="col">
                                                <img className="img-radius" src={data.image} alt={`Product ${data.id}`} width="50" />
                                            </td>
                                            <td className="col-4">
                                                {data.fullName}
                                            </td>
                                            <td className="col-4">
                                                {data.phone}
                                            </td>
                                            <td className="col-9">
                                                {data.review}
                                            </td>
                                            <td className="col text-center">{renderStarIcons(data.rating)}</td>
                                            
                                            <td className="col">{data.date}</td>

                                            <td className="col">{data.invoice}</td>
                                            
                                            
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                        
                                </div>
                            </div>
                            {/* Card footer with form and pagination components */}
                            <div className="card-footer">
                                <div className="dtable-footer">
                                    <div className="form-group display-per-page d-flex">
                                    
                                        <div>
                                        
                                            <button
                                            className="btn btn-primary"
                                            onClick={() => changePage(currentPage - 1)}
                                            disabled={currentPage === 1}
                                            >
                                            Previous
                                            </button>
                                            <span className="px-2">{`Page ${currentPage} of ${totalPages}`}</span>
                                            <button
                                            className="btn btn-primary py-1"
                                            onClick={() => changePage(currentPage + 1)}
                                            disabled={currentPage === totalPages}
                                            >
                                            Next
                                            </button>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>

                        {/* Red Footer */}

                        <div className="card inner-card bg-danger text-white mb-3">
                            <div className="card-header between-flex">
                            <span>Important Information!</span>
                            <button className="btn btn-white bg-white text-danger">New</button>
                            </div>
                            <div className="card-body">
                            <div className="row">
                                
                                <div className="col-md-12">
                                <span className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum est id eros maximus, tincidunt tempus erat accumsan. Fusce suscipit volutpat libero quis ultricies. Suspendisse ornare laoreet commodo. Ut aliquam magna odio, ut efficitur est tincidunt fringilla. Vestibulum non ante et arcu maximus condimentum id in sapien. Suspendisse consequat elit sed hendrerit convallis. Fusce sit amet elementum elit. Mauris elementum sed dui eu semper.</span>
                                </div>
                            </div>

                            <div className="col-md-12 mt-4 pb-3">
                                <div className="row">

                                <div className="form-group col-md-6">
                                    <button className='btn border-white text-white col-md-6'>Take Action</button>
                                </div>
                                <div className="form-group col-md-6 end-flex">
                                        <button type="submit" className='btn border-white text-white col-md-6'>Dismiss</button>
                                </div>
                                </div>
                            
                            </div>
                            
                            </div>
                        </div>

                        {/* White Footer */}

                        <div className="card inner-card mb-3">
                            <div className="card-header between-flex">
                                <span>Admins’ Review Status</span>
                            
                            </div>
                            <div className="card-body">
                                

                                <div className="col-md-12  pb-3">
                                    <div className="row" style={{}}>

                                    
                                        <div className="form-group col-md-9">
                                            <label htmlFor="statusSelect">Review Status</label>
                                            <Select
                                                value={selectedAdminStatus}
                                                onChange={handleAdminStatusChange}
                                                options={AdminStatusOptions}
                                                placeholder="Select Status"
                                                className="select2-single select2-red"
                                            />
                                        </div>
                                        <div className="form-group col-md-3 mt-4">
                                            
                                            <button type="submit" className='btn btn-yellow border-white text-white col-md-12'>Save</button>
                                        </div>
                                    </div>
                                
                                </div>
                            
                            </div>
                        </div>
                                            
                    </div>
                </div>
                
            </div>
            
        </>

    )

}