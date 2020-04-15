import React, { useContext } from 'react'
import AppContext from '../../../context'

const Home = () => {
  const { setLoading } = useContext(AppContext)

  const startLoading = () => {
    setLoading(true)
    setTimeout(() => { setLoading(false) }, 3000)
  }

  return (
    <div className='home'>
      <h1>Home Page</h1>
      <button onClick={startLoading}>start</button>
    </div>
  )
}

export default Home
