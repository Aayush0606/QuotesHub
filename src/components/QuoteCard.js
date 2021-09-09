import React from "react";
import { FaPlusCircle } from "react-icons/fa";

export default function QuoteCard({ anime, character, quote }) {
  return (
    <>
      <div className="container">
        <div className="card border-success my-3 mb-3">
          <div className="d-flex justify-content-end position-absolute end-0">
            <span className="badge rounded-pill bg-success">
              <button style={{ background: "transparent", border: "none" }}>
                {" "}
                <FaPlusCircle className="AddCutBtn" />
              </button>
            </span>
          </div>

          <div className="card-header bg-transparent border-success">
            <h3 className="text-center">{anime}</h3>
          </div>
          <div className="card-body text-success">
            <h5 className="card-title text-center">{quote}</h5>
          </div>
          <div className="card-footer bg-transparent border-success">
            <p className="text-end text-muted">{character}</p>
          </div>
        </div>
      </div>
    </>
  );
}
