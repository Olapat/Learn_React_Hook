import React from 'react'
import useAppContext from '../../context'

const Header = () => {
  const { theme } = useAppContext();
  return (
    <header className={theme.themeColor}>
      <h1>Header</h1>
      <button onClick={theme.toggleTheme}>
        toggle
      </button>
    </header>
  )
}

export default Header
