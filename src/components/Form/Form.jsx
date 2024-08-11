import { useState } from 'react';
import { Button } from '../Button/Button';
import styles from './Form.module.css';

export const Form = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [image, setImage] = useState("")
    

    const onSubmit = (event) => {
        event.preventDefault();
        
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
                expiresInMins: 30,
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setImage(data.image);
        });
    }

    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <form className={styles.form} onSubmit={onSubmit}>
                <div className={styles.inputContainer}>
                    <label  htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className={styles.btn}>
                    <Button mode='base'>Cancel</Button>
                    <Button type="submit" className={styles.btn} mode='primary'>Login</Button>
                </div>
            </form>
        </div>
    )
}