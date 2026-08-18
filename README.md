# Interactive CV Frontend

This repository contains the frontend application for my Interactive Curriculum Vitae (CV). It is a modern, responsive web application built with React, Vite, and Tailwind CSS. The application is designed to fetch and display my professional experience, education, skills, and projects dynamically from a Spring Boot backend.

## Features

- **Dynamic Content**: Fetches CV data, including experience, education, and skills, from a RESTful API.
- **Responsive Design**: Provides a consistent and optimized viewing experience across mobile, tablet, and desktop devices.
- **Dark Mode**: Includes built-in support for a dark theme, which users can toggle based on their preference.
- **PDF Export**: Allows users to export the CV directly from the browser into a properly formatted PDF document.
- **Bento Grid Layout**: Organizes information clearly using a modern grid-based layout structure.
- **QR Code Integration**: Generates a clickable QR code for quick access to the live application.

## Technology Stack

- **Framework**: [React](https://react.dev/) with [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **QR Codes**: `react-qr-code` library
- **Deployment**: Configured for Vercel

## Getting Started

### Prerequisites

- Node.js (v18 or higher is recommended)
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
3. Install the required dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the local development server, run:

```bash
npm run dev
```

The application will be accessible at `http://localhost:5173`. 
Note: Ensure that the backend service is also running so the frontend can successfully retrieve the CV data.

## Live Application

The live version of this CV is available at: [cvtomasfrancisco.vercel.app](https://cvtomasfrancisco.vercel.app/)

## Backend Services

This frontend relies on an API provided by a Spring Boot backend. The backend repository can be found on my GitHub profile.
