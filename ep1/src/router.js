import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './containers/home'
import AddAddress from './containers/address/AddAddress'
import PageNotFound from './components/layout/PageNotFound'
import Covid19 from './containers/covid_19'
import Covid19Search from './containers/covid_19/Search'

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/address-add">
        <AddAddress />
      </Route>
      <Route path="/covid-19" exact>
        <Covid19 />
      </Route>
      <Route path="/covid-19/search">
        <Covid19Search />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  </Router>
)