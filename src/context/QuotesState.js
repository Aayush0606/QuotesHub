import { useState } from "react";
import QuotesContext from "./QuotesContext";

const QuotesState = (props) => {
  const host = `http://localhost:8000`;
  const [Quotes, setQuotes] = useState([]);

  const fetchQuotes = async () => {
    const url = `${host}/api/quotes/getquotes`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzZTE2NDZhOTc2MmNiM2QwMDBiNWNmIn0sImlhdCI6MTYzMTQ1ODg4Nn0.-gb47bdkIoafEBM7N9Aj3VeuFJmkLXwm8_TuzOvtMio",
      },
    });
    const results = await response.json();
    setQuotes(results);
  };

  const addQuote = async (quoteItem) => {
    const { anime, character, quote } = quoteItem;
    const url = `${host}/api/quotes/addquotes`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzZTE2NDZhOTc2MmNiM2QwMDBiNWNmIn0sImlhdCI6MTYzMTQ1ODg4Nn0.-gb47bdkIoafEBM7N9Aj3VeuFJmkLXwm8_TuzOvtMio",
      },
      body: JSON.stringify({ anime, character, quote }),
    });
    // eslint-disable-next-line
    const results = await response.json();
  };

  const delQuote = async (quoteItem) => {
    const { quote } = quoteItem;
    const url = `${host}/api/quotes/deletequotes`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzZTE2NDZhOTc2MmNiM2QwMDBiNWNmIn0sImlhdCI6MTYzMTQ1ODg4Nn0.-gb47bdkIoafEBM7N9Aj3VeuFJmkLXwm8_TuzOvtMio",
      },
      body: JSON.stringify({ quote }),
    });
    // eslint-disable-next-line
    const results = await response.json();
    setQuotes(Quotes.filter((item) => item.quote !== quote));
  };

  return (
    <QuotesContext.Provider
      value={{ Quotes, setQuotes, addQuote, delQuote, fetchQuotes }}
    >
      {props.children}
    </QuotesContext.Provider>
  );
};

export default QuotesState;
