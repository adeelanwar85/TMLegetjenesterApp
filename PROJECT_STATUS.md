# Project Status: TM Legetjenester App
**Last Updated:** 17.12.2025

## 📱 Context
This is a React Native (Expo) app for "TM Legetjenester", a medical clinic in Norway. The app aims to provide appointment booking, video consultations, and health resources.

## ✅ Completed Features (MVP Phase Infinity)
### 1. Authentication & Onboarding
*   **Registration Flow**: Full form (Name, Phone, Email, Birthdate) with `AsyncStorage` persistence.
*   **Smart Date Entry**: Birthdate input auto-formats (e.g., `7.8.89` -> `07.08.1989`).
*   **Biometrics**: FaceID/TouchID integration.
    *   *Note*: Web/Simulator uses a mock implementation in `AuthContext` to prevent crashes.
*   **Landing Page**: Dynamic "Start nå" vs "Logg inn" button based on registration status.

### 2. Dashboard (Hjem)
*   **Personalized Greeting**: "Hei, [Navn] 👋".
*   **Service Cards**: Legetime, Vektnedgang, Hudproblemer, Nyheter.
*   **Navigation**: Tab bar + specific service navigation.

### 3. User Profile
*   **Data Display**: Shows registered name, birthdate, phone.
*   **Settings**: Toggles for Notifications and FaceID (Mocked on web).
*   **Legal**: Native "Personvern" and "Vilkår" screens (`app/legal.tsx`).
*   **About**: Native "Om oss" screen (`app/about.tsx`) with clinic info and contact actions.
*   **Logout**: Secure logout clears local storage and redirects to Welcome screen (`/`).

### 4. UI/UX
*   **Design System**: Custom `Theme.ts` with TM Legetjenester colors.
*   **Branding**: Custom App Icon and Splash Screen (Sage Green theme).
*   **Assets**: TM Logo implemented on Login and Welcome screens.
*   **Illustrations**: Custom health illustrations in Dashboard.

## 🚧 Pending / In Progress
*   **Pasientsky Integration**: Waiting for API Keys. Currently using placeholder logic for booking.
*   **Video Consultation**: `video.tsx` exists but needs WebRTC/Pasientsky backend.

## 🛠 Technical Stack
*   **Framework**: Expo (React Native).
*   **Navigation**: `expo-router`.
*   **State/Auth**: `AuthContext.tsx` + `@react-native-async-storage/async-storage`.
*   **Icons**: `@expo/vector-icons`.
*   **Biometrics**: `expo-local-authentication`.

## 📌 Instructions for Future Agents
1.  **Resume Work**: Always check `src/context/AuthContext.tsx` to understand the user state logic.
2.  **Web Compatibility**: Maintain the `Platform.OS === 'web'` mocks in `AuthContext` and `profile.tsx`.
3.  **Legal**: Text is located in `app/legal.tsx`. Do not hardcode legal text in other files.
4.  **Next Big Task**: Implement Pasientsky API once keys are provided (See `task.md` if available, otherwise assume API integration is next).
