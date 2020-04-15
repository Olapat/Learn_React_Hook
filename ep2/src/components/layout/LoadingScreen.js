import React, { useContext } from 'react'
import AppContext from '../../context'

const LoadingScreen = () => {
  const { loading } = useContext(AppContext)
  return (
    <div className={`loading ${loading ? 'show' : ''}`}>
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default LoadingScreen
