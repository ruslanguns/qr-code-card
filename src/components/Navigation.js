
import React from 'react'

const Navigation = ({ children  }) => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        { children }
      </nav>
    </>
  )
}

export default Navigation
