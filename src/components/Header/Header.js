import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Header.module.css';
import { useState } from 'react';

function Header() {
    const [ showMenu, setShowMenu ] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header className={styles.header}>
        
        <span className={styles.mark}>Ediflix</span>
        
        <nav
        className={`${styles.menuSandwich} ${ showMenu ? styles.show : '' }`}
        onClick={toggleMenu}
        >
    
        <NavLink to="/" exact className={({ isActive }) => classNames({ [styles.active]: isActive })}>Home</NavLink>
        <NavLink to="/Favorites" className={({ isActive }) => classNames({ [styles.active]: isActive })}>Favoritos</NavLink>
        <NavLink to="/Search" className={({ isActive }) => classNames({ [styles.active]: isActive })}>Pesquisar</NavLink>
        <NavLink to="/cadastre" className={({ isActive }) => classNames({ [styles.active]: isActive })}>Cadastrar</NavLink>
        </nav>
        <div
            className={styles.menuButton}
            onClick={toggleMenu}
        >
            <span className={styles.linha}></span>
            <span className={styles.linha}></span>
            <span className={styles.linha}></span>
        </div>
        </header>
);
}

export default Header;
