import {Link} from 'react-router-dom'
import logo from '../../assets/svg/logo.svg'



function Header(){
    return(
        <header>
            <nav>
                <img src={logo} alt="logo kasa" />
                <div id='navigation'>
                    <Link to="/" id='accueil' className='underline' onClick={()=>{
                        const accueil = document.getElementById('accueil')
                        const about = document.getElementById('about')
                        accueil.classList.add('underline')
                        about.classList.remove('underline')

                    }}>Accueil</Link>
                    <Link to="/about" id='about' onClick={()=>{
                        const accueil = document.getElementById('accueil')
                        const about = document.getElementById('about')
                        about.classList.add('underline')
                        accueil.classList.remove('underline')
                    }}>A Propos</Link>
                </div>
            </nav>
        </header>
    )

}
export default Header