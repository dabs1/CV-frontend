# Interactive CV Frontend 🚀

Welcome to the frontend repository of my Interactive Curriculum Vitae (CV) web application. This project is a modern, responsive, and dynamic web-based CV built using React, Vite, and Tailwind CSS. It communicates with a Spring Boot backend to fetch and display my professional experience, education, skills, and projects.

## 🌟 Features

- **Dynamic Content**: Fetches CV data (Experience, Education, Skills, etc.) from a RESTful API backend.
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop devices using Tailwind CSS.
- **Dark Mode**: Built-in support for dark mode, togglable by the user.
- **PDF Export**: Seamless functionality to export the CV to a well-formatted PDF document directly from the browser.
- **Bento Grid Layout**: Utilizes a modern and clean "bento grid" layout for organizing information.
- **QR Code Integration**: Generates a clickable QR code for easy access to the live site.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) powered by [Vite](https://vitejs.dev/) for fast development and build times.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.
- **QR Codes**: `react-qr-code` for generating dynamic QR codes.
- **Deployment**: Configured for deployment on Vercel.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dabs1/CV-frontend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd CV-frontend
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the App Locally

To start the development server, run:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`. 
*Note: Make sure the backend is also running so that the frontend can fetch the CV data successfully.*

## 🌐 Live Demo

Check out the live version of this CV at: [cvtomasfrancisco.vercel.app](https://cvtomasfrancisco.vercel.app/)

## 🤝 Backend Repository

This frontend consumes an API provided by a Spring Boot backend. You can find the backend repository on my GitHub profile.
