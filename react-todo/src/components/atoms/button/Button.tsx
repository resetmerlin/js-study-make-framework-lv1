/* eslint-disable react/button-has-type */
import { TButtonElementProps } from '../../../types'
import styles from './Button.module.scss'

interface IButton extends TButtonElementProps {
    type: 'button' | 'submit'
}
export default function Button({
    children,
    type = 'button',
    ...props
}: IButton) {
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <button {...props} type={type} className={styles.button}>
            {children}
        </button>
    )
}
