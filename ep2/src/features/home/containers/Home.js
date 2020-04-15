import React, { useContext, useReducer } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import users, { initialState } from '../reducers/users'
import AppContext from '../../../context'
import language from '../../../locals'
import Form from './Form'

const Home = () => {
  const { translation } = useContext(AppContext)
  const history = useHistory()

  const [state, dispatch] = useReducer(users, initialState)

  console.log(state)

  const setTranTH = () => {
    translation.setTranslation('th')
  }

  const setTranEN = () => {
    translation.setTranslation('en')
  }

  const onAdd = values => {
    console.log(values)
    dispatch({
      type: 'create',
      payload: values
    })
  }

  console.log('state', state)

  return (
    <div className='home'>
      <h1>{language[translation.trans].welcome}</h1>
      <button onClick={setTranTH}>th</button>
      <button onClick={setTranEN}>en</button>
      <Form onAdd={onAdd} />
      <button onClick={() => history.push('/new-home')}>
        go to new-form
      </button>
    </div>
  )
}

export default Home
