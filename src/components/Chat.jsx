import React, { useState } from "react";
import chatIcon from "../assets/chaticon.png"; // Assuming you have a chat icon image
import { useNavigate } from "react-router-dom";
import { useData } from "../Context.jsx";
import axios from "axios";

const ChatWidget = ({ isOpen, onClose, role, setRole, chat, setChat, input, setInput, loading, sendMessage }) => (
  <div className="chat-widget" style={{ display: isOpen ? "block" : "none" }}>
    <div className="chat-header">
      <h3> Hire Me – Real-Time Chat</h3>
      <button className="close-btn" onClick={onClose}>✕</button>
    </div>
    <select value={role} onChange={(e) => setRole(e.target.value)}>
      <option value="recruiter">Recruiter</option>
      <option value="friend">Friend</option>
      <option value="manager">Collaborator</option>
    </select>
    <div className="chat-box">
      {chat.map((msg, idx) => (
        <div key={idx} className={`chat-bubble ${msg.sender}`}>
          {msg.text}
        </div>
      ))}
      {loading && <div className="chat-bubble ai">Typing...</div>}
    </div>
    <div className="chat-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  </div>
);

const ChatIcon = () => {
  const { data } = useData();
  const navigate = useNavigate();
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [role, setRole] = useState("recruiter");
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const isLoggedIn = !!data.isLoggedIn;

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { sender: "you", text: input };
    setChat((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("/generate", {
        role,
        question: input,
      });
      const botMsg = { sender: "ai", text: res.data.content };
      setChat((prev) => [...prev, botMsg]);
    } catch (err) {
      setChat((prev) => [...prev, { sender: "ai", text: "Oops, something went wrong." }]);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChatClick = () => {
    if (!isLoggedIn) {
      window.location.href="/login";
      console.log("User is not logged in, redirecting to login page.");
    }
    setIsWidgetOpen(!isWidgetOpen);
  };

  return (
    <>
      <button className={`chat-icon ${isWidgetOpen ? 'widget-open': 'widget-closed'}`} onClick={handleChatClick}>
        <img src={chatIcon} alt="Chat Icon" />
      </button>
      {isLoggedIn && (
        <ChatWidget
          isOpen={isWidgetOpen}
          onClose={() => setIsWidgetOpen(false)}
          role={role}
          setRole={setRole}
          chat={chat}
          setChat={setChat}
          input={input}
          setInput={setInput}
          loading={loading}
          sendMessage={sendMessage}
        />
      )}
    </>
  );
};

export default ChatIcon;
