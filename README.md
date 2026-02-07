# SkillSwap – A Local Skill Exchange Platform

A community-driven platform where users can discover, share, and book skill sessions from local providers. Whether you want to learn guitar, practice a new language, or pick up photography — SkillSwap connects learners with talented local experts.

## 🌐 Live URL

🔗 **[SkillSwap Live](https://warmpaws-48847.web.app/)**

---

## 📋 Purpose

SkillSwap is designed to connect learners with skilled local providers, making it easy to discover new skills, book sessions, and grow together as a community. The platform provides:

- Browse and search skill listings by category or keyword
- Detailed skill pages with provider info, pricing, and session booking
- Secure user authentication with profile management
- A curated list of top-rated providers and upcoming community events

---

## ✨ Key Features

- **🔐 User Authentication** – Secure login, registration, and password recovery using Firebase Auth (Email/Password + Google Sign-In)
- **🔑 Password Validation** – Enforces uppercase, lowercase, and minimum 6-character rules on registration
- **👁️ Password Toggle** – Show/hide password on Login & Register pages
- **📧 Forgot Password** – Pre-fills email from Login page, sends reset link, and redirects to Gmail
- **🏠 Responsive Design** – Fully optimized for mobile, tablet, and desktop devices
- **🎠 Interactive Hero Slider** – Swiper-based carousel with autoplay, pagination, and fade effects
- **🔍 Skill Listings** – Browse, search, and filter skills by category or name
- **📄 Skill Details (Protected)** – View full skill info and book a session via a form (clears on submit with toast notification)
- **⭐ Top Rated Providers** – Showcases highest-rated skill providers in the community
- **📅 Upcoming Skill Events** – Extra section highlighting community workshops, hackathons, and meetups
- **🚀 How It Works** – Step-by-step guide for new users
- **🔒 Private Routes** – Protected pages (Skill Details, My Profile, Update Profile) redirect to login
- **👤 User Profile Management** – View and update display name and photo URL
- **🎨 Scroll Animations** – Smooth AOS animations throughout the site

---

## 📦 NPM Packages Used

### Dependencies

| Package            | Version | Purpose                                         |
| ------------------ | ------- | ----------------------------------------------- |
| `react`            | ^19.2.0 | Core React library                              |
| `react-dom`        | ^19.2.0 | React DOM rendering                             |
| `react-router-dom` | ^7.13.0 | Client-side routing with protected routes       |
| `firebase`         | ^12.8.0 | Authentication (Email/Password, Google, Reset)  |
| `react-icons`      | ^5.5.0  | Icon library (FaStar, FaSearch, FaExchangeAlt…) |
| `react-hot-toast`  | ^2.6.0  | Toast notifications for auth & booking feedback |
| `swiper`           | ^12.0.3 | Hero slider with autoplay, pagination, fade     |
| `aos`              | ^2.3.4  | Animate On Scroll effects across all sections   |
| `animate.css`      | ^4.1.1  | CSS animations on Login, Register, Forgot pages |

### Dev Dependencies

| Package        | Version  | Purpose                     |
| -------------- | -------- | --------------------------- |
| `vite`         | ^7.2.4   | Build tool & dev server     |
| `tailwindcss`  | ^4.1.18  | Utility-first CSS framework |
| `postcss`      | ^8.5.6   | CSS transformations         |
| `autoprefixer` | ^10.4.23 | CSS vendor prefixing        |
| `eslint`       | ^9.39.1  | Code linting                |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ivyfaraezi/skillswap.git
   cd SkillSwap

   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

---

## 📱 Responsiveness

The website is fully responsive across all devices:

- **Mobile** (< 640px) - Single column layout, collapsible navigation
- **Tablet** (640px - 1024px) - Two column grids, optimized spacing
- **Desktop** (> 1024px) - Full layout with sidebar navigation

---

## 🛠️ Technologies Used

- **Frontend:** React 19, Tailwind CSS 4
- **Build Tool:** Vite 7
- **Authentication:** Firebase Auth (Email/Password, Google Sign-In, Password Reset)
- **Routing:** React Router DOM 7 (with Private Routes)
- **Animations:** AOS, Animate.css, Swiper
- **Notifications:** React Hot Toast
- **Icons:** React Icons

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---
