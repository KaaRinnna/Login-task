import styles from './Button.module.css';

export const Button = ({children, mode = 'base' | 'primary', type, onClick}) => {
    const buttonStyleMap = {
        'base': styles.base,
        'primary': styles.primary,
    }

    return (
        <button type={type} onClick={onClick} className={buttonStyleMap[mode]}>{children}</button>
    )
}