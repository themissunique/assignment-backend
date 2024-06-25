# Backend Assignment

## Project Description

This project is a Node.js backend API that provides CRUD operations for managing users. The API is built with the following technologies and tools:

- **Node.js** with **Express** for the server.
- **Mongoose** for MongoDB object modeling.
- **Joi** for data validation.
- **JWT** for authentication.
- **Webpack** for module bundling.
- **Jest** and **Supertest** for unit testing.
- **dotenv** for managing environment variables.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Running Tests](#running-tests)
- [Environment Variables](#environment-variables)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v12.x or later)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/backend-assignment.git
   cd backend-assignment
2. Install dependencies:
```bash
npm install
```
3. Set up environment variables:

Create a .env file in the root of the project and add the following:

```.env

DB_URI=mongodb://localhost:27017/worko
SECRET_KEY=your_jwt_secret_key
PORT=5000
```
4. Run the application:

```bash
npm start
```
5.
API Endpoints
GET /worko/user: List all users.

GET /worko/user/:userId: Get user details by ID.

POST /worko/user: Create a new user.

PUT /worko/user/:userId: Update a user.

PATCH /worko/user/:userId: Partially update a user.

DELETE /worko/user/:userId: Soft delete a user.

Required Payload for User

```json
Copy code
{
"email": "string",
"name": "string",
"age": "number",
"city": "string",
"zipCode": "string"
}
```
6. Field Validation:

Email: Must be a valid email format.

Zip Code: Must be a valid string.

Id: Must be present in POST, PUT, DELETE requests.

7. Authentication:
All API endpoints are protected and require a valid JWT token in the Authorization header in the format Bearer <token>.


8. Running Tests:
To run the tests, use:

```bash
Copy code
npm test
```
Environment Variables
The following environment variables are used in the project:

DB_URI: MongoDB connection string.

SECRET_KEY: Secret key for JWT.

PORT: Port number for the server.


License:

This project is licensed under the MIT License.

