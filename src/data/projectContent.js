import NetflixPortfolio from "../assets/picture-3.png";
import Dithering from "../assets/dithering.png";
import Airpollution from "../assets/airpollution.jpg";
import Accident from "../assets/Accident.png";
import eventManagement from "../assets/event-management.jpg";
import music from "../assets/Music.jpg";
import dbms from "../assets/dbms.png";

const projectContent = [
  {
    title: "Netflix Portfolio",
    shortDesc: "A Netflix-style portfolio with real-time chat using Firebase and WebSockets.",
    description:
      "Designed a personal portfolio website with a Netflix-style UI and real-time chat integration. Built using React.js, Firebase, WebSockets, and TailwindCSS, it allows recruiters to engage with an immersive project showcase and communicate instantly.",
    image: NetflixPortfolio,
    tools: ["React.js", "TailwindCSS", "Firebase", "WebSocket", "Docker", "Express.js", "Nodemailer"],
    link: {
      githubLink: "https://github.com/bhargavirengarajan21/netflix-clone",
      websiteLink: "https://netflix-clone-4a0c1.web.app/",
    },
  },
  {
    title: "Electrostatic Dithering",
    shortDesc: "GPU-accelerated electrostatic dithering system for image accuracy.",
    description:
      "Built a Python-based system to optimize electrostatic pattern uniformity and image processing accuracy using CuPy, Python, and Colab for GPU acceleration. Designed algorithms to enhance quality and visualized electrostatic force distributions.",
    tools: ["Python", "CuPy", "Google Colab", "Algorithms"],
    image: Dithering,
    link: {
      githubLink: "https://github.com/bhargavirengarajan21/Electrostatic-halftoning/tree/master",
      websiteLink: "https://colab.research.google.com/drive/1S603lslWlespoRnigT-iqzQMrKgxkmtf#scrollTo=tjcqNr35gxg2"
    },
  },
  {
    title: "Statistical Inference for Spatial Regionalization",
    shortDesc: "Geospatial tool for zoning and infrastructure optimization.",
    description:
      "Developed a visualization tool using GeoPandas, Python, and Matplotlib to analyze zoning patterns and help urban planners make informed decisions. Enabled region classification and visual zoning analysis with interactive plots.",
    tools: ["Python", "GeoPandas", "Matplotlib", "Spatial Analysis"],
    image: dbms,
    link: {
      githubLink: "https://colab.research.google.com/drive/1XQIYltYofb57Iw6XL7Hb7qDqdSFNUt5d?authuser=1",
    },
  },
  {
    title: "US Accident Zone Visualization",
    shortDesc: "Big data geospatial system for accident hotspot analysis.",
    description:
      "Built a system using Hadoop, PySpark, and React Maps to process traffic accident data and detect high-risk zones. Improved infrastructure planning using spatial clustering and interactive accident trend visualizations.",
    tools: ["Python", "Hadoop", "PySpark", "React Maps", "Matplotlib"],
    image: Accident,
    link: {
      websiteLink: "https://zpg98r.csb.app"
    },
  },
  {
    title: "Event Management Web App",
    shortDesc: "Live event dashboard with real-time chat and volunteer tools.",
    description:
      "Designed a full-stack app with real-time chat using Redis, built on GatsbyJS, Node.js, and Docker. Enabled seamless event posting, joining, and coordination for multiple users simultaneously.",
    tools: ["GatsbyJS", "React.js", "Node.js", "Redis", "Docker", "CSS"],
    image: eventManagement,
    link: {
      githubLink: "https://github.com/bhargavirengarajan21/chat",
    },
  },
  {
    title: "Air Pollution Prediction Using ML",
    shortDesc: "Real-time PM10 prediction system using XGBoost and Flask.",
    description:
      "Created a Flask app to predict PM10 air pollution levels using the Delhi AQI dataset. Integrated XGBoost for robust model accuracy and deployed with a user-friendly web interface.",
    tools: ["Python", "Flask", "XGBoost", "Machine Learning", "TensorFlow", "OpenCV"],
    image: Airpollution,
    link: {
      githubLink: "https://github.com/bhargavirengarajan21/airpollution",
      websiteLink: "https://ieeexplore.ieee.org/document/9315283"
    },
  },
  {
    title: "Music Playing Using Hand Gestures",
    shortDesc: "Gesture-controlled music player using ASL and CNNs.",
    image:music,
    description:
      "Developed a touch-free music controller using TensorFlow CNN, OpenCV, and Flask. Enabled hands-free music playback through real-time ASL gesture recognition with 90%+ accuracy.",
    tools: ["Python", "TensorFlow", "OpenCV", "Flask", "Keras", "SQLite"],
    link: {
      githubLink: "https://github.com/bhargavirengarajan21/music-playing-using-hand-gestures",
    },
  },
];

export default projectContent;
