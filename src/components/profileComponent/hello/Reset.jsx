import React, { useState } from "react";
import { useParams } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const ResetPassword = () => {
  const { token } = useParams(); // Extracting token from the URL
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const resetPasswordHandler = async () => {
    try {
      const response = await fetch(`https://swifdropp.onrender.com/api/v1/company/resetpassword/${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
      } else {
        console.error("Error resetting password:", data.message);
        // You can handle the error as needed, e.g., show an error message to the user
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle other errors if necessary
    }
  };

  return (
    <>
      <main className="container vh-50 d-flex flex-column my-3">
        <div className="">
          <h2 className="fs-3 fw-bold my-4 text-center w-75 m-auto">
            Reset Password
          </h2>
          {!isSuccess && (
            <>
              <p className="text-center">Enter your new password below:</p>
              <Form className="w-75 m-auto" onSubmit={resetPasswordHandler}>
                <Form.Label className="fs-6 text-secondary">New Password </Form.Label>

                <FloatingLabel
                  controlId="floatingInput"
                  label="New Password"
                  className="mb-3"
                >
                  <Form.Control
                    type="password"
                    placeholder="Enter your new password"
                    className="border border-3 rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
            </>
          )}
          {isSuccess && (
            <p className="text-center">Password reset successfully!</p>
          )}
        </div>
      </main>
    </>
  );
};

export default ResetPassword;