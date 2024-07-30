import {Link} from 'react-router-dom'
import logo from '../svg/logo.svg'

function Header(){
    return(
        <header>
            <nav>
                <img src={logo} alt="logo kasa" />
                <div id='navigation'>
                    <Link to="/">Accueil</Link>
                    <Link to="/about">À propos</Link>
                </div>
            </nav>
        </header>
    )

}
export default Header