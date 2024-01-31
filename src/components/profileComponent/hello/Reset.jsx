import React, { useEffect, useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
   

  return (
    <>
      <main className="container vh-50 d-flex flex-column  my-3">
        <div className="">
          <h2 className="fs-3 fw-bold my-4 text-center w-75 m-auto">
            Forgot Password?
          </h2>
          <p className="text-center">Let's help you recover your password</p>

          <Form className="w-75 m-auto" onSubmit={forgotPasswordHandler}>
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
                value={password}
                onChange={(val) => setPassword(val.toLocaleString())}
              />
            </FloatingLabel>

            <div className="text-center">
              <button className="btn btn-success px-5 py-2 text-white my-3" onClick={() => {}}>
                Reset Password
              </button>
            </div>
          </Form>
        </div>
      </main>
    </>
  );
};

export default ResetPassword;