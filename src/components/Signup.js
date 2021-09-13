import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function Signup() {
  document.title = "Signup QuotesHub";
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [name, setName] = useState("");
  let history = useHistory();
  const handleSignup = async () => {
    if (pass !== confirmPass) {
      alert("Confirm Pass and Pass should be same");
      return;
    }
    const url = `http://localhost:8000/api/auth/signup`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, pass, email }),
    });
    // eslint-disable-next-line
    const results = await response.json();
    if (results.success) {
      localStorage.setItem("auth-token", results.authToken);
      history.push("/");
    } else {
      alert("Failed");
    }
  };
  return (
    <div className="container">
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignup();
          }}
        >
          <div className="text-center">
            <h1>SignUp</h1>
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              required
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              required
              minLength={5}
              type="password"
              className="form-control"
              id="password"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              required
              minLength={5}
              type="password"
              className="form-control"
              id="confirmPassword"
              value={confirmPass}
              onChange={(e) => {
                setConfirmPass(e.target.value);
              }}
            />
          </div>
          <div className="text-end">
            <Link to="/login">Login</Link>
          </div>
          <div className="text-center">
            <button className="btn btn-primary" type="submit">
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
