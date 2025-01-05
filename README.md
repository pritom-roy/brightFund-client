# BrightFund

[Live Site URL](https://brightfund.netlify.app/)

BrightFund is a crowdfunding platform that connects individuals with contributors who want to support meaningful projects, ideas, and causes. Whether it’s a personal need, a creative endeavor, or a startup, BrightFund provides an intuitive and efficient platform for fundraising.

---

## Features

- **User Authentication**: Secure email-password-based authentication with Google login integration. Users can log in, register, and manage their sessions seamlessly.
- **Dynamic Campaign Management**:
  - Add new campaigns with detailed fields (title, description, minimum donation, deadline, etc.).
  - Update existing campaigns through a modal or dedicated page.
  - Delete campaigns with confirmation prompts.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views, providing a seamless user experience across devices.
- **Running Campaigns Section**:
  - Displays ongoing campaigns dynamically fetched from the database.
  - Includes a "See More" feature for detailed information.
- **Donation Management**:
  - Users can donate to campaigns directly from the details page.
  - View personal donations in a private "My Donations" section.
- **Theme Toggle**: Support for light and dark themes for personalized viewing preferences.
- **Sorting and Filtering**: Sort campaigns by minimum donation amounts on the "All Campaigns" page.

---

## Pages and Routes

### Public Routes:
- **Home Page**: Contains a banner, running campaigns, and additional informative sections.
- **All Campaigns**: Displays a table of all campaigns with sorting functionality.
- **404 Page**: Redirects users when navigating to invalid routes.

### Private/Protected Routes:
- **Add New Campaign**: Allows authenticated users to create new campaigns.
- **My Campaigns**: Displays campaigns added by the logged-in user with update and delete functionality.
- **Update Campaign**: Update existing campaigns via a modal or separate page.
- **My Donations**: Displays campaigns donated to by the user.

---

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: Firebase Authentication
- **Deployment**: Netlify (Client), Vercel (Server)

---
