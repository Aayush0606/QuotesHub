import React from "react";
import { TiDelete } from "react-icons/ti";
<TiDelete />;
export default function Saved() {
  document.title = `Saved Quotes`;
  return (
    <>
      <div className="container my-4">
        <h2 className="text-center">Your Quotes</h2>
        <div className="card border-success my-3 mb-3">
          <div className="d-flex justify-content-end position-absolute end-0">
            <span className="badge rounded-pill bg-danger">
              <button style={{ background: "transparent", border: "none" }}>
                {" "}
                <TiDelete className="AddCutBtn" />
              </button>
            </span>
          </div>
          <div className="card-header bg-transparent border-success">
            <h3 className="text-center">Naruto</h3>
          </div>
          <div className="card-body text-success">
            <h5 className="card-title text-center">LOL</h5>
          </div>
          <div className="card-footer bg-transparent border-success">
            <p className="text-end text-muted">Itachi</p>
          </div>
        </div>
      </div>
    </>
  );
}
