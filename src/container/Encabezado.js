
import React from 'react'
import Navigation from '../components/Navigation'

const Encabezado = ({ name }) => {
  return (
    <Navigation>
      <div className="container-md">
        <span className="navbar-brand">{ name }</span>
      </div>
    </Navigation>
  )
}

export default Encabezado