import React from 'react'
import { PERSONA, QR_CODE } from '../constants'
import Forma from './Forma'
import { InformacionContacto } from './InformacionContacto'

export const Content = () => {
  return (
    <div className="container mt-4">
      {/* <InformacionContacto persona={PERSONA} qrCode={QR_CODE}  /> */}
      <Forma />
    </div>
  )
}
