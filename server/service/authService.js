import admin from "firebase-admin";
import dotenv from "dotenv";
dotenv.config({ path: "./deployment/.env" });
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  }),
});

const verifyIdToken = async (idToken) => {
  return await admin.auth().verifyIdToken(idToken);
};

export {
  verifyIdToken
};