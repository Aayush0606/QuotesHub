import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import PropTypes from "prop-types";
import QuoteCard from "./QuoteCard";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

QuotesArea.propTypes = {
  title: PropTypes.string,
};

QuotesArea.defaultProps = {
  title: "Random",
};

export default function QuotesArea() {
  const history = useHistory();
  useEffect(() => {
    {
      localStorage.getItem("auth-token")
        ? GetRandomQuotes()
        : history.push("/signup");
    }
  }, []);
  document.title = `Random Quotes`;
  const [quoteList, setQuoteList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(10);
  // eslint-disable-next-line
  const GetRandomQuotes = async () => {
    setLoading(true);
    let data;
    const url = "https://animechan.vercel.app/api/quotes";
    data = await fetch(url);
    if (data.ok) {
      const parsedData = await data.json();
      setHasMore(parsedData.length);
      setLoading(false);
      setQuoteList(parsedData);
    } else {
      setLoading(false);
      setQuoteList([]);
      alert("Error Occured");
      history.push("/");
    }
  };

  const fetchMore = async () => {
    let data;
    const url = "https://animechan.vercel.app/api/quotes";
    try {
      data = await fetch(url);
    } catch (e) {
      alert("Something went wrong");
      return;
    }
    const parsedData = await data.json();
    setHasMore(parsedData.length);
    setLoading(false);
    setQuoteList(quoteList.concat(parsedData));
  };
  return (
    <>
      <div className="container my-3">
        <h1 className="text-center">Random quotes for you</h1>
        {loading && <Loading />}
        {quoteList.length !== 0 && (
          <InfiniteScroll
            dataLength={quoteList.length}
            next={fetchMore}
            hasMore={hasMore === 10}
            loader={<Loading />}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {quoteList.map((elem) => {
              return (
                <QuoteCard
                  key={elem.quote}
                  anime={elem.anime}
                  character={elem.character}
                  quote={elem.quote}
                />
              );
            })}
          </InfiniteScroll>
        )}
      </div>
    </>
  );
}
