# 🚐 VanLife - Premium Van Rental Platform

A modern, full-featured van rental platform built with React, Firebase, and cutting-edge web technologies.

![VanLife](https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=1200&auto=format&fit=crop)

## ✨ Features

### User Features
- 🔍 **Advanced Search & Filtering** - Find the perfect van by type, location, and price
- 📱 **Responsive Design** - Seamless experience across all devices
- 🎨 **Modern UI/UX** - Beautiful animations and transitions with Framer Motion
- ⭐ **Ratings & Reviews** - Read feedback from previous renters
- 🔐 **Secure Authentication** - Protected routes and user sessions

### Host Features
- 📊 **Dashboard** - Overview of earnings, ratings, and van performance
- 💰 **Income Tracking** - Monitor earnings and payment history
- 🚗 **Van Management** - List and manage your van rentals
- 💬 **Reviews Management** - View and respond to customer feedback

### Technical Features
- ⚡ **Fast Performance** - Optimized with Vite and code splitting
- 🔥 **Firebase Integration** - Real-time database with Firestore
- 🎯 **Modern React** - Hooks, Context API, and best practices
- 🛣️ **React Router v6** - Client-side routing with protected routes
- 🎭 **Animations** - Smooth transitions with Framer Motion
- 🍞 **Toast Notifications** - User feedback with react-hot-toast
- 📦 **Component Architecture** - Reusable, maintainable components

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- Firebase account (free tier works great)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/dem199/vanlife-app.git
cd vanlife-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up Firebase**
   - Create a new Firebase project at [firebase.google.com](https://firebase.google.com)
   - Enable Firestore Database
   - Copy your Firebase configuration

4. **Configure environment variables**
```bash
# Create .env file in the root directory
cp .env.example .env

# Add your Firebase credentials to .env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

5. **Seed the database** (one-time setup)
```bash
# Open src/utils/seedDatabase.js
# Uncomment the last line: seedDatabase()
# Then run:
npm run dev
# After seeding, comment out the line again
```

6. **Start development server**
```bash
npm run dev
```

7. **Open your browser**
```
http://localhost:3000
```

## 🔑 Demo Credentials

```
Email: demo@vanlife.com
Password: password
```

## 📁 Project Structure

```
vanlife-app/
├── src/
│   ├── assets/              # Static assets
│   ├── components/          # Reusable components
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Layout/
│   │   ├── LoadingSpinner/
│   │   ├── ErrorMessage/
│   │   ├── VanCard/
│   │   ├── HostLayout/
│   │   └── ProtectedRoute/
│   ├── pages/               # Page components
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Vans/
│   │   ├── VanDetail/
│   │   ├── Login/
│   │   ├── Profile/
│   │   ├── Host/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Income.jsx
│   │   │   ├── HostVans.jsx
│   │   │   └── Reviews.jsx
│   │   └── NotFound/
│   ├── context/             # React Context
│   │   └── AuthContext.jsx
│   ├── hooks/               # Custom hooks
│   │   └── useVans.js
│   ├── services/            # API services
│   │   └── api.js
│   ├── config/              # Configuration
│   │   └── firebase.js
│   ├── data/                # Seed data
│   │   └── seedData.js
│   ├── utils/               # Utilities
│   │   └── seedDatabase.js
│   ├── styles/              # Global styles
│   │   └── index.css
│   ├── App.jsx              # Main App component
│   └── main.jsx             # Entry point
├── public/                  # Public assets
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies
└── README.md                # This file
```

## 🛠️ Built With

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router v6** - Routing
- **Firebase/Firestore** - Backend and database
- **Framer Motion** - Animations
- **React Hot Toast** - Notifications
- **React Icons** - Icon library

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Linting
npm run lint         # Run ESLint
```

## 🎨 Customization

### Colors
Edit CSS custom properties in `src/styles/index.css`:

```css
:root {
  --primary-600: #0284c7;
  --accent-orange: #FF8C38;
  --teal-600: #0d9488;
  /* ... more colors */
}
```

### Firebase Configuration
Update Firebase config in `src/config/firebase.js` or use environment variables.

## 🔐 Authentication

The app uses a simple demo authentication system. For production:

1. Enable Firebase Authentication
2. Update `src/services/api.js` with Firebase Auth methods
3. Implement proper password hashing and security

## 📱 Responsive Design

The app is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ⚡ Performance Optimizations

- Code splitting by route
- Lazy loading of images
- Debounced search
- Memoized components
- Optimized bundle size

## 🐛 Troubleshooting

### Firebase Connection Issues
- Verify your Firebase credentials in `.env`
- Check Firebase project settings
- Ensure Firestore database is created

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use
```bash
# Change port in vite.config.js
server: {
  port: 3001  // Change to any available port
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Dem199**
- GitHub: [@dem199](https://github.com/dem199)

## 🙏 Acknowledgments

- Van images from [Unsplash](https://unsplash.com)
- Icons from [React Icons](https://react-icons.github.io/react-icons)
- Inspiration from the #vanlife community

---

Made with ❤️ for adventurers and van enthusiasts