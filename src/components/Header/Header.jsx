import styles from './Header.module.css';
import icon from '../../assets/icon.svg';
import { Button } from '../Button/Button';
import dots from '../../assets/three-dots.svg';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Header = ({image, onLogin}) => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <img src={image || icon} />
            </div>
            <nav className={`${styles.nav} ${menuVisible ? styles.menuNav : ''}`}>
                <NavLink className={({isActive}) => isActive ? styles.selected : undefined} to='/'>Home</NavLink>
                <NavLink className={({isActive}) => isActive ? styles.selected : undefined} to='/contact'>Contact</NavLink>
                <NavLink className={({isActive}) => isActive ? styles.selected : undefined} to='/about'>About</NavLink>
                <Button onClick={onLogin} mode='primary'>Login</Button>
            </nav>
            <div className={styles.menu}>
                <img onClick={toggleMenu} src={dots}/>
            </div>     
        </header>
    )
}