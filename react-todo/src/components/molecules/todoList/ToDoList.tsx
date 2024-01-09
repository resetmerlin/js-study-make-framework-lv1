// eslint-disable-next-line import/no-cycle
import { Button, Checkbox } from '../..'
import styles from './ToDoList.module.scss'

type IProps = {
    title: string
    subtitle: string
    order: number
    deleteTodoList: (order: number) => void
    editTodoList: (
        event: React.FormEvent<HTMLFormElement>,
        order: number
    ) => void
}
export default function ToDoList({
    title,
    subtitle,
    deleteTodoList,
    order,
    editTodoList,
}: IProps) {
    return (
        <form
            className={styles.todolist}
            onSubmit={(e) => editTodoList(e, order)}
        >
            <div>
                <Checkbox />
            </div>
            <div>
                <input
                    className={styles.title}
                    placeholder={title}
                    id="title"
                />
                <input
                    className={styles.subtitle}
                    placeholder={subtitle}
                    id="subtitle"
                />
            </div>
            <Button type="submit">Edit</Button>
            <Button type="button" onClick={() => deleteTodoList(order)}>
                Delete
            </Button>
        </form>
    )
}
