const API = "https://www.omdbapi.com";

const MOVIES = [
  "Inception",
  "The Dark Knight",
  "Interstellar",
  "The Matrix",
  "The Shawshank Redemption",
  "The Godfather",
  "The Silence of the Lambs",
  "Schindler's List",
  "Pulp Fiction",
  "Forrest Gump",
  "The Prestige",
  "Gladiator",
  "The Departed"
];

export async function getRandomMovie() {
  const title = MOVIES[Math.floor(Math.random() * MOVIES.length)];

  const res = await fetch(
    `${API}/?apikey=${process.env.OMDB_KEY}&t=${encodeURIComponent(title)}`
  );

  const data = await res.json();
  
  return {
    title: data.Title,
    year: data.Year,
    genre: data.Genre?.split(",")[0],
    image: data.Poster,
  };
}
