import { memo } from 'react'

import { EditableText, withLogger } from '@/common'
import { TaskEntity } from '@/features'

const Task = memo(({ task }: { task: TaskEntity }) => {
  return <EditableText taskID={task.id} />
})

export const LoggedTask = withLogger(Task)
