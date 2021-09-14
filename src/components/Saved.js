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
    fetchQuotes();
    setLoading(false);
  }, []);
  return (
    <>
      <div className="container my-1">
        <h1 className="text-center">Saved Quotes</h1>
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
