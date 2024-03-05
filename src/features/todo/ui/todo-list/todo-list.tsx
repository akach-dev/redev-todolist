import { AddItemForm, Button, Card, Typography, withLogger } from '@/common'
import { useTodoList } from '@/features/todo'
import Task from '@/features/todo/ui/task/task'

import s from './todo-list.module.scss'

const TodoList = () => {
  const { addTask, changeTaskStatus, changeTaskTitle, logOutHandler, removeTask, tasks } =
    useTodoList()

  return (
    <div className={s.todolist}>
      <Card className={s.root}>
        <Typography className={s.title} variant={'large'}>
          Get things done!
        </Typography>
        <AddItemForm addItem={addTask} />

        <ul>
          {tasks.map(task => (
            <Task
              changeTaskStatus={changeTaskStatus}
              changeTaskTitle={changeTaskTitle}
              key={task.id}
              removeTask={removeTask}
              task={task}
            />
          ))}
        </ul>
      </Card>
      <Button className={s.logout} onClick={logOutHandler} variant={'link'}>
        Log out user
      </Button>
    </div>
  )
}

export default withLogger(TodoList)
