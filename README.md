# Dental Office Online Scheduling System

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Tailwind](https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4) ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

## Overview

This web application allows dental patients to schedule and manage their dental appointments online. It consists of a frontend built with React.js, a backend using Node.js, and a MySQL database. The application is deployed on AWS.

## Demo Video

## 📋 <a name="table">Table of Contents</a>

1. [Folder Structure](#folder-structure)
2. [System Architecture](#system-architecture)
3. [Database Schema](#database-schema)
4. [Features](#features)
5. [Quick Start](#quick-start)

## Folder Structure

### Backend

- **config**: Contains configuration files, such as `database.js` for managing the database connection.
- **controllers**: Manages request handling logic for various routes, e.g., `auth.controller.js`, `booking.controller.js`.
- **models**: Defines the database schemas and models for entities like `appointment.model.js`, `client.model.js`, `doctor.model.js`.
- **routes**: Includes route definitions, such as `auth.route.js`, `booking.route.js`.
- **services**: Contains the implementation of core logic, e.g., `auth.service.js`.
- **server.js**: Serves as the entry point for starting the backend server.

### Frontend

- **public**: Holds static assets like images that are publicly accessible.
- **src**: Primary source directory for the application.
  - **components**: Includes reusable React components, including their associated hooks for different application features.
        - **home-services**: Components and hooks related to the appointment booking functionality.
        - **footer**: Contains the footer component and its related hooks.
        - **navbar** Includes the navigation bar component and its associated hooks.
    - **register** Components and hooks for the user registration page.
    - **constants**: Stores application-wide constants.
    - **interfaces**: Contains TypeScript interfaces for defining data types.
    - **pages**: Pages which contain React components, including their associated hooks for different application features.
        - **book-appointment**: Components and hooks related to the appointment booking functionality.
        - **dashboard**: Components and hooks for user dashboard functionality.
        - **home**: Components and hooks for the home page.
        - **login**: Components and hooks for the login page.
    - **routes**: Manages route definitions and hooks for implementing protected routes.
    - **states**: Includes Redux slices and the store configuration.
    - **utils**:  Provides utility functions, including API request handlers.

## Environment Variables

### Frontend

- `VITE_APP_BASE_URL`: Base URL for API requests.

### Backend

- `DB_HOST`: Database host.
- `DB_USER`: Database user.
- `DB_PASSWORD`: Database password.
- `DB_DATABASE`: Database name.
- `JWT_SECRET`: Secret key for JWT authentication.