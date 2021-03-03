import React from 'react'
import { PropTypes } from 'prop-types';

const Card = ({ imagenSrc, imagenAlt, children }) => {
  return (
    <div className="card" style={{ width: '300px' }}>
      <div className="col d-flex justify-content-center mt-4">
        <img style={{ width: '150px' }} className="card-img-top" src={imagenSrc} alt={imagenAlt || 'card headerxxxxxxxxxx'} />
      </div>
      <div className="card-body text-center">
        { children }
      </div>
    </div>
  )
}

Card.propTypes  = {
  imagenSrc: PropTypes.string.isRequired,
  imagenAlt: PropTypes.string
}

export default Card