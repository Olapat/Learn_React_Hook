import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLayout from './components/layout/AppLayout'
import AppContext from './context'
import routes from './routers'

const App = () => {
  const [translation, setTranslation] = useState('en')

  const valueContext = {
    translation: {
      trans: translation,
      setTranslation
    }
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
