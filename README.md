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
- Expo v52.0.28
- React v18.3.1
- React Native v0.76.6
- @react-native-picker/picker v2.9.0 (Dropdown)
- Firebase (Auth, Firestore, Storage)
- QR Code Scanner
- Biometric Auth via Expo
- MapView for location display

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
