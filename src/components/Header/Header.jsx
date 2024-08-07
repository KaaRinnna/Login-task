import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                icon
                <nav>
                    <p>Home</p>
                    <p>Contact</p>
                    <p>About</p>
                </nav>
            </div>
            <div>
                <button>Login</button>
            </div>
        </header>
    )
}