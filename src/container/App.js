import React from 'react'
import { APP_NAME } from '../constants'
import { Content } from './Content'
import Encabezado from './Encabezado'

const App = () => {
  return (
    <>
      <Encabezado name={APP_NAME} />
      <Content />
    </>
  )
}

export default App
