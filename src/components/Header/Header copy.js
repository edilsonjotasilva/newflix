import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
        
        <span>Ediflix</span>
        
        <nav>
        <NavLink to="/" exact className={({ isActive }) => classNames({ [styles.active]: isActive })}>Home</NavLink>
        <NavLink to="/Favorites" className={({ isActive }) => classNames({ [styles.active]: isActive })}>Favoritos</NavLink>
        <NavLink to="/Search" className={({ isActive }) => classNames({ [styles.active]: isActive })}>Pesquisar</NavLink>
        <NavLink to="/cadastre" className={({ isActive }) => classNames({ [styles.active]: isActive })}>Cadastrar</NavLink>
    {
        // <>
        //     <div class="row">
        //         <div class="col d-flex">
        //             <div class="col-sm-12 col-md-3">
        //                 <Link to="/">Home</Link>
        //             </div>
        //             <div class="col-sm-12 col-md-3">
        //                 <Link to="/search">Pesquisar</Link>
        //             </div>
        //             <div class="col-sm-12 col-md-3">
        //                 <Link to="/favorites">Favoritos</Link>
        //             </div>
        //             <div class="col-sm-12 col-md-3">
        //                 <Link to="/cadastre">Cadastrar</Link>
        //             </div>
        //         </div>
        //     </div>
        // </>
    }
    
    
    </nav>
    </header>
);
}

export default Header;