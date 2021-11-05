import eKaizen from '../../Assets/Images/logo.png'
import {Nav, Logo, User} from './style'
import { Link } from 'react-router-dom'

const Navbar = () => {    
    return(
        <Nav>
        <Logo>
        <img src={eKaizen}/>
        <h1>Ferramenta De Orçamentos</h1>
        </Logo>
        <User><h1>Felipe Albuquerque </h1></User>
        </Nav>
        
    )
}

export default Navbar