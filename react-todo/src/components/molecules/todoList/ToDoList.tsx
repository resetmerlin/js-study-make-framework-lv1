// eslint-disable-next-line import/no-cycle
import { Button, Checkbox } from '../..'
import styles from './ToDoList.module.scss'

type IProps = {
    title: string
    subtitle: string
    order: number
    deleteTodoList: (order: number) => void
}
export default function ToDoList({
    title,
    subtitle,
    deleteTodoList,
    order,
}: IProps) {
    return (
        <div className={styles.todolist}>
            <div>
                <Checkbox />
            </div>
            <div>
                <span className={styles.title}>{title}</span>
                <span className={styles.subtitle}>{subtitle}</span>
            </div>
            <Button type="button" onClick={() => deleteTodoList(order)}>
                Delete
            </Button>
        </div>
    )
}
