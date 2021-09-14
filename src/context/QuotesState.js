import { useState } from "react";
import QuotesContext from "./QuotesContext";
import dotenv from "dotenv";
dotenv.config();

const QuotesState = (props) => {
  const host = process.env.REACT_APP_SERVER_HOST;
  const [Quotes, setQuotes] = useState([]);

  const fetchQuotes = async () => {
    const url = `${host}/api/quotes/getquotes`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
      });
      const results = await response.json();
      setQuotes(results);
    } catch (error) {
      window.alert("Error in fetching");
    }
  };

  const addQuote = async (quoteItem) => {
    const { anime, character, quote } = quoteItem;
    const url = `${host}/api/quotes/addquotes`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({ anime, character, quote }),
      });
      // eslint-disable-next-line
      const results = await response.json();
    } catch (error) {
      window.alert("Already Exist");
    }
  };

  const delQuote = async (quoteItem) => {
    const { quote } = quoteItem;
    const url = `${host}/api/quotes/deletequotes`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({ quote }),
      });
      // eslint-disable-next-line
      const results = await response.json();
      setQuotes(Quotes.filter((item) => item.quote !== quote));
    } catch (error) {
      window.alert("Can't delete");
    }
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
