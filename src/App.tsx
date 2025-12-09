import { useState } from 'react'
import './App.css'
import Menu from './Menu'
import MenuFormulas from './pages/menuFormulas'
import LadderPlcCheatSheet from './componentes/LadderCheatSheet'
import InstalacionesDomesticas from './pages/InstalacionesDomesticas'

function App() {

  const [page, setPage] = useState('componentes');


  return (
    <>

      <div>
        <h1>Electrónica y Automatización Industrial</h1>
        <div className='card'>

          <p>Survila Gabriel - Desarrollador Full Stack</p>
          <p>email: surviladeveloper@gmail.com</p>
          <p>cel-WhatsApp: 11-5845-1937</p>
        </div>
        <div className='temaButtons'>
        <button onClick={() => setPage('componentes')}>Componentes</button>
        <button onClick={() => setPage('ladder')}>Comandos Ladder</button>
        <button onClick={() => setPage('formulas')}>Fórmulas</button>
        <button onClick={() => setPage('instalacionesDom')}>Instalaciones Domésticas</button>
        </div>

        <hr />
{page === 'componentes' && <Menu />}
{page === 'ladder' && <LadderPlcCheatSheet />}
{page === 'formulas' && <MenuFormulas />}
{page === 'instalacionesDom' && <InstalacionesDomesticas />}
      </div>
    </>
  )
}

export default App

