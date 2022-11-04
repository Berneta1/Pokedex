//5 creamos el navbar en componentes y traemos navlinks para que marquen las paginas en la q estamos con la funcion isActive
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const setActive = ({ isActive }) => isActive ? 'active' : undefined

    return (
        <header>
            <h3>PokeDex</h3>

{/* 5.1 creamos los navlinks y agregamos la palabra end para que haga match solo con la principal y no con las otras.-->Pokemones */}
            <nav>
                <NavLink to="/" className={setActive} end> Home</NavLink>
                <NavLink to="/pokemones" className={setActive}> Pokemones</NavLink>
            </nav>
        </header>
    )



}

export default Navbar