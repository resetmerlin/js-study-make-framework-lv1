import { useCallback, useState } from 'react'
import { Container, ToDoList, TodoLists } from './components'

type ITodoList = {
    order: number
    title: string
    subtitle: string
}

function App() {
    const [todoLists, setTodoLists] = useState<ITodoList[] | []>([])

    const addTodoList = useCallback(() => {
        const dummyData = {
            order: todoLists?.length
                ? todoLists[todoLists.length - 1].order + 1
                : 0,
            title: 'You can delete it',
            subtitle: 'Edit via delete button',
        }

        setTodoLists((oldArray) => [...oldArray, dummyData])
    }, [todoLists, setTodoLists])

    const deleteTodoList = useCallback(
        (order: number) => {
            setTodoLists(
                [...todoLists].filter((todoList) => order !== todoList.order)
            )
        },
        [todoLists, setTodoLists]
    )

    const editTodoList = useCallback(
        (event: React.FormEvent<HTMLFormElement>, order: number) => {
            event.preventDefault()

            const target = event.target as typeof event.target & {
                title: { value: string }
                subtitle: { value: string }
            }

            const title = target.title.value
            const subtitle = target.subtitle.value

            if (!title.length && !subtitle.length) return

            const currentTodo = [...todoLists].filter(
                (todoList) => order === todoList.order
            )

            // Change title, subtitle from form submit
            currentTodo[0].title = title
            currentTodo[0].subtitle = subtitle

            const newToDoLists = [...todoLists].map((todoList) => {
                if (todoList.order === order) {
                    return currentTodo[0]
                }
                return todoList
            })

            setTodoLists(newToDoLists)
        },
        [todoLists, setTodoLists]
    )

    return (
        <Container>
            <TodoLists addTodoList={addTodoList}>
                {todoLists &&
                    todoLists.map((todoList) => (
                        <ToDoList
                            key={todoList.order}
                            title={todoList?.title}
                            subtitle={todoList?.subtitle}
                            deleteTodoList={deleteTodoList}
                            editTodoList={editTodoList}
                            order={todoList.order}
                        />
                    ))}
            </TodoLists>
        </Container>
    )
}

export default App
