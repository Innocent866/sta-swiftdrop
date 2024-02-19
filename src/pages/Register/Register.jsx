import { useState } from 'react';
import axios from 'axios';
import RegisterImage from '../../Asset/image container.svg';
import star from '../../Asset/star 1.svg';
import profile from '../../Asset/BG.svg';
import {  useNavigate } from "react-router-dom";

export default function Register() {

    const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [state, setState] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassWord] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    // e.preventDefault()

    const bodyPassed = {
      firstname,
      lastname,
      email,
      password,
      phoneNumber,
      token,
      address: {
        zipCode,
        state,
        street,
        city,
      },
    };

    try {
      const data = await fetch(
        "https://swifdropp.onrender.com/api/v1/register-superAdmin",
        { 
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyPassed),
        }
      );
      const response = await data.json();
      console.log(response);
      navigate("/Login");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred while processing your request. Please try again later.");
      }
    }
  };

  return (
    <div className="">
      <div className="mr-100 d-flex justify-content-between gap-5 align-items-center">
        <div style={{ backgroundColor: '#4CAF50', color: '#FFFFFF' }}>
          <div className="p-5">
            <img src={RegisterImage} alt="" className="bg-white rounded-5" />
            <div className="my-5">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <div className="w-75">
              <p>"We love SwifDrop! we've been getting and managing orders seamlessly, It's definitely a restaurant's dream come true"</p>
              <div className="d-flex align-items-center">
                <img src={profile} alt="" />
                <div>
                  <p>Fiyin Oladejo</p>
                  <p>Founder, Tasty Natives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-3">
          <h1 className="my-3 text-center">Become our partner</h1>
          {error && <div className="text-danger text-center">{error}</div>}

           <form action="">
            <div className="d-flex justify-content-between">
              <div className="my-2 me-1">
              <label htmlFor="" className="label">
              FirstName
            </label>
            <input
              type="text"
              placeholder=""
              className="w-100 rounded p-2 mb-3"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="" className="label">
              LastName
            </label>
            <input
              type="text"
              placeholder=""
              className="w-100 rounded p-2 mb-3"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="" className="label">
              Email
            </label>
            <input
              type="text"
              placeholder=""
              className="w-100 rounded p-2 mb-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="" className="label">
              Password
            </label>
            <input
              type="password"
              placeholder=""
              className="w-100 rounded p-2 mb-3"
              value={password}
              onChange={(e) => setPassWord(e.target.value)}
            />
            <label htmlFor="" className="label">
              Phone Number
            </label>
            <input
              type="number"
              placeholder=""
              className="w-100 rounded p-2 mb-3"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            
              </div>


              <div className="my-2 ms-1">
              <label htmlFor="" className="label">
              Secret Code
            </label>
            <input
              type="text"
              placeholder=""
              className="w-100 rounded p-2 mb-3"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
            <label htmlFor="" className="label">
              State
            </label>
            <input
              type="text"
              placeholder=""
              className="w-100 rounded p-2 mb-3"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <label htmlFor="" className="label">
              City
            </label>
            <input
              type="text"
              placeholder=""
              className="w-100 rounded p-2 mb-3"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <label htmlFor="" className="label">
              Street
            </label>
            <input
              type="text"
              placeholder=""
              className="w-100 rounded p-2 mb-3"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
             <label htmlFor="" className="label">
              ZipCode
            </label>
            <input
              type="text"
              placeholder=""
              className="w-100 rounded p-2 mb-3"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />

              </div>
            </div>
          </form>

          
           
            <div className='text-center'>
                <button className="btn btn-success px-5 py-2 text-white my-3" onClick={handleSubmit}>SignUp</button>
                </div>

          <div className="text-center d-flex justify-content-between justify-content-lg-center ">
            <h5> Already have an account?</h5>
          </div>
        </div>
      </div>
    </div>
  );
}