import { memo } from 'react'

import { EditableText } from '@/common'
import { TaskEntity } from '@/features'

export const Task = memo(({ task }: { task: TaskEntity }) => {
  return <EditableText taskID={task.id} />
})
