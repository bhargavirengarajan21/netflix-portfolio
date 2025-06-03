import { verifyIdToken, getSessionValue, setSessionValue } from "../service/index.js";

const authToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: "No token provided" });
  }
  const idToken = authHeader.split(' ')[1];
  try {
    const decodedToken = await verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid Firebase token" });
  }
};

const validateLoggedIn = async (req, res, next) => {
  const user = await getSessionValue("user");
  if (!user) {
    return res.redirect("/login");
  }
  req.session = user;
  next();
};

const unsetSession = async(req, res, next) => {
  if (!req.session) {
    req.session = {};
  }
  await setSessionValue("user", null);
  return next();
}

const setSession = async (req, res, next) => {
  const session = req.session || await getSessionValue("user");
  console.log("Current session data:", req.user);

  if (!req.user) {
    return res.status(400).json({ message: "No user data to store in session" });
  }


  try {
    const sessionData = {
      sessionId: req.headers['session-id'] || req.sessionID,
      email: req?.user?.email || "Guest@gmail.com",
      userName: req?.user?.name || req?.user?.email?.split('@')[0] || "Guest",
      photoURL: req?.user?.photoURL,
    }

    console.log("Setting session data:", sessionData);
    await setSessionValue("user", JSON.stringify({sessionData}));
    next();
  } catch (error) {
    return res.status(500).json({ message: `Failed to set session ${error.message}` });
  }
};

export { authToken, validateLoggedIn, setSession, getSessionValue, unsetSession };