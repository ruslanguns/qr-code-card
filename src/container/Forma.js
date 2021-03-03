import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

const Forma = () => {

  const [qrData, setQrData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    twitter: '',
    website: '',
    submit: ''
  })

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const nombre = e.target.nombre.value
    const correo = e.target.correo.value
    const telefono = e.target.telefono.value
    const twitter = e.target.twitter.value
    const website = e.target.website.value
    const submit = e.target.submit.value

    setQrData({
      nombre,
      correo,
      telefono,
      twitter,
      website,
      submit
    })
  }

  useEffect(() => {
    console.log(qrData)
  }, [qrData])

  return (
    <Card>
      <h4>Formulario para crear Código QR</h4>
      <form onSubmit={handleOnSubmit} className="m-4">
      <div className="form-group">
        <input name="nombre" type="text" className="form-control" placeholder="Nombre"/>
      </div>
      <div className="form-group mt-3">
        <input name="cargo" type="text" className="form-control" placeholder="Cargo"/>
      </div>
      <div className="form-group mt-3">
        <input name="correo" type="text" className="form-control" placeholder="Email"/>
      </div>
      <div className="form-group mt-3">
        <input name="telefono" type="text" className="form-control" placeholder="Teléfono"/>
      </div>
      <div className="form-group mt-3">
        <input name="twitter" type="text" className="form-control" placeholder="Twitter"/>
      </div>
      <div className="form-group mt-3">
        <input name="website" type="text" className="form-control" placeholder="Website"/>
      </div>

      <button type="submit" className="btn btn-primary btn-lg btn-block m-4">Generar Código QR</button>
      </form>
    </Card>
  )
}

export default Forma
