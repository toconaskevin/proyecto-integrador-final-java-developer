import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import SearchBar from './components/SearchBar.jsx'
import MovieCard from './components/MovieCard.jsx'
import MovieDetail from './components/MovieDetail.jsx'
import movies from './data/movies.jsx'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm} />
      <Switch>
        <Route exact path="/">
          <div className="movie-list">
            {filteredMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </Route>
        <Route path="/movie/:id">
          <MovieDetail />
        </Route>
      </Switch>
    </>
  )
}

export default App