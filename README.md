# My Node.js and Express Application

## Table of Contents
- [Overview](#overview)
    - [Features](#features)
- [Installation](#installation)
- [Running the Application](#Running-the-Application)
- [API Endpoints](#API-Endpoints)
    - [User Authentication](#user-authentication)
    - [User Management](#user-management)
- [Examples of Requests and Responses](#Examples-of-Requests-and-Responses)


## Overview
This is a RESTful API built with Node.js and Express for managing user resources.

### Features
- Create, Read, Update, and Delete (CRUD) operations for user resources.
- Basic input validation.
- Error handling.
- JWT authentication.
- Cloudinary integration for image upload.

## Installation
1. Clone the Repository
```bash
git clone https://github.com/glamorous-chi/RESTful-API
cd RESTful-API
```
- Folder Structure
```
RESTful API/
├── src/
│   ├── controllers/
│   │   ├── auth.js
│   │   └── user.js
│   ├── helpers/
│   │   ├── auth.js
│   │   └── cloudinary.config.js
│   │   └── multer.js
│   ├── middlewares/
│   │   ├── auth.js
│   ├── models/
│   │   ├── user.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── user.js
|   ├── db.config.js
├── .env
├── index.js
├── package.json
├── README.md
```

2. Install Dependencies:
Make sure you have Node.js installed on your machine.
```bash 
npm install
```
3. Set up environment variables:
Create a .env file in the root directory of your project and add the following environment variables:
```env
PORT = 3000
MONGODB_URL = mongodb+srv://27017/your-database-name/....
JWT_SECRET = your_jwt_secret
CLOUDINARY_CLOUD_NAME = your_cloudinary_cloud_name
CLOUDINARY_API_KEY = your_cloudinary_api_key
CLOUDINARY_API_SECRET = your_cloudinary_api_secret
```
4. Set up the database:
Make sure you have MongoDB installed and running on your local machine. The MONGODB_URL environment variable should point to the address of your MongoDB database that is running on your local computer.

## Running the Application
1. Start the server:
```bash 
npm start
```
The server will start on the port specified in the .env file (default is 3000).

## API Endpoints

### User Authentication

#### New user Signup.
- **Endpoint** `POST /api/auth/signup`

- **Request Body(raw):**
```json
{
    "name": "Paul",
    "email": "paulo@gmail.com",
    "password": "paul123"
}
```

- **Response:**
```json
{
    "success": true,
    "message": "User registerd successfully",
    "user": {
        "name": "Paul",
        "email": "paulo@gmail.com",
        "password": "$2b$12$tyFngyg/sxZbO3/Vpqjwv.7rv.ZWadEkfJyGVkM6A4B216qZjQwj6",
        "role": 0,
        "_id": "668ce0588ad4be3ac1772499",
        "createdAt": "2024-07-09T07:01:44.236Z",
        "updatedAt": "2024-07-09T07:01:44.236Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhjZTA1ODhhZDRiZTNhYzE3NzI0OTkiLCJpYXQiOjE3MjA1MDg1MDQsImV4cCI6MTcyMTExMzMwNH0.jov-SRexLLh_c4KQbbAz0iYip738HxCZeI77KrfAU1k"
}
```

#### User Login
- **Endpoint** `POST/api/auth/login`

- **Request Body(raw):**
```json
{
    "email": "paulo@gmail.com",
    "password": "paul123"
}
```

- **Response:**
```json
{
    "success": true,
    "message": "Login successful",
    "user": {
        "_id": "668ce0588ad4be3ac1772499",
        "name": "Paul",
        "email": "paulo@gmail.com",
        "password": "$2b$12$tyFngyg/sxZbO3/Vpqjwv.7rv.ZWadEkfJyGVkM6A4B216qZjQwj6",
        "role": 0,
        "createdAt": "2024-07-09T07:01:44.236Z",
        "updatedAt": "2024-07-09T07:01:44.236Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhjZTA1ODhhZDRiZTNhYzE3NzI0OTkiLCJpYXQiOjE3MjA1MDg2MjAsImV4cCI6MTcyMDU5NTAyMH0.JZMVJxyepNwt0Quk4GRTL8EmWOTYCn55w_chRctsRSU"
}
```

### User Management

#### Get all users.
- **Endpoint** `GET /api/users`

- **Request Body(raw):** `None`

- **Response:**
```
{
    "success": true,
    "message": "Users retrieved successfully",
    "users": [
        {
            "_id": "668b3b24330e0f0fe640ee66",
            "name": "Chioma",
            "email": "chi123@gmail.com",
            "role": 1,
            "createdAt": "2024-07-08T01:04:36.408Z",
            "updatedAt": "2024-07-09T03:09:53.688Z",
            "__v": 0
        },
        {
            "_id": "668b3d6a330e0f0fe640ee69",
            "name": "JJ",
            "email": "jj123@gmail.com",
            "role": 0,
            "createdAt": "2024-07-08T01:14:18.892Z",
            "updatedAt": "2024-07-08T01:14:18.892Z",
            "__v": 0
        },
        {
            "_id": "668b3dbc330e0f0fe640ee6c",
            "name": "Nonye",
            "email": "nonye@gmail.com",
            "role": 0,
            "createdAt": "2024-07-08T01:15:40.830Z",
            "updatedAt": "2024-07-08T01:15:40.830Z",
            "__v": 0
        }
    ]
}
```

#### Retrieve a specific user by ID.
 - **Endpoint** `GET/api/user/:userId`

 - **Request Body(raw):** `None`

 - **Response:**
 ```
 {
    "success": true,
    "message": "User retrieved successfully",
    "user": {
        "_id": "668ce0588ad4be3ac1772499",
        "name": "Paul",
        "email": "paulo@gmail.com",
        "password": "$2b$12$tyFngyg/sxZbO3/Vpqjwv.7rv.ZWadEkfJyGVkM6A4B216qZjQwj6",
        "role": 0,
        "createdAt": "2024-07-09T07:01:44.236Z",
        "updatedAt": "2024-07-09T07:01:44.236Z",
        "__v": 0
    }
}
 ```


#### Update an existing user
- **Endpoint** `PUT/api/user/update`

- **Request Headers:** `"Authorization": "Bearer jwt_token"`

- **Request Body(raw):**
 ```
 {   
    "password": "newPassword"
}
```

 - **Response:**
 ```
{
    "success": true,
    "message": "User Profile updated successfully",
    "updatedUser": {
        "_id": "668ce0588ad4be3ac1772499",
        "name": "Paul",
        "email": "paulo@gmail.com",
        "password": "newPassword",
        "role": 0,
        "createdAt": "2024-07-09T07:01:44.236Z",
        "updatedAt": "2024-07-09T07:58:24.090Z",
        "__v": 0
    }
}
 ```

#### Delete a user
- **Endpoint** `DELETE/api/delete/:userId`

 - **Request Headers:** `"Authorization": "Bearer jwt_token"`(Of Admin)

 - **Request Body(raw):** `None`

  - **Response:**
 ```
{
    "success": true,
    "message": "User deleted successfully"
}
 ```

## Examples of Requests and Responses
### Retrieve All Users



















