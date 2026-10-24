# Rate Repository App

A mobile application for exploring GitHub repositories, reviewing repository details, and sharing ratings. 

## Overview

Rate Repository App is a React Native project focused on mobile application development and GraphQL-based data communication. It provides an opportunity to explore how a mobile frontend interacts with a GraphQL API and manages application navigation, forms, and authentication.

## Tech Stack

- **React Native** — Cross-platform mobile application development
- **Expo** — Development and build tooling
- **JavaScript** — Application logic
- **Apollo Client** — GraphQL data fetching and state management
- **GraphQL** — API communication
- **React Router Native** — Navigation
- **Formik** — Form state management
- **Yup** — Form validation
- **Jest** — Testing
- **ESLint** — Code quality and linting

## Getting Started

### Prerequisites

Make sure you have installed:

- Node.js and npm
- Git
- Expo Go for testing on a compatible mobile device, or an Android/iOS development environment

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nooobie00/rate-repository-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd rate-repository-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure the GraphQL API endpoint required by the application. Check the Apollo Client configuration in `src/utils/apolloClient.js` and the Expo configuration to determine the expected endpoint and environment variables.

5. Start the Expo development server:

   ```bash
   npm start
   ```

Follow the Expo CLI instructions to open the application on a supported device or emulator.

## Available Scripts

| Command | Description |
|---|---|
| `npm start` | Start the Expo development server |
| `npm run android` | Start the app for Android |
| `npm run ios` | Start the app for iOS |
| `npm run web` | Start the web version |
| `npm test` | Run the Jest test suite |
| `npm run lint` | Run ESLint |

## What I Learned

Through this project, I practised concepts related to:

- Building mobile interfaces with React Native and Expo
- Integrating GraphQL APIs with Apollo Client
- Organizing application components and navigation
- Managing forms and validating user input
- Working with authentication storage
- Writing and running application tests

## Project Status

This project was developed as part of my Full Stack Open learning journey. It demonstrates my practical work with React Native, GraphQL, and mobile application development.


## Acknowledgements

Developed as part of [Full Stack Open](https://fullstackopen.com/en/), a web and mobile development course offered by the University of Helsinki.
