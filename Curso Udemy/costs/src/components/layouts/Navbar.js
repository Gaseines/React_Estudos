import style from './Navbar.module.css'

import { Link } from 'react-router-dom'

import Container from './Container'
import logo from '../../img/costs_logo.png'

function Navbar() {
    return (
        <nav className={style.navbar}>
            <Container>
                <Link to="/"><img src={logo} alt="Logo" /></Link>
                <ul className={style.list}>
                    <li className={style.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={style.item}>
                        <Link to="/projects">Projetos</Link>
                    </li>
                    <li className={style.item}>
                        <Link to="/contact">Contato</Link>
                    </li>
                    <li className={style.item}>
                        <Link to="/company">Empresa</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar