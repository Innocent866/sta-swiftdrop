import React from 'react';
import DeliveryFee from './tab1/DeliveryFee';
import ManageLocation from './tab2/ManageLocation';
import ManageRegion from './tab3/ManageRegion';
import VehicleTypes from './tab4/VehicleTypes';
import FailureManagement from './tab5/FailureManagement';
import ReceiptManage from './tab6/ReceiptManage';

const Render = () => {
  return (
    <div>
      <DeliveryFee />
      <ManageLocation />
      <ManageRegion />
      <VehicleTypes />
      <FailureManagement />
      <ReceiptManage />
    </div>
  );
};

export default Render;
