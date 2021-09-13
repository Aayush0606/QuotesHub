import React, { useContext } from "react";
import QuotesContext from "../context/QuotesContext";
import { useLocation } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

export default function QuoteCard({ anime, character, quote }) {
  const context = useContext(QuotesContext);
  const { addQuote, delQuote } = context;
  const location = useLocation();
  const addArea = () => {
    const quoteToAdd = { anime, quote, character };
    addQuote(quoteToAdd);
  };
  const delArea = () => {
    const quoteToDel = { quote };
    delQuote(quoteToDel);
  };
  return (
    <>
      <div className="container">
        <div className="card border-success my-3 mb-3">
          <div className="d-flex justify-content-end position-absolute end-0">
            <span
              className={`badge rounded-pill bg-${
                location.pathname === "/saved" ? "danger" : "success"
              }`}
            >
              <button
                style={{ background: "transparent", border: "none" }}
                onClick={location.pathname === "/saved" ? delArea : addArea}
              >
                {location.pathname === "/saved" ? (
                  <TiDelete className="AddCutBtn" />
                ) : (
                  <FaPlusCircle className="AddCutBtn" />
                )}
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
