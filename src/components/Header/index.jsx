import {Link} from 'react-router-dom'
import logo from '../../assets/svg/logo.svg'
import React, { useState } from 'react'

const nav = [{title:"Accueil", nav:"home"},
             {title:"A Propos", nav:"about"}
            ]
const element = nav



function Header(){
    const [NavOn, setNavOn] = useState(Array(element.length).fill(false))


    const swapNav = (index) => {
        setNavOn(index)
    }

    return(
        <header>
            <nav>
                <img src={logo} alt="logo kasa" />
                <div id='navigation'>
                {element.map((item, index) => (
                    <Link key={index} to={`/${item.nav}`} id={item.nav} className={`underline-${NavOn === index ? 'on':'off'}`} onClick={()=>swapNav(index)}>{item.title}</Link>
                ))}
                    
                    
                </div>
            </nav>
        </header>
    )

}
export default Header