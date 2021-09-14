import ScrollToBottom from "react-scroll-to-bottom";
import "../App.css";
import React, { useEffect, useState } from "react";

export default function ChatArea({ socket, name, room }) {
  const [currMsg, setCurrMsg] = useState("");
  const [msgList, setMsgList] = useState([]);

  const sendMessage = async () => {
    const msgData = {
      room: room,
      author: name,
      message: currMsg,
      time:
        new Date(Date.now()).getHours() +
        ":" +
        new Date(Date.now()).getMinutes(),
    };

    await socket.emit("send_message", msgData);
    setMsgList((list) => [...list, msgData]);
    setCurrMsg("");
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
      setMsgList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className="myDivToCenter">
      <div className="chat-window">
        <div className="chat-header">
          <p className="text-center">Live Chat</p>
        </div>
        <div className="chat-body">
          <ScrollToBottom className="message-container">
            {msgList.map((messageContent) => {
              return (
                <div
                  className="message"
                  id={name === messageContent.author ? "you" : "other"}
                >
                  <div>
                    <div className="message-content">
                      <p>{messageContent.message}</p>
                    </div>
                    <div className="message-meta">
                      <p id="time">{messageContent.time}</p>
                      <p id="author">{messageContent.author}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </ScrollToBottom>
        </div>
        <div className="chat-footer">
          <input
            required
            type="text"
            value={currMsg}
            placeholder="Hey..."
            onChange={(event) => {
              setCurrMsg(event.target.value);
            }}
            onKeyPress={(event) => {
              event.key === "Enter" && sendMessage();
            }}
          />
          <button onClick={sendMessage}>&#9658;</button>
        </div>
      </div>
    </div>
  );
}
