import React, { useState } from "react";
import recommendations from "../data/recommendation.js";
import LinkedInBadge from "../components/LinkedinBadge.jsx";
import { useData } from "../Context.jsx";
import axios from "axios"; 

const HireMeChat = () => {
  const { data } = useData();
  const [role, setRole] = useState("recruiter");
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

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
      console.log(res);
      const botMsg = { sender: "ai", text: res.data.content };
      setChat((prev) => [...prev, botMsg]);
    } catch (err) {
      setChat((prev) => [...prev, { sender: "ai", text: "Oops, something went wrong." }]);
      console.log(err)
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h3>💬 Hire Me – Real-Time Chat</h3>
      <section id="hireme" className="hireme-section">
        <div className="hireme-column hireme-contact">
          <LinkedInBadge />
          <h2>Talk to Me Live</h2>
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

        <div className="hireme-column hireme-recommendations">
          <h2>LinkedIn Recommendations</h2>
          <div className="recommendations-list">
            {recommendations.map((rec, idx) => (
              <div className="recommendation-card" key={idx}>
                <p className="recommendation-text">"{rec.text}"</p>
                <p className="recommendation-author">
                  <strong>{rec.name}</strong> <span>— {rec.title}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HireMeChat;
