import { EditableText } from '@/common'
import { TaskEntity } from '@/features'

export const Task = ({
  changeTaskStatus,
  changeTaskTitle,
  removeTask,
  task,
}: {
  changeTaskStatus: (id: number, isCompleted: boolean) => void
  changeTaskTitle: (id: number, title: string) => void
  removeTask: (id: number) => void
  task: TaskEntity
}) => {
  const changeTaskTitleHandler = (title: string) => changeTaskTitle(task.id, title)

  const changeTaskStatusHandler = (isCompleted: boolean) => changeTaskStatus(task.id, isCompleted)

  const removeTaskHandler = () => removeTask(task.id)

  return (
    <EditableText
      changeTaskStatusHandler={changeTaskStatusHandler}
      isCompleted={task.isCompleted}
      onChange={changeTaskTitleHandler}
      removeTask={removeTaskHandler}
      value={task.title}
    />
  )
}
