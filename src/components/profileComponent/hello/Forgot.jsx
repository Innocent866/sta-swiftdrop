import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const forgotPassword = async (email) => {
    try {
      const response = await fetch("https://swifdropp.onrender.com/api/v1/company/forgotpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
      } else {
        console.error("Error sending password reset email:", data.message);
        // You can handle the error as needed, e.g., show an error message to the user
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle other errors if necessary
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await forgotPassword(email);
  };

  return (
    <>
      <main className="container vh-50 d-flex flex-column  my-3">
        <div className="">
          <h2 className="fs-3 fw-bold my-4 text-center w-75 m-auto">
            Forgot Password?
          </h2>
          <p className="text-center">Let's help you recover your password</p>
          {!isSuccess && (
            <Form className="w-75 m-auto" onSubmit={handleFormSubmit}>
              <Form.Label className="fs-6 text-secondary">Email </Form.Label>

              <FloatingLabel
                controlId="floatingInput"
                label="example@mail.com"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  className="border border-3 rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FloatingLabel>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-success px-5 py-2 text-white my-3"
                >
                  Reset Password
                </button>
              </div>
            </Form>
          )}
          {isSuccess && (
            <p className="text-center">Reset Instruction Sent Successfully</p>
          )}
        </div>
      </main>
    </>
  );
};

export default ForgotPassword;