import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import LoadingScreen from './LoadingScreen'

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        {children}
      </main>
      <LoadingScreen />
    </>
  )
}

export default AppLayout
