import { useState } from 'react'

const initialFetchTasks = {
  taskName: null,
  taskLoding: 0, // is percen
  taskMessage: null,
  taskStatus: null // 'success, error'
}

export const useFetchTasksContext = () => {
  const [fetchTasks, setFetchTasks] = useState(() => initialFetchTasks)

  const fetchTasksStart = (name) => {
    setFetchTasks({
      taskName: name,
      taskLoding: 0,
      taskMessage: null,
      taskStatus: null
    })
  }

  const fetchTasksError = (errorMsg) => {
    setFetchTasks(prev => ({
      ...prev,
      taskMessage: errorMsg,
      taskStatus: 'error'
    }))
  }

  const fetchTasksSuccess = (successMsg) => {
    setFetchTasks(prev => ({
      ...prev,
      taskMessage: successMsg,
      taskStatus: 'success'
    }))
  }

  const fetchTasksClear = () => {
    setFetchTasks(initialFetchTasks)
  }

  return {
    ...fetchTasks,
    fetchTasksStart,
    fetchTasksError,
    fetchTasksSuccess,
    fetchTasksClear
  }
}

export default initialFetchTasks
