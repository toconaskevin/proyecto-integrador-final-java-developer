import React from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetail.css';

const MovieDetail = ({ movies }) => {
    const { id } = useParams();
    const movieId = parseInt(id, 10);
    const movie = movies.find(movie => movie.id === movieId);
  
    if (!movie) {
      return <div>Película no encontrada</div>;
    }
  
    return (
      <div className="movie-detail">
        <h2>{movie.title}</h2>
        <p>Director: {movie.director}</p>
        <p>Year: {movie.year}</p>
      </div>
    );
  };

export default MovieDetail; 