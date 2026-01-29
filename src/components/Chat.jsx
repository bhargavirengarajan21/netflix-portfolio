import React, { useState, useEffect, useRef } from "react";
import chatIcon from "../assets/chaticon.png";
import { useData } from "../Context.jsx";
import axios from "axios";

// Typewriter component for AI responses
const TypewriterText = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 20);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, onComplete]);

  return <span>{displayedText}</span>;
};

const ChatWidget = ({
  isOpen,
  onClose,
  role,
  setRole,
  chat,
  input,
  setInput,
  loading,
  sendMessage,
  typingMessageId,
  onTypingComplete,
}) => {
  const chatBoxRef = useRef(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [chat, loading]);

  return (
    <div className={`chat-widget ${isOpen ? "open" : ""}`}>
      <div className="chat-header">
        <div className="header-left">
          <div className="header-avatar">
            <img src={chatIcon} alt="Chat" />
            <span className="online-dot"></span>
          </div>
          <div className="header-info">
            <h3>Hire Me</h3>
            <span className="status-text">Online now</span>
          </div>
        </div>
        <button className="close-btn" onClick={onClose}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 1L13 13M1 13L13 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="recruiter">Recruiter</option>
        <option value="friend">Friend</option>
        <option value="manager">Collaborator</option>
      </select>

      <div className="chat-box" ref={chatBoxRef}>
        {chat.length === 0 && (
          <div className="welcome-message">
            <p>Hey there! Ask me anything about my skills, experience, or projects.</p>
          </div>
        )}
        {chat.map((msg, idx) => (
          <div key={idx} className={`chat-bubble ${msg.sender}`}>
            {msg.sender === "ai" && typingMessageId === idx ? (
              <TypewriterText text={msg.text} onComplete={onTypingComplete} />
            ) : (
              msg.text
            )}
          </div>
        ))}
        {loading && (
          <div className="chat-bubble ai typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !loading && sendMessage()}
          placeholder="Type your message..."
          disabled={loading}
        />
        <button onClick={sendMessage} disabled={loading || !input.trim()}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="powered-by">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Powered by <span>Gemini</span>
      </div>
    </div>
  );
};

const ChatIcon = () => {
  const { data } = useData();
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [role, setRole] = useState("recruiter");
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [typingMessageId, setTypingMessageId] = useState(null);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
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
      setChat((prev) => {
        const newChat = [...prev, botMsg];
        setTypingMessageId(newChat.length - 1);
        return newChat;
      });
    } catch (err) {
      setChat((prev) => [
        ...prev,
        { sender: "ai", text: "Oops, something went wrong. Please try again." },
      ]);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleTypingComplete = () => {
    setTypingMessageId(null);
  };

  const handleChatClick = () => {
    setIsWidgetOpen(!isWidgetOpen);
  };

  return (
    <>
      <button
        className={`chat-icon ${isWidgetOpen ? "widget-open" : ""}`}
        onClick={handleChatClick}
        aria-label="Open chat"
      >
        {isWidgetOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <>
            <img src={chatIcon} alt="Chat" />
            <span className="online-indicator"></span>
          </>
        )}
      </button>
      <ChatWidget
        isOpen={isWidgetOpen}
        onClose={() => setIsWidgetOpen(false)}
        role={role}
        setRole={setRole}
        chat={chat}
        input={input}
        setInput={setInput}
        loading={loading}
        sendMessage={sendMessage}
        typingMessageId={typingMessageId}
        onTypingComplete={handleTypingComplete}
      />
    </>
  );
};

export default ChatIcon;