import React from 'react';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const ManageLocation = () => {
  const navigate = useNavigate();
  return (
    <div className="location">
      <p>City Location</p>
      <hr />
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Location Name</th>
            <th>STATUS</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <button className="add-location" onClick={() => navigate}>
        <span>
          <svg
            width="13"
            color="black"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5425 5.95459V7.33398H0.359863V5.95459H12.5425ZM7.13477 0.27832V13.2178H5.66992V0.27832H7.13477Z"
              fill="white"
            />
          </svg>
        </span>
        Add a New City Location
      </button>
    </div>
  );
};

export default ManageLocation;
