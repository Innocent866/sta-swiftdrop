import React, { useEffect, useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
// import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();

    const logInData = {
      email
    };

    try {
      const response = await fetch("https://swifdropp.onrender.com/api/v1/company/forgotpassword", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(logInData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(responseData);

      if (responseData.success === true) {
        setSuccess("Email sent successfully");
        setError(""); // Clear any previous error
        setFormSubmitted(true);
      } else {
        setError(responseData.message);
        setSuccess(""); // Clear any previous success message
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while trying to reset the password.");
      setSuccess(""); // Clear any previous success message
    }
  };

  useEffect(() => {
    document.title = "forgot-password | Page";
  }, []);

  return (
    <>
      <main className="container vh-50 d-flex flex-column  my-3">
        <div className="">
          <h2 className="fs-3 fw-bold my-4 text-center w-200 m-auto">
            Forgot Password?
          </h2>
          {formSubmitted ? (
            <span className="text-success">{success}</span>
          ) : (
            <>
              <p className="text-center">Let's help you recover your password</p>

              <Form className="w-90 m-auto" onSubmit={forgotPasswordHandler}>
                <Form.Label className="fs-6 text-secondary">Email </Form.Label>

                <FloatingLabel
                  controlId="floatingInput"
                  label="example@mail.com"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    className="border border-3 rounded w-100"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FloatingLabel>
                {error && <span className="text-danger fst-italic">{error}</span>}

                <div className="text-center">
                  <button className="btn btn-success px-5 py-2 text-white my-3">
                    Reset Password
                  </button>
                </div>
              </Form>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default ForgotPassword;
