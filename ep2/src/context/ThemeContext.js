import { useState } from 'react'
const themes = 'light' // 'dark'

export const useThemesContext = () => {
  const [theme, setTheme] = useState(() => themes)

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark')
    if (theme === 'dark') setTheme('light')
  }
  
  return [theme, toggleTheme]
}

export default themes
