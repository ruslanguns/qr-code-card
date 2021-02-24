
import React from 'react'

const Encabezado = ({ name }) => {
  return (
    <header>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-md">
            <span className="navbar-brand">{ name }</span>
          </div>
        </nav>
      </header>
  )
}

export default Encabezado