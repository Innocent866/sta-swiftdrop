import React from 'react';
// import { faTh } from '@fortawesome/free-solid-svg-icons';
import { FaBeer } from 'react-icons/fa';

import { NavLink } from 'react-router-dom';

const DriverSettings = (props) => {
  const menuItem = [
    {
      path: '/',
      name: 'DeliveryFee',
      icon: FaBeer,
    },
    {
      path: '/managelocation',
      name: 'ManageLocation',
      icon: FaBeer,
    },
    {
      path: '/manageregion',
      name: 'ManageRegion',
      icon: FaBeer,
    },
    {
      path: '/vehicletypes',
      name: 'VehicleTypes',
      icon: FaBeer,
    },
    {
      path: '/failuremanagement',
      name: 'FailureManagement',
      icon: FaBeer,
    },
    {
      path: '/receiptmanage',
      name: 'ReceiptManage',
      icon: FaBeer,
    },
  ];

  return (
    <div className="container">
      <div className="sidebar">
        <div className="top_section">
          <div className="bars">
            <FaBeer />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{props.children}</main>
    </div>
  );
};

export default DriverSettings;
