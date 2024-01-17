import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <h2>{movie.title}</h2>
      <p>Director: {movie.director}</p>
      <p>Year: {movie.year}</p>
    </Link>
  );
};

export default MovieCard;