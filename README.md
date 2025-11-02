# Foodies: Cross-Platform Food Delivery App (React Native/TypeScript)

![GitHub last commit](https://img.shields.io/github/last-commit/MouazMidani/React_Practice_Foodies)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)
![Appwrite](https://img.shields.io/badge/Backend-Appwrite-FE1437)
![React Native](https://img.shields.io/badge/Framework-React%20Native-61DAFB)
![NativeWind](https://img.shields.io/badge/Styling-NativeWind-1f1f1f)

| Live Demo | GitHub Repository |
| :---: | :---: |
| [View Live Demo](https://react-practice-foodies.onrender.com) | [View Code on GitHub](https://github.com/MouazMidani/React_Practice_Foodies) |

## 📝 Project Description

**Foodies** is a full-stack, cross-platform food ordering application inspired by leading services like Talabat and Deliveroo.

It is built with **React Native** and **Expo** to ensure a single codebase runs seamlessly across iOS, Android, and Web platforms. The app utilizes **TypeScript** for strong type safety and is powered by **Appwrite** for robust authentication, data storage, and backend services. Styling is handled with **NativeWind (Tailwind CSS for React Native)**, delivering a modern, responsive, and visually appealing user interface with full dark/light mode support.

---

## ✨ Key Features

* **Dynamic Food Catalog:** Display dynamic food categories and offers using `FlatList`.
* **Smooth Navigation:** Seamless transitions and grouped layouts managed by **Expo Router**.
* **Full Authentication Flow:** Secure Sign In and Sign Up screens with grouped layouts and backend integration.
* **Global State Management:** Efficient **Cart management** using **Zustand** for global state.
* **Reusable UI:** Highly styled and reusable components built with **NativeWind/TailwindCSS** classes.
* **Cross-Platform Consistency:** Ensures responsiveness and native user experience across iOS, Android, and web.

---

## 💻 Tech Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | `React Native` & `Expo` | Core cross-platform development framework. |
| **Backend** | `Appwrite` | Open-source, self-hosted backend for authentication and database management. |
| **Language** | `TypeScript` | Adds static typing for improved code quality and maintainability. |
| **Routing** | `Expo Router` | File-based routing for native and web navigation. |
| **Styling** | `NativeWind` & `TailwindCSS` | Utility-first CSS framework adapted for React Native. |
| **State** | `Zustand` | Lightweight, fast, and scalable state management library. |
| **Monitoring** | `Sentry` | Error tracking and performance monitoring. |

---

## 🎬 Project Demo

### Video Preview
A quick look at the application flow and core features.

[Foodies App Preview Video](https://github.com/user-attachments/assets/b63e3fad-116d-49bc-a778-539104d37351)


### Screenshots
The authentication and home screens, showcasing the modern design and custom components.

| Sign Up Screen | Sign In Screen | Home Screen | Browse Screen | Cart Screen |
| :---: | :---: | :---: | :---: | :---: |
| ![Signup](https://github.com/user-attachments/assets/bded1268-d0d4-401a-9a1a-6315111db079) | ![Signin](https://github.com/user-attachments/assets/9b1aeef2-4478-4dc6-875d-ce7f457cca95) | ![Home](https://github.com/user-attachments/assets/2c5b312c-e4a0-43a9-ad20-55909d6c7f61) | ![Browse](https://github.com/user-attachments/assets/fe16aa11-39a9-40a5-89ce-ecd5ae976df4) | ![Cart](https://github.com/user-attachments/assets/44006632-1180-451b-b9ea-31bde33100a0) |

---

## 🛠️ Development Log (What I Did)

This log details the key steps and accomplishments throughout the development of the Foodies application, combining both initial setup and feature implementation.

### Phase 1: Setup, Styling, and Navigation
* Initialized the base **React Native Expo project** with **TypeScript** using the Cursor IDE.
* Configured **NativeWind (TailwindCSS)**, including the Expo Metro bundler, for full dark/light mode support.
* Established a **custom color palette** and typography, integrating **custom fonts (Quicksand)**, for a distinct food delivery aesthetic.
* Configured core native UX components: **Expo SafeAreaView**, **SplashScreen**, and **Font Loading**.
* Set up **Expo Router layouts and route groups** to separate authentication flows from the main application tabs.
* Developed core reusable UI components, including a dynamic **CartButton component** with a badge counter.
* Implemented conditional styling for offer cards using `clsx` to create an alternating, visually interesting layout.

### Phase 2: Backend Integration and Core Data Structure
* Installed and configured the **Appwrite SDK**, setting up environment variables for secure backend access.
* Designed a comprehensive **Database Architecture** tailored for a food ordering system, including collections for: **categories**, **menu** (items), **customizations**, and a **menu_customizations** join table.
* Implemented **database seeding** functionality to populate all backend collections with initial dummy data.
* Created a custom **`useAppwrite` hook** for efficient data fetching from the backend.

### Phase 3: Authentication and Main Features
* Designed the **User Collection** in Appwrite with necessary attributes (name, email, accountID, avatar) for persistent user management.
* Built highly **reusable custom components** (`CustomInput`, `CustomButton`) to streamline the authentication UI.
* Developed the **Sign In** and **Sign Up** UI pages, integrating them with the custom components and linking them to the Appwrite authentication services.
* Built the main **Home Screen** using a **FlatList** to effectively showcase food categories and daily offers.
* Developed the **Search and Filtering** screen, enabling users to search and filter menu items based on categories fetched from the backend.
* Integrated **Zustand** for efficient, global state management, specifically for handling the **Cart** state.
