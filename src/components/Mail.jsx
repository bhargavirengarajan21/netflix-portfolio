import React, { useState } from 'react';
import axios from 'axios';

const QuickEmailAI = () => {
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
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '1rem' }}>
      <h2>AI Email Draft & Send</h2>
      <input placeholder="Recipient email" value={toEmail} onChange={e => setToEmail(e.target.value)} /><br />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="recruiter">Recruiter</option>
        <option value="professor">Professor</option>
        <option value="manager">Manager</option>
      </select><br />
      <textarea
        placeholder="What's your message about?"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      /><br />
      <button onClick={handleSend}>✉️ Generate & Send Email</button>
      <p>{status}</p>
      {generatedText && <pre>{generatedText}</pre>}
    </div>
  );
};

export default QuickEmailAI;
