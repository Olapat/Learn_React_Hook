import React, { useReducer } from 'react'
import users, { initialState } from '../reducers/users'

const NewHome = () => {
  const [state, dispatch] = useReducer(users, initialState)

  console.log('state in NewHome', state)
    return (
        <div>
            NewHome
        </div>
    )
}

export default NewHome
