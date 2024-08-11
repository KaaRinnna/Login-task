import styles from './Header.module.css';
import icon from '../../assets/icon.svg';
import { Button } from '../Button/Button';
import dots from '../../assets/three-dots.svg';
import { useState } from 'react';

export const Header = (image) => {
    const [visible, setVisible] = useState(false);

    const handleOpen = () => {
        setVisible(true);
    };

    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <img src={icon} />
                <nav className={styles.nav}>
                    <a className={styles.selected} href='#'>Home</a>
                    <a href='#'>Contact</a>
                    <a href='#'>About</a>
                </nav>
            </div>
            <div className={styles.right}>
                <Button mode='primary'>Login</Button>
            </div>
            <div className={styles.menu}>
                <img onClick={handleOpen} src={dots}/>
            </div>
        </header>
    )
}