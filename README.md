# Pana una Birra
Pana una birra is a beer e-commerce mobile app built with React Native and Expo. It allows users to view, share, and purchase beers individually or in groups. The app includes group tagging for shared purchases, QR-based beer selection, biometric login, and real-time data synchronization via Firebase.

## Features
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
- [Expo](https://expo.dev/) `v53.0.9`
- [React](https://reactjs.org/) `v19.0.0`
- [React Native](https://reactnative.dev/) `v0.79.2`
- [Expo Local Authentication](https://docs.expo.dev/versions/latest/sdk/local-authentication/) `v16.0.4` (Biometric login)
- [Expo Camera](https://docs.expo.dev/versions/latest/sdk/camera/) `v16.1.6`
- [Expo Device](https://docs.expo.dev/versions/latest/sdk/device/) `v7.1.4`

### State Management
- [React Redux](https://react-redux.js.org/) `v9.2.0`
- [Redux Toolkit](https://redux-toolkit.js.org/) `v2.8.2`

### Maps & Geolocation
- [React Native Maps](https://github.com/react-native-maps/react-native-maps) `v1.20.1`
- [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/) `v18.1.5`
- [Expo Maps](https://docs.expo.dev/versions/latest/sdk/maps/) `v0.10.0`

### Utilities
- [React Native Async Storage](https://github.com/react-native-async-storage/async-storage) `v2.1.2`

### Backend as a Service
- [Firebase](https://firebase.google.com/docs) `v11.7.3` (Auth, Firestore, Storage)


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

## Cloud Compilation with EAS (recommended)

For native builds without configuring Android Studio/Xcode:

1. Install EAS CLI
```bash
npm install -g eas-cli
```

2. Log in (if it's your first time)
```bash
eas login
```

3. Create a development build
```bash
eas build --profile development --platform android
```

4. Scan the QR code to install it on your device

## Contributions
Contributions are welcome! If you want to improve the project, please create a fork and submit a pull request.

## Contact
For any questions or suggestions, feel free to contact me at [ezioeg@gmail.com].
