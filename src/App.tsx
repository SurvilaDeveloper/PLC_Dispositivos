import { useState } from 'react'
import './App.css'
import Menu from './Menu'
import MenuFormulas from './pages/menuFormulas'

function App() {

  const [page, setPage] = useState('componentes');


  return (
    <>
      <div>
        <h1>Catálogo de Componentes de Automatización</h1>
        <p>Gabriel Survila</p>
        <p>cel: 11-5845-1937</p>
        <button onClick={() => setPage('componentes')}>Componentes</button>
        <button onClick={() => setPage('formulas')}>Fórmulas</button>
        <hr />
{page === 'componentes' && <Menu />}
{page === 'formulas' && <MenuFormulas />}
      </div>
    </>
  )
}

export default App

