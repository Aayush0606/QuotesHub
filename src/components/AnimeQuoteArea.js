import React, { useState } from "react";
import QuoteCard from "./QuoteCard";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

export default function AnimeQuoteArea() {
  const [text, setTetx] = useState("Anime");
  document.title = `${text} Quotes`;
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);
  const [quoteList, setQuoteList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(10);
  const Capitalize = (data) => {
    return data.charAt(0).toUpperCase() + data.slice(1);
  };

  const GetAnimeQuote = async () => {
    setQuoteList([]);
    setLoading(true);
    setPage(1);
    let data;
    const url = `https://animechan.vercel.app/api/quotes/anime?title=${title}&page=1`;
    try {
      data = await fetch(url);
    } catch (e) {
      alert("Something went wrong");
      return;
    }
    const parsedData = await data.json();
    setHasMore(parsedData.length);
    setLoading(false);
    setQuoteList(parsedData);
  };
  const fetchMore = async () => {
    let data;
    const url = `https://animechan.vercel.app/api/quotes/anime?title=${title}&page=${
      page + 1
    }`;
    setPage(page + 1);
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

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="conatiner">
      <div className="container my-3">
        <div className="input-group mb-3 my-4">
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={handleChange}
          />
          <button
            className={`btn btn-info ${title.length === 0 ? "disabled" : ""}`}
            type="button"
            id="button-addon2"
            onClick={() => {
              setTetx(Capitalize(title));
              GetAnimeQuote();
            }}
          >
            Search
          </button>
        </div>
        <div className="container">
          <h1 className="text-center">{text} quotes for you</h1>
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
      </div>
    </div>
  );
}