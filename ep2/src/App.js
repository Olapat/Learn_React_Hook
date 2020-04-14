import React from 'react'
import { AppContext } from './context'
import { useThemesContext } from './context/ThemeContext'
import { useFetchTasksContext } from './context/FetchTasksContext'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import LoadingBar from './components/layout/LoadingBar'

const App = () => {

  const [theme, toggleTheme] = useThemesContext()
  const fetchTask = useFetchTasksContext()
  
  const valueContext = {
    fetchTask: fetchTask,
    theme: { themeColor: theme, toggleTheme }
  }

  return (
    <AppContext.Provider value={valueContext}>
      <>
      <Header />
      <LoadingBar />
      <Sidebar />
      <main>
        
      </main>
      </>
    </AppContext.Provider>
  )
}

export default App
