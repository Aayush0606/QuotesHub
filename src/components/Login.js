import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

export default function Login() {
  document.title = "Login QuotesHub";
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  let history = useHistory();
  const handleSignUp = async () => {
    const url = `http://localhost:8000/api/auth/login`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pass, email }),
    });
    // eslint-disable-next-line
    const results = await response.json();
    if (results.success) {
      console.log(results.authToken);
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
            handleSignUp();
          }}
        >
          <div className="text-center">
            <h1>Login</h1>
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
          <div className="text-end">
            <Link to="/signup">SignUp</Link>
          </div>
          <div className="text-center">
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
