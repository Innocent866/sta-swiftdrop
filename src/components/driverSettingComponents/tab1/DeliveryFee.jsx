import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const DeliveryFee = () => {
  return (
    <div className="delivery">
      <p>Delivery Fee</p>
      <hr />
      <form action="" method="get">
        <Form.Group>
          <Form.Label className="">Delivery Fee Type</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Distance Based Fee</option>
            <option value="1">Distance Based Fee</option>
            <option value="2">Distance Based Fee</option>
            <option value="3">Distance Based Fee</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label className="mt-2">Pickup Fare</Form.Label>
          <InputGroup className="mb-3 ">
            <InputGroup.Text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.675 22C7.152 22 2.675 17.523 2.675 12C2.675 6.477 7.152 2 12.675 2C18.198 2 22.675 6.477 22.675 12C22.675 17.523 18.198 22 12.675 22ZM12.675 20C17.0933 20 20.675 16.4183 20.675 12C20.675 7.58172 17.0933 4 12.675 4C8.25672 4 4.675 7.58172 4.675 12C4.675 16.4183 8.25672 20 12.675 20ZM14.675 14H9.175V16H11.675V18H13.675V16H14.675C16.0557 16 17.175 14.8807 17.175 13.5C17.175 12.1193 16.0557 11 14.675 11H10.675C10.3989 11 10.175 10.7761 10.175 10.5C10.175 10.2239 10.3989 10 10.675 10H16.175V8H13.675V6H11.675V8H10.675C9.29429 8 8.175 9.11929 8.175 10.5C8.175 11.8807 9.29429 13 10.675 13H14.675C14.9511 13 15.175 13.2239 15.175 13.5C15.175 13.7761 14.9511 14 14.675 14Z"
                  fill="black"
                />
              </svg>
            </InputGroup.Text>
            <Form.Control
              aria-label="Amount (to the nearest dollar)"
              className="input"
              placeholder="1.00"
            />
            {/* <InputGroup.Text>.00</InputGroup.Text> */}
          </InputGroup>
        </Form.Group>
        <Form.Group>
          <Form.Label className="">Drop Fare</Form.Label>
          <InputGroup className="mb-3 ">
            <InputGroup.Text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.675 22C7.152 22 2.675 17.523 2.675 12C2.675 6.477 7.152 2 12.675 2C18.198 2 22.675 6.477 22.675 12C22.675 17.523 18.198 22 12.675 22ZM12.675 20C17.0933 20 20.675 16.4183 20.675 12C20.675 7.58172 17.0933 4 12.675 4C8.25672 4 4.675 7.58172 4.675 12C4.675 16.4183 8.25672 20 12.675 20ZM14.675 14H9.175V16H11.675V18H13.675V16H14.675C16.0557 16 17.175 14.8807 17.175 13.5C17.175 12.1193 16.0557 11 14.675 11H10.675C10.3989 11 10.175 10.7761 10.175 10.5C10.175 10.2239 10.3989 10 10.675 10H16.175V8H13.675V6H11.675V8H10.675C9.29429 8 8.175 9.11929 8.175 10.5C8.175 11.8807 9.29429 13 10.675 13H14.675C14.9511 13 15.175 13.2239 15.175 13.5C15.175 13.7761 14.9511 14 14.675 14Z"
                  fill="black"
                />
              </svg>
            </InputGroup.Text>
            <Form.Control
              aria-label="Amount (to the nearest dollar)"
              className="input"
              placeholder="1.00"
            />
            {/* <InputGroup.Text>.00</InputGroup.Text> */}
          </InputGroup>
        </Form.Group>
        <Form.Group>
          <Form.Label className="">Distance Unit</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Km(Kilometer)</option>
            <option value="1">Km(Kilometer)</option>
            <option value="2">Km(Kilometer)</option>
            <option value="3">Km(Kilometer)</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label className="mt-2">Delivery Fee Type</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Distance Based Fee</option>
            <option value="1">Distance Based Fee</option>
            <option value="2">Distance Based Fee</option>
            <option value="3">Distance Based Fee</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label className="mt-2">Distance Fee</Form.Label>
          <InputGroup className="mb-3 ">
            <InputGroup.Text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.675 22C7.152 22 2.675 17.523 2.675 12C2.675 6.477 7.152 2 12.675 2C18.198 2 22.675 6.477 22.675 12C22.675 17.523 18.198 22 12.675 22ZM12.675 20C17.0933 20 20.675 16.4183 20.675 12C20.675 7.58172 17.0933 4 12.675 4C8.25672 4 4.675 7.58172 4.675 12C4.675 16.4183 8.25672 20 12.675 20ZM14.675 14H9.175V16H11.675V18H13.675V16H14.675C16.0557 16 17.175 14.8807 17.175 13.5C17.175 12.1193 16.0557 11 14.675 11H10.675C10.3989 11 10.175 10.7761 10.175 10.5C10.175 10.2239 10.3989 10 10.675 10H16.175V8H13.675V6H11.675V8H10.675C9.29429 8 8.175 9.11929 8.175 10.5C8.175 11.8807 9.29429 13 10.675 13H14.675C14.9511 13 15.175 13.2239 15.175 13.5C15.175 13.7761 14.9511 14 14.675 14Z"
                  fill="black"
                />
              </svg>
            </InputGroup.Text>
            <Form.Control
              aria-label="Amount (to the nearest dollar)"
              className="input"
              placeholder="1.00"
            />
            {/* <InputGroup.Text>.00</InputGroup.Text> */}
          </InputGroup>
        </Form.Group>
        <Form.Group>
          <Form.Label className="">Delivery Fee Type</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Distance Based Fee</option>
            <option value="1">Distance Based Fee</option>
            <option value="2">Distance Based Fee</option>
            <option value="3">Distance Based Fee</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label className="mt-2">Booking Fee</Form.Label>
          <InputGroup className="mb-3 ">
            <InputGroup.Text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.675 22C7.152 22 2.675 17.523 2.675 12C2.675 6.477 7.152 2 12.675 2C18.198 2 22.675 6.477 22.675 12C22.675 17.523 18.198 22 12.675 22ZM12.675 20C17.0933 20 20.675 16.4183 20.675 12C20.675 7.58172 17.0933 4 12.675 4C8.25672 4 4.675 7.58172 4.675 12C4.675 16.4183 8.25672 20 12.675 20ZM14.675 14H9.175V16H11.675V18H13.675V16H14.675C16.0557 16 17.175 14.8807 17.175 13.5C17.175 12.1193 16.0557 11 14.675 11H10.675C10.3989 11 10.175 10.7761 10.175 10.5C10.175 10.2239 10.3989 10 10.675 10H16.175V8H13.675V6H11.675V8H10.675C9.29429 8 8.175 9.11929 8.175 10.5C8.175 11.8807 9.29429 13 10.675 13H14.675C14.9511 13 15.175 13.2239 15.175 13.5C15.175 13.7761 14.9511 14 14.675 14Z"
                  fill="black"
                />
              </svg>
            </InputGroup.Text>
            <Form.Control
              aria-label="Amount (to the nearest dollar)"
              className="input"
              placeholder="1.00"
            />
            {/* <InputGroup.Text>.00</InputGroup.Text> */}
          </InputGroup>
        </Form.Group>
        <Form.Group>
          <Form.Label>Booking Fee</Form.Label>
          <InputGroup className="mb-3 ">
            <InputGroup.Text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.14391 8.25C4.76913 9.3329 5.92457 10 7.175 10C9.108 10 10.675 8.433 10.675 6.5C10.675 4.567 9.108 3 7.175 3C5.92457 3 4.76913 3.6671 4.14391 4.75C3.5187 5.8329 3.5187 7.1671 4.14391 8.25ZM18.175 21C16.242 21 14.675 19.433 14.675 17.5C14.675 15.567 16.242 14 18.175 14C20.108 14 21.675 15.567 21.675 17.5C21.675 19.433 20.108 21 18.175 21ZM18.175 19C19.0034 19 19.675 18.3284 19.675 17.5C19.675 16.6716 19.0034 16 18.175 16C17.3466 16 16.675 16.6716 16.675 17.5C16.675 18.3284 17.3466 19 18.175 19ZM7.175 8C8.00343 8 8.675 7.32843 8.675 6.5C8.675 5.67157 8.00343 5 7.175 5C6.34658 5 5.675 5.67157 5.675 6.5C5.675 7.32843 6.34658 8 7.175 8ZM21.16 4.929L19.746 3.515H19.745L4.191 19.071L5.605 20.485L21.16 4.929Z"
                  fill="black"
                />
              </svg>
            </InputGroup.Text>
            <Form.Control
              aria-label="Amount (to the nearest dollar)"
              className="input"
              placeholder="1.00"
            />
            {/* <InputGroup.Text>.00</InputGroup.Text> */}
          </InputGroup>
        </Form.Group>
        <div className="d-flex justify-content-end mt-4">
          <button type="submit" className="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeliveryFee;
