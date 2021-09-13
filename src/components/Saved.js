import React, { useState, useContext, useEffect } from "react";
import QuotesContext from "../context/QuotesContext";
import QuoteCard from "./QuoteCard";
import Loading from "./Loading";

export default function Saved() {
  const context = useContext(QuotesContext);
  // eslint-disable-next-line
  const { Quotes, setQuotes, fetchQuotes } = context;
  document.title = `Saved Quotes`;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // eslint-disable-next-line
    let fetching = fetchQuotes();
    setLoading(false);
  }, [fetchQuotes]);
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
