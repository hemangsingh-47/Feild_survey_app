Smart Field Survey App
A React Native application built with Expo designed to streamline field survey operations. The app provides a comprehensive dashboard and integrates various device native features to assist surveyors in data collection, site management, and tracking.

🚀 Features
Dashboard: An intuitive home screen displaying surveyor details, daily survey counts, quick action shortcuts, and a list of recent surveys.
Survey Management: Create new surveys by capturing essential details like Site Name, Client Name, Description, Priority, and Date.
Native Device Integrations:
📷 Camera: Integrated with expo-camera to capture on-site images.
📍 Location: Uses expo-location to fetch real-time geographic coordinates.
👥 Contacts: Access device contacts via expo-contacts for client or personnel management.
📋 Clipboard: Interact with the device clipboard using expo-clipboard.
Navigation: Seamless navigation using Expo Router with a Drawer and Bottom Tabs layout.
🛠️ Technology Stack
Framework: React Native
Platform: Expo (SDK ~54.0)
Routing: Expo Router for file-based routing
Navigation: @react-navigation/drawer, @react-navigation/bottom-tabs
Icons: @expo/vector-icons (Ionicons)
Native Modules:
expo-camera
expo-location
expo-contacts
expo-clipboard
expo-media-library
📁 Project Structure
This project uses file-based routing with Expo Router. The main screens are located in the app directory:

app/(drawer) - Contains the Drawer navigator layout.
camera.jsx - Camera screen
location.jsx - Location tracking screen
contacts.jsx - Contacts list screen
clipboard.jsx - Clipboard management screen
settings.jsx - Settings screen
(tabs) - Contains the Bottom Tabs navigator layout.
index.jsx - Main Dashboard screen
survey.jsx - Create Survey form
history.jsx - Survey history list
profile.jsx - User profile screen
🏃‍♂️ Getting Started
1. Install dependencies
npm install
2. Start the development server
npx expo start
In the output, you'll find options to open the app in a:

Development build
Android emulator
iOS simulator
Expo Go app on your physical device
📱 Development
You can start developing by editing the files inside the app directory. The UI is built using React Native core components (View, Text, ScrollView, etc.) and styled using StyleSheet.

To create a new screen, simply add a new .jsx or .tsx file in the app directory according to the file-based routing conventions.
