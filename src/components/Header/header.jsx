import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/svg/logo.svg'
import React from 'react'

const nav = [
    { title: "Accueil", nav: "home" },
    { title: "A Propos", nav: "about" }
]
const element = nav

function Header() {
    const location = useLocation()

    return (
        <header>
            <nav>
                <img src={logo} alt="logo kasa" />
                <div id='navigation'>
                    {element.map((item, index) => {
                        const isActive = location.pathname === `/${item.nav}`
                        return (
                            <Link
                                key={index}
                                to={`/${item.nav}`}
                                id={item.nav}
                                className={`underline-${isActive ? 'on' : 'off'}`}
                                >
                                {item.title}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </header>
    );
}

export default Header;