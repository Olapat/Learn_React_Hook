import React from 'react'
import useAppContext from '../../context'

const LoadingBar = () => {
  const { fetchTask } = useAppContext()
  return (
    <div>
      {fetchTask.taskName}
      <button onClick={() => { fetchTask.fetchTasksStart('name') }}>
        12
      </button>
    </div>
  )
}

export default LoadingBar
