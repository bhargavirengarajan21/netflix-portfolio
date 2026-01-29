// analytics.js - Analytics Utility for GA4 + Firebase

import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import {
  getFirestore,
  doc,
  setDoc,
  increment,
  serverTimestamp,
  collection,
  addDoc,
} from "firebase/firestore";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCguWMDL3Q7yFplJhyz8H43D46AiALFvJY",
  authDomain: "bhargavi-7c12f.firebaseapp.com",
  databaseURL: "https://bhargavi-7c12f.firebaseio.com",
  projectId: "bhargavi-7c12f",
  storageBucket: "bhargavi-7c12f.firebasestorage.app",
  messagingSenderId: "762836241895",
  appId: "1:762836241895:web:56d3a8e08d3c4e55b84142",
  measurementId: "G-CSYN3RZEEC"
};

// Initialize Firebase (only once)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
const db = getFirestore(app);

// ============================================
// Google Analytics 4 + Firebase Analytics Helper Functions
// ============================================

/**
 * Send a custom event to GA4 and Firebase Analytics
 */
export const sendGA4Event = (eventName, eventParams = {}) => {
  // Google Analytics 4 (gtag)
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParams);
    console.log(`[GA4] Event sent: ${eventName}`, eventParams);
  }

  // Firebase Analytics
  if (analytics) {
    logEvent(analytics, eventName, eventParams);
    console.log(`[Firebase Analytics] Event sent: ${eventName}`, eventParams);
  }
};

/**
 * Track page view in GA4
 */
export const trackGA4PageView = (pageTitle, pageLocation) => {
  sendGA4Event("page_view", {
    page_title: pageTitle,
    page_location: pageLocation || window.location.href,
  });
};

// ============================================
// Firebase Firestore Helper Functions
// ============================================

/**
 * Increment a counter in Firestore
 */
export const incrementCounter = async (collectionName, docId, field, additionalData = {}) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await setDoc(
      docRef,
      {
        [field]: increment(1),
        last_updated: serverTimestamp(),
        ...additionalData,
      },
      { merge: true }
    );
    console.log(`[Firebase] Counter incremented: ${collectionName}/${docId}/${field}`);
  } catch (error) {
    console.error("[Firebase] Error incrementing counter:", error);
  }
};

/**
 * Log a visit/event to a collection
 */
export const logVisit = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
      timestamp: serverTimestamp(),
      user_agent: navigator.userAgent,
      referrer: document.referrer || "direct",
      screen_width: window.innerWidth,
      screen_height: window.innerHeight,
      url: window.location.href,
    });
    console.log(`[Firebase] Visit logged: ${collectionName}/${docRef.id}`);
    return docRef.id;
  } catch (error) {
    console.error("[Firebase] Error logging visit:", error);
    return null;
  }
};

// ============================================
// Resume Page Specific Tracking Functions
// ============================================

/**
 * Track resume page view (GA4 + Firebase)
 */
export const trackResumePageView = async (resumeType) => {
  // GA4 Event
  sendGA4Event("resume_page_view", {
    resume_type: resumeType,
    event_category: "engagement",
    event_label: `${resumeType} Resume View`,
  });

  // Firebase - Update counters
  await incrementCounter("resume_analytics", "page_views", "total_views");
  await incrementCounter("resume_analytics", "page_views", `${resumeType.toLowerCase()}_views`);

  // Firebase - Log individual visit
  await logVisit("resume_visits", {
    resume_type: resumeType,
    event_type: "page_view",
  });
};

/**
 * Track resume type switch (GA4 + Firebase)
 */
export const trackResumeSwitch = async (fromType, toType) => {
  // GA4 Event
  sendGA4Event("resume_switch", {
    from_type: fromType,
    to_type: toType,
    event_category: "engagement",
    event_label: `${fromType} → ${toType}`,
  });

  // Firebase - Update counters
  await incrementCounter("resume_analytics", "switches", "total_switches");
  await incrementCounter(
    "resume_analytics",
    "switches",
    `${fromType.toLowerCase()}_to_${toType.toLowerCase()}`
  );

  // Firebase - Log switch event
  await logVisit("resume_events", {
    event_type: "switch",
    from_type: fromType,
    to_type: toType,
  });
};

/**
 * Track resume download (GA4 + Firebase)
 */
export const trackResumeDownload = async (resumeType) => {
  // GA4 Event - Mark as conversion
  sendGA4Event("resume_download", {
    resume_type: resumeType,
    event_category: "conversion",
    event_label: `${resumeType} Resume Downloaded`,
    value: 1,
  });

  // Firebase - Update counters
  await incrementCounter("resume_analytics", "downloads", "total_downloads");
  await incrementCounter("resume_analytics", "downloads", `${resumeType.toLowerCase()}_downloads`);

  // Firebase - Log download event
  await logVisit("resume_events", {
    event_type: "download",
    resume_type: resumeType,
  });
};

/**
 * Track time spent on resume page
 */
export const trackTimeSpent = async (resumeType, timeInSeconds) => {
  // GA4 Event
  sendGA4Event("resume_time_spent", {
    resume_type: resumeType,
    time_seconds: timeInSeconds,
    event_category: "engagement",
  });

  // Firebase - Log time spent
  await logVisit("resume_events", {
    event_type: "time_spent",
    resume_type: resumeType,
    time_seconds: timeInSeconds,
  });
};

/**
 * Track section visibility (for scroll tracking)
 */
export const trackSectionView = (sectionName, resumeType) => {
  sendGA4Event("section_view", {
    section_name: sectionName,
    resume_type: resumeType,
    event_category: "engagement",
  });
};

// ============================================
// Utility Hook for React Components
// ============================================

/**
 * Custom hook for tracking page load and unload
 * Usage: usePageTracking('frontend');
 */
export const createPageTracker = (resumeType) => {
  let startTime = Date.now();

  const onLoad = () => {
    startTime = Date.now();
    trackResumePageView(resumeType);
  };

  const onUnload = () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    if (timeSpent > 5) {
      // Only track if more than 5 seconds
      trackTimeSpent(resumeType, timeSpent);
    }
  };

  return { onLoad, onUnload };
};

// Export Firebase instances for direct access if needed
export { db, analytics };