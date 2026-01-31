import dotenv from "dotenv";
import axios from 'axios';
import fs from 'fs';
dotenv.config({ path: "./deployment/.env" });

export const AIMailService = async (req, res) => {
  const { role, question } = req.body;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

  const resumeText = fs.readFileSync('./server/service/data/resume.txt', 'utf8');
  const prompt = `Assume you are Bhargavi not Gemini and also answer in concise , now you are talking to  a ${role}. Here is about me ${resumeText} chat with the ${role} and answer if only they ask about me if not chat generally only one message. Message: ${question}`;

  const body = {
    contents: [
      {
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ],
  };

 axios
  .post(url, body, { headers: { 'Content-Type': 'application/json' } })
  .then((response) => {
    const message = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
    console.log("Gemini:", message);
    res.status(200).json({success: true, content: message});
  })
  .catch((err) => {
    console.error("Gemini error:", err.response?.data || err.message);
    res.status(400);
  });
}

export const mailService = async(req, res) => {
    try {
      const { message, toEmail } = req.body;
      const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
          user: process.env.MY_EMAIL,
          pass: process.env.MY_APP_PASSWORD, // Gmail App password
        },
      });

      const mailOptions = {
        from: process.env.MY_EMAIL,
        to: toEmail,
        subject: `Message for ${role}`,
        text: message,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Mail Sent'});
        
    } catch(err) {
      console.error(err);
      res.status(500).json({ success: false, error: err.message });
    }
}