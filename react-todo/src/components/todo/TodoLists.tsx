import { Button } from '../button'
import { Checkbox } from '../checkbox'
import styles from './TodoLists.module.scss'

export default function TodoLists() {
    return (
        <div className={styles.todolists__wrapper}>
            <h2 className={styles.todolists__title}>TODO LIST</h2>
            <Button />
            <div className={styles.todolists__content}>
                <div className={styles.todolist}>
                    <div>
                        <Checkbox />
                    </div>
                    <div>
                        <span className={styles.title}>
                            Create React Project
                        </span>
                        <span className={styles.subtitle}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Impedit dolorem vero, facere alias dolores
                            ullam explicabo eligendi veniam. Omnis nulla vero
                            est itaque quasi. Facilis totam pariatur quasi optio
                            tempora.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
