# BrightFund

[🌍 Live Site](https://brightfund.netlify.app/)

BrightFund is a modern crowdfunding platform that connects individuals with contributors who want to support meaningful projects, ideas, and causes. Whether it’s a personal need, a creative endeavor, or a startup, BrightFund provides an intuitive and efficient platform for fundraising.

---

## 🚀 Technologies Used

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** Firebase Authentication
- **State Management & Utilities:** Context API, React Hooks
- **UI Enhancements:** SweetAlert2, React Icons
- **Build & Deployment:** Netlify (Frontend), Vercel (Backend)

---

## 🔥 Features

### 🖥️ Fully Responsive Design
- Optimized for mobile, tablet, and desktop views, ensuring a seamless user experience.

### 💳 Secure User Authentication
- Email/password login with Google Sign-in integration.
- Persistent login across sessions.

### 💰 Dynamic Campaign Management
- Add new campaigns with fields like title, description, minimum donation, and deadline.
- Update existing campaigns via a modal or dedicated page.
- Delete campaigns with confirmation prompts.

### 🎯 Running Campaigns Section
- Displays ongoing campaigns dynamically fetched from the database.
- Includes a "See More" feature for detailed campaign information.

### 💸 Donation Management
- Donate directly from the campaign details page.
- View personal donations in a private "My Donations" section.

### 🌗 Theme Toggle
- Support for light and dark themes for a personalized viewing experience.

### 🔎 Sorting and Filtering
- Sort campaigns by minimum donation amount.

---

## 📋 Pages & Routes

### 🌍 Public Routes:
- **Home Page:** Features a banner, running campaigns, and additional informative sections.
- **All Campaigns:** Displays a table of all campaigns with sorting functionality.
- **404 Page:** Redirects users when navigating to invalid routes.

### 🔐 Private/Protected Routes:
- **Add New Campaign:** Allows authenticated users to create new campaigns.
- **My Campaigns:** Displays campaigns added by the logged-in user with update and delete functionality.
- **Update Campaign:** Update existing campaigns via a modal or separate page.
- **My Donations:** Displays campaigns donated to by the user.

---

## 🛠 How to Run the Project Locally

### 1️⃣ Prerequisites
Ensure you have the following installed:
- **Node.js** (latest LTS recommended)
- **NPM or Yarn**
- **Git** (optional but recommended)

### 2️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/brightfund.git
cd brightfund
```

### 3️⃣ Install Dependencies
```sh
npm install
# or
yarn install
```

### 4️⃣ Start the Development Server
```sh
npm run dev
# or
yarn dev
```
The application should now be running on `http://localhost:5173/`.

### 5️⃣ Build for Production
```sh
npm run build
# or
yarn build
```

---

## 🔑 Environment Variables

Before running the project, create a `.env` file in the root directory and add the following variables:

```env
VITE_apiKey=YOUR_FIREBASE_API_KEY
VITE_authDomain=YOUR_FIREBASE_AUTH_DOMAIN
VITE_projectId=YOUR_FIREBASE_PROJECT_ID
VITE_storageBucket=YOUR_FIREBASE_STORAGE_BUCKET
VITE_messagingSenderId=YOUR_FIREBASE_MESSAGING_SENDER_ID
VITE_appId=YOUR_FIREBASE_APP_ID
```

![Project Screenshot](https://raw.githubusercontent.com/pritom-roy/brightFund-client/main/bright.png)

