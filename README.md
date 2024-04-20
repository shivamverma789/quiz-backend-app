# Quiz App

## Description
The Quiz App is a web application that allows users to create, participate in, and manage quizzes. Users can create quizzes with multiple-choice questions, set start and end times, and view the results after completion.

## Features
- Create quizzes with multiple-choice questions
- Set start and end times for quizzes
- Participate in quizzes and view results
- User authentication and registration
- There are three status for the quiz :
    (active - currently active , finished - end date completed result not published , resultAvailable - results available after 5 min of endDate )

## Installation
1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Set up environment variables by creating a `.env` file and adding necessary configurations for reference there is  .env.example file .
4. Start the server using `npm start`.

## Usage
1. Register a new account or log in with existing credentials.
2. Create a new quiz or participate in available quizzes.
3. View quiz results and statistics.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- JWT for authentication
- Bcrypt for password hashing
- Cron for scheduled tasks
- Rate limiter for limiting requests

## Project Structure
```
quiz-api/
│
├── config/
│   ├── database.js       # MongoDB connection configuration
│   ├── cron.js           # Cron job configuration
│   └── auth.js           # JWT authentication configuration
│
├── controllers/
│   ├── quizController.js # Controller for quiz-related operations
│   └── authController.js # Controller for authentication
│
├── models/
│   ├── quizModel.js      # Mongoose schema and model for quizzes
│   └── userModel.js      # Mongoose schema and model for users
│
├── routes/
│   ├── quizRoutes.js     # Routes for quiz-related endpoints
│   └── authRoutes.js     # Routes for authentication endpoints
│
├── middleware/
│   ├── authMiddleware.js # Middleware for JWT authentication
│   ├── errorMiddleware.js# Middleware for error handling
│   └── rateLimit.js      # Middleware for rate limiting
│
├── services/
│   ├── quizService.js    # Service layer for quiz-related logic
│
├── index.js              # Main entry point of the application
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## API Documentation

### Authentication API
- **POST /auth/register**
  - Description: Register a new user.
  - Request Body:
    ```json
    {
      "username": "example_user",
      "password": "password123",
      "email": "user@example.com"
    }
    ```
  - Response:
    ```json
    {
      "message": "User registered successfully"
    }
    ```

- **POST /auth/login**
  - Description: Log in with existing credentials.
  - Request Body:
    ```json
    {
      "username": "example_user",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```

### Quiz API
- **POST /quizzes**
  - Description: Create a new quiz.
  - Request Body:
    ```json
    {
      "question": "What is the capital of France?",
      "options": ["London", "Berlin", "Paris", "Rome"],
      "rightAnswer": 2,
      "startDate": "2024-04-20T12:00:00Z",
      "endDate": "2024-04-20T13:00:00Z"
    }
    ```
  - Response:
    ```json
    {
      "message": "Quiz created successfully"
    }
    ```

- **GET /quizzes/active**
  - Description: Retrieve the currently active quiz.
  - Response:
    ```json
    {
      "question": "What is the capital of France?",
      "options": ["London", "Berlin", "Paris", "Rome"],
      "startDate": "2024-04-20T12:00:00Z",
      "endDate": "2024-04-20T13:00:00Z",
      "status": "active"
    }
    ```

- **GET /quizzes/:id/result**
  - Description: Retrieve the result of a quiz by ID.
  - Response:
    ```json
    {
      "correctAnswer": "Paris"
    }
    ```

- **GET /quizzes/all**
  - Description: Retrieve all quizzes, including inactive, active, and finished ones.
  - Response:
    ```json
    [
      {
        "question": "What is the capital of France?",
        "options": ["London", "Berlin", "Paris", "Rome"],
        "startDate": "2024-04-20T12:00:00Z",
        "endDate": "2024-04-20T13:00:00Z",
        "status": "active"
      },
      {
        "question": "What is the capital of Germany?",
        "options": ["London", "Berlin", "Paris", "Rome"],
        "startDate": "2024-04-21T12:00:00Z",
        "endDate": "2024-04-21T13:00:00Z",
        "status": "finished"
      },
      {
        "question": "What is the capital of Italy?",
        "options": ["London", "Berlin", "Paris", "Rome"],
        "startDate": "2024-04-22T12:00:00Z",
        "endDate": "2024-04-22T13:00:00Z",
        "status": "resultAvailable"
      }
    ]

    ```


## Credits
- Shivam Verma 

## Contact
For inquiries or support, please contact [shivamjitendraverma@gmail.com](mailto:shivamjitendraverma@example.com).
