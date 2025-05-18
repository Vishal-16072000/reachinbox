# Reachinbox Clone - Google Login & Mail Client UI

This is a frontend React project inspired by the core functionalities of Reachinbox. It includes a Google authentication flow, a clean login page UI, and a mail client layout to view and manage email threads.

## 🚀 Features

- Google Login Integration (via external API)
- Responsive and modern UI
- Dark/Light theme toggle
- Navbar with logout functionality
- Mail list and detailed thread view

## 🛠️ Tech Stack

- **React JS**
- **Tailwind CSS**
- **React Router**
- **React Icons**
- **Firebase Hosting**

## 📁 Folder Structure
src/
├── Components/
│ └── NavBar.jsx
├── Pages/
│ ├── Login.jsx
│ └── Onebox.jsx
├── Context/
│ └── ThemeContext.js
└── App.jsx



## 🧑‍💻 How to Run Locally

1. Clone the repository:
git clone https://github.com/username/repo-name.git
cd repo-name


2. Install dependencies:
npm install


3.Start the development server:
npm run dev


4. Visit http://localhost:5173



🔐 Google Login Redirect
The Google login is handled through an external URL and redirects back to the /onebox route post-authentication.

Make sure to update the redirect URL if you're deploying on a different domain.

🌐 Deployment
The project is hosted on Firebase Hosting. After building the project, run the following commands:

bash
Copy
Edit
npm run build
firebase deploy


📸 Screenshots
