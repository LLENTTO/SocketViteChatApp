# ChatSocketVite

#### ChatSocketVite is a real-time chat application built with the MERN stack, using Vite for the frontend and Socket.IO for real-time communication. The app provides a seamless messaging experience with features such as authentication, image uploads, and live status updates.

🚀 Features

Real-time Messaging: Instant communication using Socket.IO.

User Authentication: Secure login/signup with JWT authentication.

Media Support: Upload and preview images in chat.

Online Status Indicators: See when users are online.

Responsive UI: Optimized for both desktop and mobile.

Database Integration: Using MongoDB Atlas for cloud storage.

Dockerized Deployment: Easy deployment with Docker and Docker Compose.

🛠️ Tech Stack

Frontend:

React

Vite

Tailwind CSS

Zustand (State Management)

Socket.IO Client

Backend:

Node.js

Express.js

Socket.IO

MongoDB (Atlas)

Cloudinary (for media storage)

JWT (Authentication)

Mongoose

💂️ Installation and Setup

1. Clone the Repository

git clone https://github.com/LLENTTO/chatSocketVite.git
cd chatSocketVite

2. Backend Setup

Navigate to the backend directory:

cd backend

Install dependencies:

npm install

Create a .env file in the backend/ directory with the following:

PORT=5002
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

Start the backend server:

npm start

3. Frontend Setup

Navigate to the frontend directory:

cd frontend

Install dependencies:

npm install

Create a .env file in the frontend/ directory with:

VITE_BACKEND_URL=http://localhost:5002

Start the frontend server:

npm run dev

🔧 Testing

To run unit and integration tests, use:

# Run backend tests
cd backend
npm test

# Run frontend tests
cd frontend
npm test

💡 Future Improvements

Add push notifications for real-time alerts.

Implement group chat functionality.

Optimize database queries for scalability.

Improve unit and integration test coverage.

🙏 Contributing

Contributions are welcome! Follow these steps:

Fork the repository.

Create a new branch (feature/new-feature).

Commit your changes.

Push to your fork and submit a pull request.

📞 Contact

If you have any questions, feel free to contact me:

GitHub: @LLENTTO

Email: your-email@example.com

Enjoy coding! 🚀