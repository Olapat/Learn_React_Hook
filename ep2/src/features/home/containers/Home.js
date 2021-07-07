import React from 'react'
import useAppContext from '../../../context'

const Home = () => {
  const { fetchTask } = useAppContext()

  const startFetchTask = () => {
    fetchTask.fetchTasksStart('name')
    setTimeout(() => {
      fetchTask.fetchTasksClear()
    }, 3000)
  }

  return (
    <div className='home'>
      <h1>Home Page</h1>
      <button onClick={startFetchTask}>
        start
      </button>
    </div>
  )
}

export default Home
