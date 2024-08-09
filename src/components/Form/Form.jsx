import { Button } from '../Button/Button';
import styles from './Form.module.css';

export const Form = () => {
    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <form className={styles.form}>
                <input type="text" id="email" name="email" />
                <input type="password" id="password" name="password" />
                <Button mode='base'>Cancel</Button>
                <Button mode='primary'>Login</Button>
            </form>
        </div>
    )
}