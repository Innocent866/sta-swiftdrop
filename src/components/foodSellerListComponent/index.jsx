/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import React Router Link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// import { useSelector } from 'react-redux'; 
import "./style.css"

export default function FoodSellListComponent() {
    const [query, setQuery] = useState(''); // Use React state for query
    const [perPage, setPerPage] = useState(10); // Use React state for perPage
    const [pagination] = useState(null); // Use React state for pagination
    const [loading] = useState(false);


    

    useEffect(() => {
        
    }, []);
    
    

    const updatePerPage = (event) => {
        const newPerPage = parseInt(event.target.value, 10);
        setPerPage(newPerPage);
        // Implement logic to update pagination and fetch data for the new perPage value
    };

    // const items = useSelector((state) => state.items);
    // const loading = useSelector((state) => state.loading);

    const handleFeatureChange = (id) => {
        // Update the feature status in your data
        setTableData((prevData) =>
          prevData.map((row) =>
            row.id === id ? { ...row, featured: !row.featured } : row
          )
        );
    };
    const renderStarIcons = (rating) => {
        const starColor = rating >= 4 ? 'gold' : 'gray'; // Adjust color logic as needed
        const stars = Array.from({ length: rating }, (_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} color={starColor} />
        ));
        return stars;
      };
    


    

    const [tableData,, setTableData] = useState([
        // Your initial data goes here
        { id: 1, seller_name: 'Cafe “Trattoria”', seller_address: '02111., 35, Licoln ave. Boston, USA', balance: 100, total_sold: 50, withdraw: 20, rating: 3,  status: 1, slug: 'Cafe “Trattoria”' },
        { id: 2, seller_name: 'Cafe “Starbucks”', seller_address: '02111., 35, Licoln ave. Boston, USA', balance: 150, total_sold: 30, withdraw: 10, rating: 5,  status: 0, slug: 'Cafe “Starbucks”' },
        { id: 3, seller_name: 'Restaurant “Prince Charles”', seller_address: '02111., 35, Licoln ave. Boston, USA', balance: 100, total_sold: 50, withdraw: 20, rating: 4,  status: 2, slug: 'Restaurant “Prince Charles”' },
        { id: 4, seller_name: 'Restaurant “Ukraine”', seller_address: '02111., 35, Licoln ave. Boston, USA', balance: 150, total_sold: 30, withdraw: 10, rating: 4,  status: 0, slug: 'Restaurant “Ukraine”' },
        // Add more rows as needed
      ]);

    return (
        <>
            <div>
            
                <div className="row">
                <div className="col-lg-12">
                    <div className="card custom-card w-100">
                    <div className="card-body position-relative">
                        <div className="row">
                        <div className="col-6 col-xl-7 mb-2">
                            
                        </div>
                        <div className="col-6 col-xl-5 mb-2 text-right">
                            {/* Use React's input element and controlled component pattern for the search input */}
                            <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search"
                            className="form-control"
                            />
                            
                        </div>
                        </div>
                        {/* Use React's conditional rendering for the loading indicator */}
                        {loading && <div className="table-loading">Loading...</div>}
                        <div className="table-responsive index table-custom mt-3" id="printMe">
                        <table className="table">
      <thead>
        <tr>
          <th className='text-center'>ID</th>
          <th className='text-center'>SELLER NAME</th>
          <th className='text-center'>BALANCE</th>
          <th className='text-center'>TOTAL SOLD</th>
          <th className='text-center'>WITHDRAW</th>
          <th className='text-center'>RATING</th>
          <th className='text-center'>FEATURED</th>
          <th className='text-center'>STATUS</th>
          <th className="text-right no-print">ACTION</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, i) => (
          <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : 'white', border: '1px solid #ddd' }}>
            <td className='text-center'>{i + 1}</td>
            <td style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: "700", fontSize: "13px" }}>{data.seller_name}</span>
            <span style={{ fontSize: "13px" }}>{data.seller_address}</span>
            </td>

            <td className='text-center'>{data.balance}</td>
            <td className='text-center'>{data.total_sold}</td>
            <td className='text-center'>{data.withdraw}</td>
            <td className='text-center'>{renderStarIcons(data.rating)}</td>
            <td className='text-center'>
                {/* Render checkbox for FEATURED */}
                <input
                    style={{ cursor: "pointer"}}
                  type="checkbox"
                  checked={data.featured}
                  onChange={() => handleFeatureChange(data.id)}
                />
            </td>
            <td className='text-center'> 
                {data.status === 1 ? (
                    <span className="badge bg-success">active</span>
                ) : data.status === 0 ? (
                    <span className="badge bg-danger">inactive</span>
                ) : data.status === 2 ? (
                    <span className="badge custom-bg-pending">pending</span>
                ) : (
                    <span className="badge bg-danger">suspended</span>
                )}
            </td>
            <td className="text-right no-print">
              <div className="btn-group">
                <Link data-toggle="tooltip" data-placement="top" title="View" to={`/food-seller-list/${data.slug}`} className="btn btn-primary btn-sm">
                <span>👁️</span>

                </Link>
                <Link to={`clients.edit/${data.slug}`} className="btn btn-info btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.82362 11.7455H1.99792V9.1225L9.61325 2.0536C9.87331 1.81227 10.2949 1.81227 10.5549 2.0536L12.4389 3.80243C12.6989 4.04383 12.6989 4.43514 12.4389 4.67654L4.82362 11.7455ZM4.27153 10.5091L11.0258 4.23949L10.0841 3.36538L3.32986 9.63498V10.5091H4.27153ZM13.9853 12.9818H1.99792V14.2182H13.9853V12.9818Z" fill="white"/>
                    </svg>
                </Link>
                <button
                  onClick={() => deleteData(data.slug)}
                  className="btn btn-danger btn-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.3223 4.32727H14.6524V5.56364H13.3203V13.6C13.3203 13.9414 13.0221 14.2182 12.6543 14.2182H3.33008C2.96225 14.2182 2.66406 13.9414 2.66406 13.6V5.56364H1.33203V4.32727H4.66211V2.47273C4.66211 2.13131 4.9603 1.85454 5.32813 1.85454H10.6563C11.0241 1.85454 11.3223 2.13131 11.3223 2.47273V4.32727ZM11.9883 5.56364H3.9961V12.9818H11.9883V5.56364ZM7.32618 7.41818H5.99414V11.1273H7.32618V7.41818ZM8.65821 7.41818H9.99024V11.1273H8.65821V7.41818ZM5.99414 4.32727V3.09091H9.99024V4.32727H5.99414Z" fill="white"/>
                </svg>
                </button>
              </div>
            </td>
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
                            <label className='px-2'>Per Page </label>
                            <div>
                            {/* Use React's select element and controlled component pattern for perPage */}
                            <select
                                onChange={updatePerPage}
                                value={perPage}
                                className="form-control form-control-sm ml-1"
                            >
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                            </div>
                        </div>
                        {/* Pagination component */}
                        {pagination && pagination.last_page > 1 && (
                            <div className="justify-flex-end">
                            {/* Implement the pagination component with appropriate props */}
                            </div>
                        )}
                        </div>
                    </div>
                    </div>
                </div>
                </div>

            </div>
            
        </>

    )

}
