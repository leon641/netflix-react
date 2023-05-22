import React, { useEffect, useState } from 'react'
import '../assets/style/Row.css'
import axios from '../axios'

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([])
  

  const base_url = 'https://image.tmdb.org/t/p/original/'

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  function findMovie(movieId) {
    const movie = movies.find(movie => movie.id === movieId)
    console.log(movie);
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <>
            <div className="img-container">
              <img
                className={`row-poster ${isLargeRow && 'row-posterLarge'}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
              <div className="row-buttons">
                <button className="row-button">Play</button>
                <button onClick={() => findMovie(movie.id)} className="row-button">Info</button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default Row
