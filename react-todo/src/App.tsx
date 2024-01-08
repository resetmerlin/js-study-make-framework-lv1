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
            order: todoLists?.length,
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
                            order={todoList.order}
                        />
                    ))}
            </TodoLists>
        </Container>
    )
}

export default App
