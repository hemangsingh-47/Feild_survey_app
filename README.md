# 📱 Smart Field Survey & Inspection App

A modern React Native application built using **Expo SDK 54** that demonstrates the integration of multiple Expo APIs such as Camera, Location, Contacts, and Clipboard with **Expo Router**, **Drawer Navigation**, and **Bottom Tab Navigation**.

This project was developed as a React Native mini project to learn real-world mobile application development.

--

## 🎥 Project Demo

Watch the complete demo on YouTube:

📺 **YouTube:** *https://www.youtube.com/watch?v=oNMiUmaLrm0*

---

## ✨ Features

### 📊 Dashboard
- Student Information
- Today's Survey Count
- Quick Action Cards
- Recent Survey Summary

### 📝 Create Survey
- Site Name
- Client Name
- Description
- Priority Selection
- Date Selection
- Form Validation

### 📷 Camera Module
- Camera Permission
- Capture Photo
- Preview Image
- Display Capture Time
- Retake Photo
- Delete Photo
- Confirmation Alert

### 📍 Location Module
- Request Location Permission
- Fetch Current GPS Location
- Latitude & Longitude
- Accuracy Display
- Refresh Location
- Copy Location to Clipboard

### 👥 Contacts Module
- Fetch Device Contacts
- Contact Search
- Contact Counter
- Contact Avatar
- Copy Contact Number
- Pull To Refresh
- Empty State Screen

### 📋 Clipboard Module
- Copy Survey ID
- Copy Contact Number
- Copy Current Location
- Paste Clipboard Data
- Clear Clipboard Data

### 👀 Survey Preview
- Display Survey Details
- Display Captured Photo
- Display Location
- Edit Survey
- Submit Survey

### 📚 Survey History
- Display Surveys
- Search Survey
- Filter by Priority
- View Details
- Delete Survey
- Confirmation Dialog

---

# 📱 Screens

- Dashboard
- Survey Form
- Camera
- Location
- Contacts
- Clipboard
- Survey Preview
- Survey History

---

# 🛠 Tech Stack

| Technology | Usage |
|------------|-------|
| React Native | Mobile Development |
| Expo SDK 54 | Development Framework |
| Expo Router | Routing |
| React Navigation | Navigation |
| JavaScript (ES6) | Programming Language |
| Expo Camera | Camera API |
| Expo Location | GPS Location |
| Expo Contacts | Device Contacts |
| Expo Clipboard | Clipboard API |

---

# 📦 Dependencies

```json
{
  "expo": "~54.0.0",
  "expo-camera": "*",
  "expo-location": "*",
  "expo-contacts": "*",
  "expo-clipboard": "*",
  "expo-router": "*",
  "@react-navigation/native": "*",
  "@react-navigation/drawer": "*",
  "@react-navigation/bottom-tabs": "*"
}
```

---

# 📂 Project Structure

```
Smart_Field_Survey_App
│
├── app
│   ├── _layout.jsx
│   ├── (drawer)
│   │     ├── _layout.jsx
│   │     ├── camera.jsx
│   │     ├── contacts.jsx
│   │     ├── location.jsx
│   │     ├── clipboard.jsx
│   │     ├── preview.jsx
│   │     └── (tabs)
│   │            ├── _layout.jsx
│   │            ├── index.jsx
│   │            ├── survey.jsx
│   │            ├── history.jsx
│   │            └── profile.jsx
│
├── assets
├── package.json
└── README.md
```

---

# 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/hemangsingh-47/Feild_survey_app.git
```

### Move into Project

```bash
cd Feild_survey_app
```

### Install Dependencies

```bash
npm install
```

### Start Project

```bash
npx expo start
```

Run on:

- Android Emulator
- Physical Android Device
- Expo Go

---

# 📚 Concepts Covered

- React Native Components
- React Hooks
- Expo APIs
- Drawer Navigation
- Bottom Tabs
- Expo Router
- Form Validation
- Device Permissions
- FlatList
- ScrollView
- Alerts
- Clipboard API
- Camera API
- GPS Location
- Contacts API

---

# 🎯 Learning Outcomes

After completing this project, I learned:

- Building production-style React Native applications
- Working with native device features
- Navigation using Expo Router
- React Hooks (useState & useEffect)
- Form validation
- Reusable Components
- Mobile UI Design
- Permission Handling
- API Integration

---

# 👨‍💻 Developer

**Hemang Singh**

📧 Email: hemangsingh47@gmail.com

🔗 GitHub:
https://github.com/hemangsingh-47

💼 LinkedIn:
https://www.linkedin.com/in/hemang-singh-solanki-b866b23ab/

---

# ⭐ Support

If you found this project helpful,

⭐ Star this repository

🍴 Fork this project

🐛 Open an issue for suggestions or bugs

---

# 📄 License

This project is licensed under the MIT License.

---

## ❤️ Thank You

Thank you for visiting this repository.

If you like this project, don't forget to ⭐ the repository.
