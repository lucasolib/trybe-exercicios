const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());
const moviesPath = path.resolve(__dirname, './movies.json');

const allMovies = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    const movies = JSON.parse(data);
    return movies;
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
};

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const films = await allMovies();
  const film = films.find((movie) => movie.id === Number(id));
  if (!film) return res.status(404).json({ message: 'Film not found' });
  return res.status(200).json({ film });
});

app.get('/movies', async (req, res) => {
  const films = await allMovies();
  if (!films) return res.status(404).json({ message: 'No movies found' });
  return res.status(200).json({ films });
});

app.post('/movies', async (req, res) => {
  try {
    const movies = await allMovies();
    const { movie, price } = req.body;
    const newMovie = {
      id: movies[movies.length - 1].id + 1,
      movie,
      price,
    };
    const films = JSON.stringify([...movies, newMovie]);
    await fs.writeFile(moviesPath, films);
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { movie, price } = req.body;
    const movies = await allMovies();
    const indexMovie = movies.findIndex((film) => film.id === Number(id));
    movies[indexMovie] = { id: Number(id), movie, price };
    const updateMovies = JSON.stringify(movies, null, 2);
    await fs.writeFile(moviesPath, updateMovies);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await allMovies();
    const movie = movies.filter((film) => film.id !== Number(id));
    const updateMovies = JSON.stringify(movie, null, 2);
    await fs.writeFile(moviesPath, updateMovies);
    return res.status(204).end();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = app;