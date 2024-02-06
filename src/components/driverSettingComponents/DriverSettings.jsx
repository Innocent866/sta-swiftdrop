import React from 'react';
import './settingscss/styles.css';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { Container, Form, Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

// tabs component
import DeliveryFee from './tab1/DeliveryFee';
import ManageLocation from './tab2/ManageLocation';
import ManageRegion from './tab3/ManageRegion';
import VehicleTypes from './tab4/VehicleTypes';
import FailureManagement from './tab5/FailureManagement';
import ReceiptManage from './tab6/ReceiptManage';

const DriverSettings = () => {
  return (
    <div className="main">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first ">
        <div className="tab">
          <div className="main-lefttab">
            <div className="lefttab">
              <Col sm={14}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Delivery Fee</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second" className="custom-active-link">
                      Manage General City Location
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third" className="custom-active-link">
                      Manage city's(Region) Location
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth" className="custom-active-link">
                      Vehicle Types
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth" className="custom-active-link">
                      Failure Management
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="sixth" className="custom-active-link">
                      Recipient Management
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </div>
            <div className="admin-form">
              <h6 className=" text-align-center">
                Admins' Alerts Submission Form
              </h6>
              <hr />
              <Form style={{ width: '300px' }} className="form mx-auto">
                <Form.Group className="mb-3 " style={{}}>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    placeholder="Company Identification Number"
                    className="text"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Comment</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Your Account is on Pending add your company identification number as soon as you can "
                    className="text"
                  />
                </Form.Group>
                <div className="d-flex justify-content-end mt-4">
                  <button type="submit" className="submit2">
                    SUBMIT
                  </button>
                </div>
              </Form>
            </div>
            <div className="drop-down">
              <h6>Admins' Review Status</h6>
              <hr />
              <Form action="">
                <Form.Label>Review Status</Form.Label>
                <Form.Select aria-label="d">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <div className="d-flex justify-content-end mt-4">
                  <button type="submit" className="save">
                    SAVE
                  </button>
                </div>
              </Form>
            </div>
          </div>

          <div className="righttab">
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <DeliveryFee />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <ManageLocation />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <ManageRegion />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <VehicleTypes />
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <FailureManagement />
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  <ReceiptManage />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </div>
        </div>
      </Tab.Container>
    </div>
  );
};
export default DriverSettings;
