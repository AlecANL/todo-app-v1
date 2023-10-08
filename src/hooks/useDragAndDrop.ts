import { useRef } from 'react'
import { type DragAndDropEvent, type Todo } from '@models/todo.interface.ts'
import { useTodoStore } from '@store/todo.store.ts'

export function useDragAndDrop (todos: Todo[]) {
  const { setDragAndDropOrderTodos } = useTodoStore()
  const dragItem = useRef(Infinity)
  const dragOverItem = useRef(Infinity)

  const onDragStart = (idx: number) => {
    dragItem.current = idx
  }

  const onDragEnter = (idx: number) => {
    dragOverItem.current = idx
  }

  const onDrop = () => {
    const copyTodos = [...todos]
    const dragItemContent = copyTodos[dragItem.current]
    copyTodos.splice(dragItem.current, 1)
    copyTodos.splice(dragOverItem.current, 0, dragItemContent)
    dragItem.current = Infinity
    dragOverItem.current = Infinity
    setDragAndDropOrderTodos(copyTodos)
  }

  const onDragOver = (event: DragAndDropEvent) => {
    event.preventDefault()
  }

  const onDragLeave = (event: DragAndDropEvent) => {
    event.preventDefault()
  }

  return {
    onDragStart,
    onDragEnter,
    onDrop,
    onDragOver,
    onDragLeave
  }
}
