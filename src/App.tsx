import { useState } from 'react'
import './App.css'
import Menu from './Menu'
import MenuFormulas from './pages/menuFormulas'
import LadderPlcCheatSheet from './componentes/LadderCheatSheet'
import InstalacionesDomesticas from './pages/InstalacionesDomesticas'
import InstalacionesIndustriales from './pages/InstalacionesIndustriales'

function App() {

  const [page, setPage] = useState('componentes');


  return (
    <>

      <div>
        <h1>Electricidad y Electrónica</h1>
        <div className='card'>
          <div className='profile-data'>
            <p>Survila Gabriel - Desarrollador Full Stack</p>
            <p>email: surviladeveloper@gmail.com</p>
            <p>cel-WhatsApp: 11-5845-1937</p>
          </div>
          <img
            src="./gabi.png"
            alt="Foto de Gabriel Survila"
            className="profile-image"
          />


        </div>
        <div >
          <div className='temaButtons'> PLC - Automatización Industrial
            <button onClick={() => setPage('componentes')} className='button-nav'>Componentes</button>
            <button onClick={() => setPage('ladder')} className='button-nav'>Comandos Ladder</button>
          </div>
          <div className='temaButtons'> Fórmulas y Calculadoras
            <button onClick={() => setPage('formulas')} className='button-nav'>Fórmulas</button>

          </div>
          <div className='temaButtons'> Instalaciones Eléctricas Domésticas
            <button onClick={() => setPage('instalacionesDom')} className='button-nav'>Instalaciones Domésticas</button>
          </div>
          <div className='temaButtons'> Instalaciones Eléctricas Industriales
            <button onClick={() => setPage('instalacionesInd')} className='button-nav'>Instalaciones Industriales</button>
          </div>

        </div>

        <hr />
        {page === 'componentes' && <Menu />}
        {page === 'ladder' && <LadderPlcCheatSheet />}
        {page === 'formulas' && <MenuFormulas />}
        {page === 'instalacionesDom' && <InstalacionesDomesticas />}
        {page === 'instalacionesInd' && <InstalacionesIndustriales />}
      </div>
    </>
  )
}

export default App

