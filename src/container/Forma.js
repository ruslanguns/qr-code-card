import React from 'react'
import Card from '../components/Card'

const Forma = () => {
  return (
    <Card>
      <h4>Formulario para crear Código QR</h4>
      <form className="m-4">
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Nombre"/>
      </div>
      <div className="form-group mt-3">
        <input type="text" className="form-control" placeholder="Cargo"/>
      </div>
      <div className="form-group mt-3">
        <input type="text" className="form-control" placeholder="Email"/>
      </div>
      <div className="form-group mt-3">
        <input type="text" className="form-control" placeholder="Teléfono"/>
      </div>
      <div className="form-group mt-3">
        <input type="text" className="form-control" placeholder="Twitter"/>
      </div>
      <div className="form-group mt-3">
        <input type="text" className="form-control" placeholder="Website"/>
      </div>

      <button className="btn btn-primary btn-lg btn-block m-4">Generar Código QR</button>
      </form>
    </Card>
  )
}

export default Forma
