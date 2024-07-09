# My Node.js and Express Application

This is a RESTful API built with Node.js and Express for managing users.

## Table of Contents
- [Installation](#installation)
- [Running the Application](#Running-the-Application)
- [API Endpoints](#API-Endpoints)
- [Examples of Requests and Responses](#Examples-of-Requests-and-Responses)

## Installation
1. Clone the Repository
```bash
git clone https://github.com/Final-Project-Dec2023/Dec2023.git
cd Dec2023
```
2. Install Dependencies:
Make sure you have Node.js installed on your machine.
```bash 
npm install
```
3. Set up environment variables:
Create a .env file in the root directory of your project and add the following environment variables:
```env
PORT=3000
MONGODB_URL = mongodb://localhost:27017/your-database-name
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
The server should now be running on http://localhost:3000.

## API Endpoints
### Users
- Sign up a user
    - POST/api/auht/signup
- Log in a user
    - POST/api/auth/login
- Reset password
    - GET/api/auth/reset-password
- Get all users
    - GET/api/users
- Retrieve a specific user by ID.
    - GET/api/user/:userId
- Update an existing user
    - PUT/api/user/update 
-  Delete a user
    - DELETE/api/delete/:userId
-  New user Signup.
    - POST /api/auth/signup:

## Examples of Requests and Responses
### Retrieve All Users



















