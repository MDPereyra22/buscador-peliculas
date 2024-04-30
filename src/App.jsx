import './App.css'

function App() {

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
        <h2>Aquí van los resultados de las películas</h2>
      </main>
    </div>
  )
}

export default App
