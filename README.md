# Pana una Birra
Pana una birra is a beer e-commerce mobile app built with React Native and Expo. It allows users to view, share, and purchase beers individually or in groups. The app includes group tagging for shared purchases, QR-based beer selection, biometric login, and real-time data synchronization via Firebase.

## ✨ Features
- 🏠 Home Screen displaying available beers
- 🍺 Beer Detail Screen with full product info
- 🛒 Cart System that supports group purchases with user tags
- 📲 Add to Cart via button or QR code scan
- 💳 Mock Payment System
- 🗺️ Map Integration showing beer store locations
- 🔐 Authentication with:
  - Email/password login & registration
  - Biometric login (fingerprint/face ID)
- 🔥 Real-Time Integration with Firebase:
  - Authentication
  - Firestore (beer data, user data, cart)
  - Storage (images)
- 🔔 Push Notifications (in development)

## Technologies Used
### Core
- Expo v53.0.9
- React v19.0.0
- React Native v0.79.2
- expo-local-authentication v16.0.4 (Biometric login)
- expo-camera v16.1.6
- expo-device v7.1.4

### UI/Styling
- React Native Vector Icons v8.1.0
- React Native Easy Toast v2.0.0
- React Native Swiper v1.6.0-nightly.3
- React Native Swipe List View v3.2.6

### State Management
- @reduxjs/toolkit v2.8.2
- react-redux v9.2.0

### Maps & Geolocation
- react-native-maps v1.20.1
- expo-location v18.1.5
- expo-maps v0.10.0

### Utilities
- @react-native-async-storage/async-storage v2.1.2

### Backend as a Service
- Firebase v11.7.3 (Auth, Firestore, Storage)

## Setup
1. Install the dependencies:

   ```bash
   npm install

2. Configure your Firebase credentials in a .env file

## Run
Start the app

   ```bash
   npx expo start
   ```

### Run for Android
   ```bash
   npx expo run:android
   ```
### Run for iOS
   ```bash
   npx expo run:ios
   ```

## Contributions
Contributions are welcome! If you want to improve the project, please create a fork and submit a pull request.

## Contact
For any questions or suggestions, feel free to contact me at [ezioeg@gmail.com].
