import React, { useState, useEffect } from "react";
import ChatArea from "./ChatArea";
import { socket } from "../App";

export default function Chat() {
  document.title = "QuotesHub Chat";
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    socket.emit("join_chat", room);
    setShowChat(true);
  };

  return (
    <div>
      {!showChat ? (
        <div className="container">
          <div className="text-center ">
            <h3>Join World Chat</h3>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              joinRoom();
            }}
          >
            <div>
              <input
                className="form-control my-2"
                required
                type="text"
                placeholder="Enter a display name for chat..."
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
            <div>
              <input
                className="form-control my-2"
                required
                type="text"
                placeholder="Enter a room to join"
                onChange={(event) => {
                  setRoom(event.target.value);
                }}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Enter
              </button>
            </div>
          </form>
        </div>
      ) : (
        <ChatArea socket={socket} name={name} room={room} />
      )}
    </div>
  );
}
