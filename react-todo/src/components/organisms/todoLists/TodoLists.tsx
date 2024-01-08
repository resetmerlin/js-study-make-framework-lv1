/* eslint-disable import/no-cycle */
import { PropsWithChildren } from 'react'
import styles from './TodoLists.module.scss'
import { Button } from '../..'

interface IProps extends PropsWithChildren {
    addTodoList: () => void
}

export default function TodoLists({ children, addTodoList }: IProps) {
    return (
        <div className={styles.todolists__wrapper}>
            <div className={styles.todolists__title}>
                <h2>TODO LIST</h2>
            </div>

            <Button onClick={addTodoList} type="button">
                Add
            </Button>
            <div className={styles.todolists__content}>{children}</div>
        </div>
    )
}
