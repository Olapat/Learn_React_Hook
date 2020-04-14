import { createContext, useContext } from 'react'
import FetchTasksContext from './FetchTasksContext'
import ThemeContext from './ThemeContext'

const context = {
  fetchTask: FetchTasksContext,
  themeContext: ThemeContext
}

export const AppContext = createContext(context)

export default () => {
  return useContext(AppContext)
}
