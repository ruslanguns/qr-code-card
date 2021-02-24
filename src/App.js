import React from 'react'

const App = () => {
  const qrCore = 'https://static.hosteltur.com/app/public/uploads/img/releases/2020/01/09/L_173453_imaginads.jpg'
  const { nombre, cargo, correo, website, twitter } = { // destructuring
    nombre: 'Hector Vásquez',
    cargo: 'Front-end developer',
    correo: 'hector@example.com',
    website: 'http://hector.dev',
    twitter: '@hectorExample'
  }

  return (
    <>
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-md">
            <span className="navbar-brand">QR Card</span>
          </div>
        </nav>
      </header>
      <div className="container mt-4">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4 d-flex justify-content-center">
              <img 
                style={{ width: '150px' }}
                className="mt-3"
                src={qrCore}
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
    </>
  )
}

export default App
