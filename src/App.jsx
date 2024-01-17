import { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import InfiniteScroll from 'react-infinite-scroll-component'
import SearchBar from './components/SearchBar.jsx'
import MovieCard from './components/MovieCard.jsx'
import MovieDetail from './components/MovieDetail.jsx'
import movies from './data/movies.jsx'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [movieList, setMovieList] = useState(movies.slice(0, 20))
  const location = useLocation()

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  useEffect(() => {
    if (location.pathname === '/') {
      setSearchTerm('')
    }
  }, [location])

  const fetchMoreData = () => {
    if (movieList.length < movies.length) {
      setMovieList(prevMovies => [
        ...prevMovies,
        ...movies.slice(prevMovies.length, prevMovies.length + 10)
      ])
    }
  }

  return (
    <>
      <Routes>
        <Route path="/" element={
          <div>
            <SearchBar onSearch={handleSearch} />
            <InfiniteScroll
              dataLength={movieList.length}
              next={fetchMoreData}
              hasMore={movieList.length < movies.length}
              loader={<h4>Loading...</h4>}
            >
              <div className="movie-list">
                {movieList.filter(movie =>
                  movie.title.toLowerCase().includes(searchTerm.toLowerCase())
                ).map(movie => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            </InfiniteScroll>
          </div>
        } />
        <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
      </Routes>
    </>
  )
}

export default App