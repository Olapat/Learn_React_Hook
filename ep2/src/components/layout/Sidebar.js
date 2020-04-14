import React from 'react'
import useAppContext from '../../context'

const Sidebar = () => {
  const { theme } = useAppContext();

  return (
    <aside className={theme.themeColor}>
      Sidebar
    </aside>
  )
}

export default Sidebar
