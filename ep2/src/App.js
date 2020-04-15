import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppContext from './context'
import AppLayout from './components/layout/AppLayout'
import routes from './routers'

const App = () => {
  const [loading, setLoading] = useState(false)

  const valueContext = { loading, setLoading }

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
