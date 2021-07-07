import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppContext } from './context'
import { useThemesContext } from './context/ThemeContext'
import { useFetchTasksContext } from './context/FetchTasksContext'
import AppLayout from './components/layout/AppLayout'
import routes from './routers'

const App = () => {

  const [theme, toggleTheme] = useThemesContext()
  const fetchTask = useFetchTasksContext()

  const valueContext = {
    fetchTask: fetchTask,
    theme: { themeColor: theme, toggleTheme }
  }

  return (
    <AppContext.Provider value={valueContext}>
      <AppLayout>
        <Router>
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} {...route} />
            ))}
          </Switch>
        </Router>
      </AppLayout>
    </AppContext.Provider>
  )
}

export default App
