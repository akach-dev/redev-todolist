import { instance } from '@/common'
import { TaskEntity, TaskResponse } from '@/features'
import { AxiosResponse } from 'axios'

export class TodosService {
  static addTask(data: { title: string }) {
    return instance.post<null, AxiosResponse<TaskEntity>, { title: string }>('api/todos', data)
  }
  static changeTaskStatus(id: number) {
    return instance.patch(`api/todos/${id}/isCompleted`)
  }
  static getTasks(token: string) {
    return instance.get<TaskResponse[]>('api/todos', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  }
  static removeTask(id: number) {
    return instance.delete(`api/todos/${id}`)
  }
  static updateTask(id: number, data: { title: string }) {
    return instance.patch<null, AxiosResponse<TaskEntity>, { title: string }>(
      `api/todos/${id}`,
      data
    )
  }
}
