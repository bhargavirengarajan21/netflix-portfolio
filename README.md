# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


---

# Netflix Portfolio Clone (ReactJS + Vite)

This project is a Netflix-inspired portfolio web application built with ReactJS, using Vite for fast development and build tooling. It showcases modern React features, custom components, authentication, and a sleek UI inspired by Netflix. The app is designed to be scalable, maintainable, and easily deployable.

## Features

-  **Netflix-style UI**: Responsive design and user experience inspired by Netflix.
-  **Authentication**: Login functionality, with potential Firebase integration.
-  **Browse Dashboard**: Main content area for portfolio items or media.
-  **Built with Vite**: Super-fast dev server and optimized builds.
-  **TailwindCSS**: Utility-first CSS for rapid UI development.
-  **Routing**: React Router v6 for multi-page navigation.
-  **Backend Ready**: Includes Express server, Redis, and session handling for full-stack capabilities.
-  **Cloud Ready**: Configured for deployment (Docker, Vercel, EC2).

## Project Structure

```
/src
  /pages
    - home.jsx
    - browse.jsx
    - login.jsx
  /Context.jsx
  App.jsx
public/
server/
index.js
package.json
vite.config.js
```

## Getting Started

### Prerequisites

- Node.js >= 18
- npm

### Installation

```bash
git clone https://github.com/bhargavirengarajan21/netflix-portfolio.git
cd netflix-portfolio
npm install
```

### Running the App

```bash
# Start the development server
npm run dev

# (Optional) Start backend/server if implemented
npm run start
```

### Build for Production

```bash
npm run build
```

## Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Build frontend for production
- `npm run start` - Build & run the backend server
- `npm run lint` - Lint source code with ESLint

## Dependencies

- React
- React DOM
- React Router DOM
- TailwindCSS
- Express, Redis, Firebase, Axios, Nodemailer, and more

## Deployment on AWS EC2 with Custom Domain

1. **Launch an EC2 Instance:**
   - Use an Ubuntu or Amazon Linux AMI.
   - Open ports 80 (HTTP), 443 (HTTPS), and any needed for your backend.

2. **Clone the repository and install dependencies:**
   ```bash
   git clone https://github.com/bhargavirengarajan21/netflix-portfolio.git
   cd netflix-portfolio
   npm install
   ```

3. **Environment Variables:**
   - Add your `.env` file with all necessary secrets and configuration.

4. **Production Build:**
   ```bash
   npm run build
   ```

5. **Run the Backend Server (if any):**
   ```bash
   npm run start
   ``

7. **Configure Nginx as a Reverse Proxy (Recommended):**
   - Install Nginx: `sudo apt-get install nginx`
   - Set up your Nginx config to proxy requests to your Node.js app.

8. **Domain Name Configuration:**
   - Point your domain’s DNS A record to your EC2 public IP.
   - Set up SSL with Let’s Encrypt (recommended for HTTPS).
   - 
After deploying the project or manually creating the .env file on an EC2 instance, you might not see it using a basic ls command. This is because files that begin with a dot (like .env, .gitignore, etc.) are hidden by default in Unix-based systems. To verify that the .env file exists, use ls -la instead. This will list all files, including hidden ones, and confirm that your environment file was successfully created.

## Customization

You can modify the pages in `/src/pages` and global state in `/src/Context.jsx` to fit your own portfolio content or application logic.

## License

This project is licensed under the MIT License.

---

> For further customization, update feature descriptions and usage instructions as your app evolves.
