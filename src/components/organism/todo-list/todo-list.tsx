import { TodoListStyled } from '@components/organism/todo-list/todo-list.styled.tsx'
import { TodoItem } from '@components/organism/todo-item'
import { type Todo } from '@models/todo.interface.ts'
import { useDragAndDrop } from '@hooks/useDragAndDrop.ts'
import { IllustrationEmptyIcon } from '@components/atoms/icons/icons.tsx'

interface Props {
  todos: Todo[]
}
export function TodoList (props: Props) {
  const { todos } = props
  const { onDrop, onDragEnter, onDragLeave, onDragOver, onDragStart } = useDragAndDrop(todos)

  return (
    <>
      <TodoListStyled>
        {
          todos.map((todo, idx) => (
            <TodoItem
              key={todo.id}
              dragEnter={() => { onDragEnter(idx) }}
              dragStart={() => { onDragStart(idx) }}
              dragLeave={onDragLeave}
              dragOver={onDragOver}
              drop={onDrop}
              todo={todo}
            >
              {todo.todo}
            </TodoItem>
          ))
        }
        {
          todos.length <= 0
            ? (
              <div className='empty'>
                <IllustrationEmptyIcon/>
                <p>There are no todos</p>
              </div>
              )
            : null
        }
      </TodoListStyled>
    </>
  )
}
