import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DeliveryFee from './tab1/DeliveryFee';
import FailureManagement from './tab5/FailureManagement';
import ManageLocation from './tab2/ManageLocation';
import ManageRegion from './tab3/ManageRegion';
import VehicleTypes from './tab4/VehicleTypes';
import FailureManagement from './tab5/FailureManagement';
import ReceiptManage from './tab6/ReceiptManage';
import DriverSettings from './DriverSettings';

const Index = () => {
  return (
    <BrowserRouter>
      <DriverSettings>
        <Routes>
          <Route path="/" element={<DeliveryFee />} />
          <Route path="/deliveryfee" element={<DeliveryFee />} />
          <Route path="/managelocation" element={<ManageLocation />} />
          <Route path="/manageregion" element={<ManageRegion />} />
          <Route path="/vehicletypes" element={<VehicleTypes />} />
          <Route path="/failuremanagement" element={<FailureManagement />} />
          <Route path="/receiptmanage" element={<ReceiptManage />} />
        </Routes>
      </DriverSettings>
    </BrowserRouter>
  );
};

export default Index;
