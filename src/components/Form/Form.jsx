import { Button } from '../Button/Button';
import styles from './Form.module.css';

export const Form = () => {
    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <form className={styles.form}>
                <div className={styles.inputContainer}>
                    <label  htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div className={styles.btn}>
                    <Button mode='base'>Cancel</Button>
                    <Button className={styles.btn} mode='primary'>Login</Button>
                </div>
            </form>
        </div>
    )
}