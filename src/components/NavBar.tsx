import React from "react";
import { NavLink } from "react-router-dom";


export const NavBar: React.FC = () => (
    <nav>
        <div className="nav-wrapper purple darken-2 px1">
            <NavLink to="/" className="brand-logo">React + typeScript</NavLink>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/">Список дел</NavLink></li>
                <li><NavLink to="/about">Информация</NavLink></li>
            </ul>
        </div>
    </nav>
)