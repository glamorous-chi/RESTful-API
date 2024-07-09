# My Node.js and Express Application

## Table of Contents
- [Overview](#overview)
    - [Features](#features)
- [Installation](#installation)
- [Running the Application](#Running-the-Application)
- [API Endpoints](#API-Endpoints)
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
Make sure you have MongoDB installed and running on your local machine. The MONGODB_URL environment variable should point to your local MongoDB instance.

## Running the Application
1. Start the server:
```bash 
npm start
```
The server will start on the port specified in the .env file (default is 3000).

## API Endpoints
### Authentication
- New user Signup.
    - POST /api/auth/signup

#### Body(raw):
```
{
    "name": "Paul",
    "email": "paulo@gmail.com",
    "password": "paul123"
}
```

#### Response:
```
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
- User Login
    - POST/api/auth/login

#### Body(raw):
```
{
    "email": "paulo@gmail.com",
    "password": "paul123"
}
```

#### Response:
```
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

### Users
- Get all users
    - GET/api/users
- Retrieve a specific user by ID.
    - GET/api/user/:userId
- Update an existing user
    - PUT/api/user/update 
-  Delete a user
    - DELETE/api/delete/:userId

## Examples of Requests and Responses
### Retrieve All Users



















