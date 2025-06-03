import React, {useState} from "react";
import recommendations from "../data/recommendation.js";
import LinkedInBadge from "../components/LinkedinBadge.jsx";
import { useData } from "../Context.jsx";

const HireMeSection = () => {
  const {data} = useData();
  const [role, setRole] = useState('recruiter');
  const [question, setQuestion] = useState('');
  const [toEmail, setToEmail] = useState();
  const [status, setStatus] = useState('');
  const [generatedText, setGeneratedText] = useState('');

  const handleSend = async () => {
    setStatus('Generating...');
    try {
      const res = await axios.post('/generate-and-send', {
        role,
        question,
        toEmail,
      });

      setGeneratedText(res.data.content);
      setStatus(' Email sent successfully!');
    } catch (err) {
      setStatus(' Failed: ' + err.message);
    }
  };

  return (
    <>
      <h3>New & Popular: Contact Me</h3>
      <section id="hireme" className="hireme-section">
        <div className="hireme-column hireme-contact">
          <LinkedInBadge />
          <h2>Contact Me</h2>
          <form className="contact-form" autoComplete="off">
            <label>
            <span style={{width: '3rem'}}>From</span>
            <input type="email" name="email" placeholder="you@email.com" required  value={data.sessionData.email} />
            </label>
            <label>
            <span style={{width: '3rem'}}>To</span>
            <input type="email" name="email" placeholder="you@email.com" required  value={"breng002@ucr.edu"} />
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="recruiter">Recruiter</option>
              <option value="professor">Friend</option>
              <option value="manager">Collaborator</option>
            </select><br />
            <label>
            {generatedText ? <textarea name="message" placeholder="What's your message about?" required value={question} onChange={(e) => setQuestion(e.target.value)}/> : <textarea name="message" placeholder="What's your message about?" required value={question} onChange={(e) => setQuestion(e.target.value)}/> }
            </label>
            <button type="submit">Send Message</button>
          </form>
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

export default HireMeSection;
