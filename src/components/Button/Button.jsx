import styles from './Button.module.css';

export const Button = ({children, mode = 'base' | 'primary'}) => {
    const buttonStyleMap = {
        'base': styles.base,
        'primary': styles.primary,
    }

    return (
        <button className={buttonStyleMap[mode]}>{children}</button>
    )
}