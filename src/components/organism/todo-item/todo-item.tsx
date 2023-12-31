import {
  TodoItemStyled,
  TodoListCheckBoxLabelStyled,
  TodoListCheckInputStyled,
  TodoListLabelStyled
} from './todo-item.styled'
import React, { useId } from 'react'
import { type DragAndDropEvent, type Todo } from '@models/todo.interface.ts'
import { useTodoStore } from '@store/todo.store.ts'
import { Button } from '@components/atoms/button'
import { CheckIcon, DeleteIcon } from '@components/atoms/icons/icons.tsx'
import { AnimatePresence } from 'framer-motion'

interface Props extends React.HTMLAttributes<HTMLLIElement> {
  dragStart: () => void
  dragEnter: () => void
  dragLeave: (event: DragAndDropEvent) => void
  dragOver: (event: DragAndDropEvent) => void
  drop: () => void
  todo: Todo
}

export function TodoItem (props: Props) {
  const { dragStart, dragEnter, drop, children, todo, dragLeave, dragOver } = props
  const { toggleTodo, deleteTodo } = useTodoStore()
  const listId = useId()

  const handleInputChange = () => {
    toggleTodo({
      id: todo.id
    })
  }

  const handleDeleteTodo = () => {
    deleteTodo({
      id: todo.id
    })
  }

  return (
    <>
      <AnimatePresence>
          <TodoItemStyled
            onDragStart={dragStart}
            onDragEnter={dragEnter}
            onDragEnd={drop}
            onDragOver={dragOver}
            onDragLeave={dragLeave}
            className={todo.completed ? 'complete' : ''}
            draggable
          >
            <TodoListCheckInputStyled
              aria-label='checkbox'
              aria-hidden={true}
              id={listId}
              onChange={handleInputChange}
              type='checkbox'
              checked={todo.completed} />
            <TodoListCheckBoxLabelStyled htmlFor={listId}>
              <CheckIcon/>
            </TodoListCheckBoxLabelStyled>
            <TodoListLabelStyled htmlFor={listId}>{children}</TodoListLabelStyled>
            <Button aria-label='remove-todo' onClick={handleDeleteTodo}>
              <DeleteIcon/>
            </Button>
          </TodoItemStyled>
      </AnimatePresence>
    </>
  )
}
