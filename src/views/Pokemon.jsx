// 7 iremos a buscar informacion de la api y para eso importamos las funciones de react
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
//8.1 importamos card para q se muestre la info
import Card from "../components/Card.jsx"
import Charts from "../components/Charts.jsx"


const Pokemon = () => {
    // 7 el campo vairable de la ruta es name, por lo tanto desde ahi traemos la info de la api
    const { name } = useParams()
    const [pokemon, setPokemon] = useState({})
    //creamos un timeout para que se vea un loading de data y se agrega en el main
    const [loading, setloading] = useState (true)
    //7.1 generamos una ruta variable desde la api----Card
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                setPokemon(json)
                setTimeout(()=> {
                    setloading(false)
                }, 2000)
            })
            .catch((e) => console.log(e))

    }, [])
    //8.2 traemos como prop la data y la presntamos 
    return (
        <main>
            { loading ? <p>Cargando...</p> : <Card pokemon={pokemon}></Card> }
            { loading ? <p></p> : <Charts pokemon= {pokemon}></Charts>}
        </main>
    )


}

export default Pokemon