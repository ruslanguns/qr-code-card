
import React from 'react'

const Navigation = ({ children  }) => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        { children }
      </nav>
    </header>
  )
}

export default Navigation
