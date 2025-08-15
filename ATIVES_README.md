# Atives - Creative Community Platform

A React Native prototype of the Atives platform for creatives, built with Expo and TypeScript.

## 🚀 Features

### Core Screens
- **Home Feed** - Displays creative posts with images, likes, comments, and tags
- **Jobs Board** - Job listings with search, filter, and sort functionality
- **Explore Feed** - Discover creators, portfolios, and resources
- **Profile Page** - User profile with portfolio, stats, and tabbed content
- **Onboarding Flow** - 2-step onboarding for new creators

### Key Functionality
- ✅ Functional UI & routing with Expo Router
- ✅ TypeScript for better code structure
- ✅ Mock data for all content (users, posts, jobs, projects)
- ✅ Clean, maintainable component structure
- ✅ Mobile responsiveness and Expo-compatible build
- ✅ Animations using React Native Reanimated
- ✅ Dark/Light theme support

## 🛠 Tech Stack

- **React Native** with Expo SDK 53
- **TypeScript** for type safety
- **Expo Router** for file-based navigation
- **React Native Reanimated** for smooth animations
- **Expo Vector Icons** for consistent iconography
- **React Navigation** for advanced navigation patterns

## 📱 Screen Structure

```
app/
├── index.tsx                 # Entry point (redirects to onboarding)
├── _layout.tsx              # Root layout with theme provider
├── onboarding/              # Onboarding flow
│   ├── index.tsx           # Welcome screen
│   ├── step1.tsx           # Creative field selection
│   └── step2.tsx           # Goals and bio setup
└── (tabs)/                  # Main app tabs
    ├── _layout.tsx         # Tab navigation layout
    ├── index.tsx           # Home feed
    ├── jobs.tsx            # Jobs board
    ├── explore.tsx         # Explore creators
    └── profile.tsx         # User profile
```

## 🎨 Components

- **PostCard** - Animated post display with user info, content, and interactions
- **JobCard** - Job listing with company info, skills, and application details
- **UserCard** - Creator profile card for discovery
- **ProjectCard** - Portfolio project showcase
- **AnimatedCard** - Reusable animation wrapper with entrance effects

## 📊 Mock Data

The app uses comprehensive mock data including:
- **Users** - Creative professionals with skills, locations, and verification status
- **Posts** - Creative content with images, engagement metrics, and tags
- **Jobs** - Opportunities across different creative fields and employment types
- **Projects** - Portfolio pieces with descriptions and performance metrics

## 🎯 Onboarding Flow

1. **Welcome Screen** - App introduction with key features
2. **Step 1** - Creative field selection (Design, Photography, Development, etc.)
3. **Step 2** - Goal setting and optional bio creation

## ✨ Animations & Interactions

- **Staggered entrance animations** for feed items
- **Press feedback** with scale animations
- **Smooth transitions** between screens
- **Pull-to-refresh** functionality
- **Micro-interactions** throughout the app

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npx expo start
   ```

3. Open the app in:
   - Expo Go app on your phone
   - iOS Simulator
   - Android Emulator
   - Web browser

## 🎨 Design Principles

- **Clean & Modern** - Minimalist design with focus on content
- **Accessible** - High contrast ratios and readable typography
- **Responsive** - Adapts to different screen sizes
- **Consistent** - Unified color scheme and component patterns
- **Performant** - Optimized animations and efficient rendering

## 🔮 Future Enhancements

- Real-time messaging system
- Advanced portfolio builder
- Job application tracking
- Social features (following, messaging)
- Push notifications
- Offline support
- Advanced search and filtering
- Integration with creative tools

## 📝 Notes

This is a prototype built for demonstration purposes. In a production environment, you would need to:
- Implement proper authentication
- Connect to a real backend API
- Add proper error handling
- Implement data persistence
- Add comprehensive testing
- Optimize for performance at scale

Built with ❤️ for the creative community.