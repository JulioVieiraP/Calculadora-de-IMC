import { useState } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Tabela from './components/Tabela'

function App() {
const [imc, setimc] = useState(false)

  return (
    <div className='container'>
      <Header />
      <Formulario Resultado={setimc}/>
      <Tabela imc={imc}/>
    </div>
  )
}

export default App
