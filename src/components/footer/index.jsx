import logo from '../assets/logo.png'
import '../styles/style.sass'

function Footer(){
    return(
       <footer>
            <img src={logo} alt="Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
       </footer>
    )
}

export default Footer;