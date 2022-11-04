//1.1 importamos el context y los views (Home, pokemones y pokemon.)
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Context from './context/context.js'
import { useState, useEffect } from 'react'

import Navbar from './components/Navbar.jsx'
import Home from './views/Home.jsx'
import Pokemon from './views/Pokemon.jsx'
import Pokemones from './views/Pokemones.jsx'

function App() {
  const [data, setData] = useState([])
  //4 creamos el estado global
  const globalState = { data }

  //3 traemos la api con useEffect para cargar la lista 
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((res) => res.json())
      .then((json) => setData(json.results))
      .catch((e) => console.log(e))
  }, [])

  return (
    <div className="App">
      {/*4.1 pasamos el provider con el value global -->navbar */}
      <Context.Provider value={globalState}>
        {/* 2 pasamos los hooks y creamos las rutas*/}
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/pokemones' element={<Pokemones />}></Route>
            <Route path='/pokemones/:name' element={<Pokemon />}></Route>

          </Routes>
        </BrowserRouter>
      </Context.Provider>

    </div>
  )
}

export default App
