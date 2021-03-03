import React from 'react'
import Card from '../components/Card'

export const InformacionContacto = ({ persona, qrCode }) => {
  const { nombre, cargo, correo, twitter, website } = persona
  return (
    <div className="container mt-4">
      <Card imagenSrc={qrCode} imagenAlt={`Código QR de ${nombre}`}>
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">
          {cargo} <br />
          {correo} <br />
          Twitter: {twitter} <br />
          <a href={website}>{website}</a>
        </p>
      </Card>
    </div>
  )
}
