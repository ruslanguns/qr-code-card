import React from 'react'
import { APP_NAME, PERSONA, QR_CODE } from './constants'
import Encabezado from './Encabezado'
import { InformacionContacto } from './InformacionContacto'

const App = () => {
  return (
    <>
      <Encabezado name={APP_NAME} />
      <InformacionContacto persona={PERSONA} qrCode={QR_CODE}/>
    </>
  )
}

export default App
