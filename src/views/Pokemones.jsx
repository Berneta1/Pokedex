//6 nos traemos las funciones, hooks, etc.
import Context from "../context/context.js"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

const Pokemones = () => {
    const navigate = useNavigate()
    const { data } = useContext(Context)

// 6.2 creamos un estado para guardar la informacion al hacer click en algun componente de la lista 
    const [seleccionado, setSeleccionado] = useState('')
//6.3 creamos una funciona para navegar a una ruta dinamica  
    const verDetalle = ()=> {
        navigate(`/pokemones/${seleccionado}`)
// opcion con ternario 
//      !(seleecionado || seleccionado == '0) ? navigate('/pokemones/${seleccionado}') : ''
    }

    return(
        <main>
            <h1>Selecciona un Pokemon</h1>
{/* 6.1 creamos el select con un menu despegable y sus options, agregamos manualmente un option con valor por defecto 'seleccionar' y despues con un map para el resto de los valortes  */}
            <select className='pkmn-select' onChange={(e)=> setSeleccionado(e.target.value)}>
                <option value="0">Seleccionar</option>
                {
                    data.map((pkmn)=> {
                        return (
                            <option key={pkmn.name} value={pkmn.name}>{pkmn.name}</option>
                        )
                    })
                }
            </select>
            {/*6.4 se agrega boton con funcion onClick para que ejecute la funcion verDetalle y se le agrega una clase para desactivar el btn cuando el valor cliekado sea distinto de seleccionado -->pokemon*/}
            <button className={ `btn ${ (!seleccionado || seleccionado == '0') ? 'disabled' : ''}`} onClick={()=> verDetalle()}>Ver detalle</button>
        </main>
    )

}

export default Pokemones