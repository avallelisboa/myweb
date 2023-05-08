import React from 'react'
import { useState } from 'react'

export const Navbar = () => {
    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);    

    return (
        <nav className="container-fluid navbar navbar-expand-lg">
            <button className="navbar-toggler" onClick={()=>setIsNavbarCollapsed(!isNavbarCollapsed)} type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <aside className={`row ${isNavbarCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarText">
                <ul className="col-lg-12 justify-content-center navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#index">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#aboutme">Sobre mi</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">Trabajos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contacto</a>
                    </li>
                </ul>
            </aside>
        </nav>
    );
}
