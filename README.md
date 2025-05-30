# Pana una Birra
Pana una Birra is a beer e-commerce mobile app built with React Native and Expo. It allows users to view, share, and purchase beers individually or in groups. The app includes group tagging for shared purchases, QR-based beer selection, biometric login, and real-time data synchronization via Firebase.

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

<details>
  <summary>📱 Android screenshots</summary>
  <p>
    <img src="https://github.com/user-attachments/assets/76f758a6-021b-4c25-8a71-d161769fe7ea" alt="Android Screenshot 1" width="400"/>
    <img src="https://github.com/user-attachments/assets/c370d6c4-40a8-41a3-b274-1ffa9997a551" alt="Android Screenshot 2" width="400"/>
  </p>
  <p>
    <img src="https://github.com/user-attachments/assets/f60e4556-4f97-4feb-a6ac-fd55035946e2" alt="Android Screenshot 3" width="400"/>
    <img src="https://github.com/user-attachments/assets/8da0df30-10f5-47c5-8547-a6c5bc8e82db" alt="Android Screenshot 4" width="400"/>
  </p>
    <img src="https://github.com/user-attachments/assets/c8e7e541-e575-4b3c-8069-1e864bd451f5" alt="Android Screenshot 5" width="400"/>
    <img src="https://github.com/user-attachments/assets/e671defd-5052-4db9-bca4-c05cc09cae19" alt="Android Screenshot 5" width="400"/>
  </p>
</details>

<details>
  <summary>📱 iOS screenshots</summary>
  <p>
    <img src="https://github.com/user-attachments/assets/eb8c9c6d-5299-410e-a593-e427c4bc8ab4" alt="iOS Screenshot 1" width="400"/>
    <img src="https://github.com/user-attachments/assets/abd10014-ebec-4992-b602-ab0f5218751f" alt="iOS Screenshot 2" width="400"/>
  </p>
  <p>
    <img src="https://github.com/user-attachments/assets/2c539f50-5be8-4ca5-8c89-b513304aec59" alt="iOS Screenshot 3" width="400"/>
    <img src="https://github.com/user-attachments/assets/15a49f04-da7e-45ba-9364-418debe88022" alt="iOS Screenshot 4" width="400"/>
  </p>
  <p>
    <img src="https://github.com/user-attachments/assets/dc4dad21-c6b7-4a90-be3f-8c509e4b457b" alt="iOS Screenshot 5" width="400"/>
    <img src="https://github.com/user-attachments/assets/ec597b20-9477-4ffd-ad67-1ba3f8301801" alt="iOS Screenshot 6" width="400"/>
  </p>
</details>


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
# or
 npm start
   ```

### Run for Android
   ```bash
   npx expo run:android
# or
npm run android
   ```

### Run for iOS
   ```bash
   npx expo run:ios
 or
npm run ios
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
