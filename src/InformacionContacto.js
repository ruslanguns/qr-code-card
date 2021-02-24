import React from 'react'

export const InformacionContacto = ({ persona, qrCode }) => {
  const { nombre, cargo, correo, twitter, website } = persona
  return (
    <div className="container mt-4">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4 d-flex justify-content-center">
              <img 
                style={{ width: '150px' }}
                className="mt-3"
                src={qrCode}
                alt={ `Código QR de ${nombre}` }
                />
            </div>
            <div className="col-md-8">
              <div className="card-body text-center">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">
                  {cargo} <br />
                  {correo} <br />
                  Twitter: {twitter} <br />
                  <a href={website}>{website}</a>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
  )
}
