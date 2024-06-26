import './App.css'
import responseMovies from "./mocks/with-results.json"
import noResponseMovies from "./mocks/no-results.json"

function App() {
  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0

  return (
    <div className='page'>
    <header>
      <h1>Buscador de películas</h1>
      <form className='form'>
        <input placeholder="Avengers..." />
        <button type="submit">Buscar</button>
      </form>
      </header>
      <main>
        {hasMovies ?
        (<ul>
          {movies.map((movie)=>(
            <li key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <p>{movie.year}</p>
              <p>{movie.Type}</p>
              <img src={movie.Poster} alt={movie.Title} />
            </li>
          ))}
        </ul>  )
        :
        <p>No hay peliculas asociadas con esta busqueda</p>
      }
      </main>
    </div>
  )
}

export default App
