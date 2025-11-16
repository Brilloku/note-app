# MERN Notes Application

A full-stack notes application built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- Create, read, update, and delete notes
- Responsive React frontend
- RESTful API with Express.js
- MongoDB Atlas for data storage
- Basic error handling and logging
- Ready for deployment on various platforms

## Project Structure

```
mern-notes-app/
├── backend/
│   ├── middleware/
│   │   └── error.js
│   ├── models/
│   │   └── Note.js
│   ├── routes/
│   │   └── notes.js
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── NoteForm.js
│   │   │   ├── NoteItem.js
│   │   │   └── NotesList.js
│   │   ├── App.js
│   │   ├── index.css
│   │   └── index.js
│   ├── .env
│   └── package.json
├── .github/
│   └── workflows/
│       ├── backend-deploy.yml
│       └── frontend-deploy.yml
├── README.md
└── TODO.md
```

## API Endpoints

- `GET /api/notes` - Get all notes
- `GET /api/notes/:id` - Get a single note
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- Git

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```
   cp .env.example .env
   ```

4. Update the `MONGODB_URI` in `.env` with your MongoDB Atlas connection string.

5. Start the development server:
   ```
   npm run dev
   ```

The backend will run on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

The frontend will run on `http://localhost:3000`.

## Deployment

### Backend Deployment

The backend is configured for deployment on Render, Railway, or Heroku. Make sure to set the environment variables in your deployment platform.

### Frontend Deployment

The frontend can be deployed on Vercel, Netlify, or GitHub Pages. Update the `REACT_APP_API_URL` in the `.env` file to point to your deployed backend.

### CI/CD

GitHub Actions workflows are set up for automated deployment. Push your code to GitHub to trigger the workflows.

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB, Mongoose, Sentry (monitoring)
- **Frontend**: React, Axios
- **Deployment**: GitHub Actions, Render/Railway/Heroku, Vercel/Netlify/GitHub Pages
- **Other**: CORS, Morgan (logging), Dotenv

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
