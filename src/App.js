import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import RandomQuotesArea from "./components/RandomQuotesArea";
import AnimeQuoteArea from "./components/AnimeQuoteArea";
import CharacterQuoteArea from "./components/CharacterQuoteArea";
import Saved from "./components/Saved";
import QuotesState from "./context/QuotesState";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Chat from "./components/Chat";
import { io } from "socket.io-client";

const socket = io(`http://localhost:8000`);
export { socket };
function App() {
  return (
    <>
      <QuotesState>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/chat">
              <Chat />
            </Route>
            <Route exact path="/">
              <RandomQuotesArea />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/anime">
              <AnimeQuoteArea />
            </Route>
            <Route exact path="/character">
              <CharacterQuoteArea />
            </Route>
            <Route exact path="/saved">
              <Saved />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </QuotesState>
    </>
  );
}

export default App;
