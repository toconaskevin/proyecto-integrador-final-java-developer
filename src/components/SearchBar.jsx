import { useState } from 'react'
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('')

  const handleChange = (event) => {
    setTerm(event.target.value)
    onSearch(event.target.value)
  }

  return (
    <div className='search-container'>
      <input
        type="text"
        className="search-input"
        placeholder="¿Qué pelicula estás buscando?"
        value={term}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchBar