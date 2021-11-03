import eKaizen from '../../Assets/Images/logo.png'
import {Nav, Logo} from './style'

const Navbar = () => {    
    return(
        <Nav>
        <Logo>
        <img src={eKaizen}/>
        <h1>Ferramenta De Orçamentos</h1>
        </Logo>
        </Nav>
        
    )
}

export default Navbar