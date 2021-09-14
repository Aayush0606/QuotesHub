import { Link, useLocation, useHistory } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const history = useHistory();
  return (
    <div style={{ marginBottom: "6rem" }}>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to={localStorage.getItem("auth-token") ? "/" : "/signup"}
          >
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/anime" ? "active" : ""
                  }`}
                  aria-current="page"
                  to={localStorage.getItem("auth-token") ? "/anime" : "/signup"}
                >
                  Anime
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/character" ? "active" : ""
                  }`}
                  aria-current="page"
                  to={
                    localStorage.getItem("auth-token")
                      ? "/character"
                      : "/signup"
                  }
                >
                  Character
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/saved" ? "active" : ""
                  }`}
                  aria-current="page"
                  to={localStorage.getItem("auth-token") ? "/saved" : "/signup"}
                >
                  Saved
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/chat" ? "active" : ""
                  }`}
                  aria-current="page"
                  to={localStorage.getItem("auth-token") ? "/chat" : "/signup"}
                >
                  Chat
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  aria-current="page"
                  to={localStorage.getItem("auth-token") ? "/about" : "/signup"}
                >
                  About
                </Link>
              </li>
            </ul>
            {!localStorage.getItem("auth-token") ? (
              <div className="d-flex">
                <Link to="/login" className="btn btn-primary mx-2">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-primary mx-2">
                  SignUp
                </Link>
              </div>
            ) : (
              <div className="d-flex">
                <button
                  className="btn btn-primary mx-2"
                  onClick={() => {
                    localStorage.removeItem("auth-token");
                    history.push("/login");
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
