import { useState } from 'react';
import { Button } from '../Button/Button';
import styles from './Form.module.css';

export const Form = ({setImage, setFormVisible}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
            alert('User logged in!');
            setImage(data.image);
            setFormVisible(false);
        });
    };

    const onCancel = () => {
        window.location.reload(true);
    };

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
                    <Button type="button" onClick={onCancel} mode='base'>Cancel</Button>
                    <Button type="submit" className={styles.btn} mode='primary'>Login</Button>
                </div>
            </form>
        </div>
        
    )
}