import React from 'react'
import useAppContext from '../../context'

const LoadingScreen = () => {
  const { fetchTask } = useAppContext()
  return (
    <div className={`loading ${fetchTask.taskLoding ? 'show' : ''}`}>
      <div class="loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default LoadingScreen
