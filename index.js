import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from 'uuid';
import dotenv from "dotenv";
dotenv.config({ path: "./deployment/.env" });
import cors from 'cors';
import { validateLoggedIn, authToken, setSession, getSessionValue, unsetSession } from "./server/middleware/auth-middle.js";
import { AIMailService, mailService } from "./server/service/ai-service.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, "dist")));

app.post('/login', authToken, (req, res) => {
  const sessionId = req.user.uid;
  req.headers['session-id'] = sessionId; 
  req.sessionID = sessionId;
  setSession(req, res, () => {
    res.json({ user: { sessionId, ...req.user } });
  });
});

app.get("/get-session", async (req, res) => {
  const user = await getSessionValue("user");
  if (!user) return res.json({});
  return res.json({ user });
});

app.post("/unset-session",unsetSession);

app.post('/generate',AIMailService);
app.post('/send', mailService);

app.post("/set-session", async (req, res) => {
  setSession(req, res, () => {
    res.json({ user: { ...req.body } });
  });
  return res.json({ user });
});

app.get("/browse", validateLoggedIn, (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});


app.get("/*all", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});