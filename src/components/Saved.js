import React, { useState, useContext } from "react";
import { TiDelete } from "react-icons/ti";
import QuotesContext from "../context/QuotesContext";
import QuoteCard from "./QuoteCard";
import Loading from "./Loading";

export default function Saved() {
  const context = useContext(QuotesContext);
  const { Quotes, setQuotes } = context;
  document.title = `Saved Quotes`;
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="container my-3">
        <h1 className="text-center">Saves Quotes</h1>
        {loading && <Loading />}
        {Quotes.map((elem) => {
          return (
            <QuoteCard
              key={elem.quote}
              anime={elem.anime}
              character={elem.character}
              quote={elem.quote}
            />
          );
        })}
      </div>
    </>
  );
}

// <div className="container my-4">
//         <h2 className="text-center">Your Quotes</h2>
//         <div className="card border-success my-3 mb-3">
//           <div className="d-flex justify-content-end position-absolute end-0">
//             <span className="badge rounded-pill bg-danger">
//               <button style={{ background: "transparent", border: "none" }}>
//                 {" "}
//                 <TiDelete className="AddCutBtn" />
//               </button>
//             </span>
//           </div>
//           <div className="card-header bg-transparent border-success">
//             <h3 className="text-center">Naruto</h3>
//           </div>
//           <div className="card-body text-success">
//             <h5 className="card-title text-center">LOL</h5>
//           </div>
//           <div className="card-footer bg-transparent border-success">
//             <p className="text-end text-muted">Itachi</p>
//           </div>
//         </div>
//       </div>
