import styles from './Header.module.css';
import icon from '../../assets/icon.svg';
import { Button } from '../Button/Button';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <img src={icon} />
                <nav className={styles.nav}>
                    <a href='#'>Home</a>
                    <a href='#'>Contact</a>
                    <a href='#'>About</a>
                </nav>
            </div>
            <div className={styles.right}>
                <Button mode='primary'>Login</Button>
            </div>
        </header>
    )
}