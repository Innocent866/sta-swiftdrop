import React, { useState } from 'react';
import { FaBeer } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './settingscss/styles.css';
import DeliveryFee from './tab1/DeliveryFee';
import ManageLocation from './tab2/ManageLocation';
import ManageRegion from './tab3/ManageRegion';
import VehicleTypes from './tab4/VehicleTypes';
import FailureManagement from './tab5/FailureManagement';
import ReceiptManage from './tab6/ReceiptManage';

const DriverSettings = () => {
  const [selectedTab, setSelectedTab] = useState('DeliveryFee');

  const menuItem = [
    {
      name: 'DeliveryFee',
      component: <DeliveryFee />,
    },
    {
      name: 'ManageLocation',
      component: <ManageLocation />,
    },
    {
      name: 'ManageRegion',
      component: <ManageRegion />,
    },
    {
      name: 'VehicleTypes',
      component: <VehicleTypes />,
    },
    {
      name: 'FailureManagement',
      component: <FailureManagement />,
    },
    {
      name: 'ReceiptManage',
      component: <ReceiptManage />,
    },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <div className="container">
        {menuItem.map((item, index) => (
          <div
            key={index}
            className={`link ${selectedTab === item.name ? 'active' : ''}`}
            onClick={() => setSelectedTab(item.name)}
            style={{
              width: '300px',
              padding: '10px',
              borderRadius: '5px',
              // backgroundColor: 'white',
              height: '50px',
            }} // Adjust padding as needed
          >
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
              <li>
                <div className="link_text">{item.name}</div>
              </li>
            </ul>
          </div>
        ))}
      </div>
      <main>
        {menuItem.find((item) => item.name === selectedTab)?.component}
      </main>
    </div>
  );
};

export default DriverSettings;
