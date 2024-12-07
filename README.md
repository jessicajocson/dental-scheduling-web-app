# Dental Office Online Scheduling System

## Demo Video
![Dental Office Online Scheduling System Video Demo](https://github.com/jessicajocson/dental-scheduling-web-app/blob/main/web-app.jpeg)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Tailwind](https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4) ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![AWSRds](https://img.shields.io/badge/AWS_RDS-MySQL-FF9900?style=for-the-badge&logo=mysql&logoColor=white) 

## Overview

This web application allows dental patients to schedule and manage their dental appointments online. It consists of a frontend built with React.js, a backend using Node.js, and a MySQL database. The application is deployed on AWS.


## 📋 <a name="table">Table of Contents</a>

1. [Folder Structure](#folder-structure)
2. [Environment Variables](#environment-variables)
3. [Database Schema](#database-schema)
4. [Features](#features)
5. [Setup and Installation](#setup-and-installation)

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

## Database Schema

### Tables

- **Client**
  - `id`: Unique identifier.
  - `full_name`: Full name of the client.
  - `phone`: Phone number.
  - `email`: Email address.
  - `password`: Encrypted password.
- **Doctor**
  - `id`: Unique identifier.
  - `full_name`: Full name of the doctor.
  - `email`: Email address.
  - `phone`: Phone number.
- **Service**
  - `id`: Unique identifier.
  - `name`: Name of the service.
  - `value`: Value of the service.
  - `description`: Description of the service.
- **Schedule**
  - `id`: Unique identifier.
  - `doctor_id`: Foreign key referencing the doctor.
  - `schedule_day`: Day of the schedule.
  - `schedule_time`: Time of the schedule.
- **Appointment**
  - `id`: Unique identifier.
  - `schedule_id`: Foreign key referencing the schedule.
  - `client_id`: Foreign key referencing the client.
  - `service_id`: Foreign key referencing the service.
  - `appointment_date`: Date of the appointment.
  - `status`: Status of the appointment.
  - `remarks`: Additional remarks.

## Features

1. **Frontend (React)**

   - **Home Page**: Displays dental office's information, services, and a call to action to schedule an appointment.
   - **Booking Page**: Allows users to select a dentist, view available slots, and schedule an appointment.
   - **User Dashboard**: Users can view, reschedule, or cancel their appointments after logging in.

2. **Backend (Node.js)**

   - **User Authentication**: Registration, login, and profile management.
   - **API Endpoints**: RESTful API endpoints for CRUD operations on appointments.

3. **Database (mySQL/AWS RDS)**
   - **Schema Design**: Structured tables for clients, doctors, services, schedules, and appointments.
   - **CRUD Operations**: Support for creating, reading, and deleting records.


## Setup and Installation

1. **Backend Setup**

   - Clone the repository.
   - Navigate to the `backend` directory.
   - Create a new `.env` file with the required environment variables.
   - Run `npm install` to install dependencies.
   - Run `npm start` to start the server.

2. **Frontend Setup**

   - Navigate to the `frontend` directory.
   - Create a new `.env` file with the required environment variables.
   - Run `npm install` to install dependencies.
   - Run `npm run dev` to start the development server.

3. **Database Setup**

   - AWS RDS Setup
        - Create an RDS Instance:
        - Navigate to the RDS service in the AWS Management Console.
        - Create a new MySQL database instance.
        - Configure instance settings:
            - Select appropriate instance class (e.g., db.t3.micro for development).
            - Set up storage and backups.
        - Configure connectivity:
            - Update security group rules to allow access from your Kubernetes worker nodes.
        - Database Credentials:
            - Save the endpoint, username, and password for use in your backend application.
        - Access Configuration:
            - Update the backend application’s database configuration file (e.g., `config/database.js`)
    - Create a MySQL database using the provided schema.

4. **Access the Application:**

   - Open your browser and navigate to the frontend URL (`http://localhost:5173`)
