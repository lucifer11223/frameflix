Frameflix – Movie Guessing Game

Description:
Frameflix is an interactive web-based movie guessing game built with Next.js, React, and MongoDB. Players try to guess movies based on frames, earn points, and compete on a global leaderboard. Each player has a unique ID, ensuring scores are tracked and accumulated correctly. The game fetches movie data from the OMDb API and displays engaging results with a terminal-style UI.

Features:

1  Random movie selection for each round.
2  Player score tracking with unique player ID.
3  Accumulated scores and global ranking on a leaderboard.
4  Submit scores and view leaderboard in real-time.
5  Clean, minimal neon terminal-style UI.

Tech Stack:
  
1  Frontend: Next.js (App Router), React, Tailwind CSS
2  Backend: Next.js API Routes, MongoDB (Mongoose)
3  APIs: OMDb API for movie data 
4  Utilities: uuid for unique player IDs

Usage:
  Clone the repository
  Install dependencies: npm install
  
  Set up .env with:
    MONGODB_URI=your_mongodb_connection_string
    OMDB_KEY=your_omdb_api_key


Run the development server: npm run dev

Open http://localhost:3000 to play the game
