import styles from './Header.module.css';
import icon from '../../assets/icon.svg';
import { Button } from '../Button/Button';
import dots from '../../assets/three-dots.svg';
import { useState } from 'react';

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
                <a className={styles.selected} href='#'>Home</a>
                <a href='#'>Contact</a>
                <a href='#'>About</a>
                <Button onClick={onLogin} mode='primary'>Login</Button>
            </nav>
             
            <div className={styles.menu}>
                <img onClick={toggleMenu} src={dots}/>
            </div>     
        </header>
    )
}