import { useState } from 'react'
import './App.css'
import Menu from './Menu'
import LadderPlcCheatSheet from './componentes/LadderCheatSheet'
import InstalacionesDomesticas from './pages/InstalacionesDomesticas'
import InstalacionesIndustriales from './pages/InstalacionesIndustriales'
import PotenciaMotorTrifasico from './componentes/PotenciaMotorTrifasico'
import MotorTrifasicoParVelocidad from './componentes/MotorTrifasicoParVelocidad'
import CablePotenciaCobre from './componentes/CablePotenciaCobre'
import RlcSerieCheatSheet from './componentes/RlcSerieCheatSheet'
import CapacitorCheatSheet from './componentes/CapacitorCheatSheet'
import InductorCheatSheet from './componentes/InductorCheatSheet'
import EnsayosMotorTrifasico from './componentes/EnsayosMotorTrifasico'
import CosenoPhi from './componentes/CosenoPhi'
import ComponentesElectronicosCheatSheet from './componentes/ComponentesElectronicosCheatSheet'

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
          <div className='temaButtons'> Electrónica
            <button onClick={() => setPage('componentesElectronicos')} className='button-nav'>Componentes Electrónicos</button>
          </div>

        </div>

        <hr />
        {page === 'componentes' && <Menu />}
        {page === 'ladder' && <LadderPlcCheatSheet />}
        {page === 'formulas' && (
          <ul className="formulas-list">
            <li
              className="formulas-list-item"
              onClick={() => setPage("potenciaMotorTrifasico")}
            >
              <span className="formulas-item-title">Potencia de motores trifásicos</span>
              <span className="formulas-item-desc">
                Relación entre tensión, corriente, cos φ y potencia.
              </span>
            </li>

            <li
              className="formulas-list-item"
              onClick={() => setPage("motorTrifasicoParVelocidad")}
            >
              <span className="formulas-item-title">Motor trifásico: par y velocidad</span>
              <span className="formulas-item-desc">
                Vínculo entre velocidad sincrónica, resbalamiento y par.
              </span>
            </li>

            <li
              className="formulas-list-item"
              onClick={() => setPage("cosenoPhi")}
            >
              <span className="formulas-item-title">Factor de potencia: cos φ</span>
              <span className="formulas-item-desc">
                Activa, reactiva y aparente para distintos cos φ.
              </span>
            </li>

            <li
              className="formulas-list-item"
              onClick={() => setPage("ensayosMotorTrifasico")}
            >
              <span className="formulas-item-title">Ensayos de motor trifásico</span>
              <span className="formulas-item-desc">
                Ensayo en vacío y rotor bloqueado para obtener parámetros.
              </span>
            </li>
            <li
              className="formulas-list-item"
              onClick={() => setPage("inductorCheatSheet")}
            >
              <span className="formulas-item-title">Inductor ideal: fórmulas clave</span>
              <span className="formulas-item-desc">
                Resumen de fórmulas esenciales para el análisis de inductores ideales.
              </span>
            </li>
            <li
              className="formulas-list-item"
              onClick={() => setPage("capacitorCheatSheet")}
            >
              <span className="formulas-item-title">Capacitor ideal: fórmulas clave</span>
              <span className="formulas-item-desc">
                Resumen de fórmulas esenciales para el análisis de capacitores ideales.
              </span>
            </li>
            <li
              className="formulas-list-item"
              onClick={() => setPage("rlcSerieCheatSheet")}
            >
              <span className="formulas-item-title">Circuito RLC serie: fórmulas clave</span>
              <span className="formulas-item-desc">
                Resumen de fórmulas esenciales para el análisis de circuitos RLC serie.
              </span>
            </li>
            <li
              className="formulas-list-item"
              onClick={() => setPage("cablePotenciaCobre")}
            >
              <span className="formulas-item-title">Cable de potencia de cobre</span>
              <span className="formulas-item-desc">
                Cálculo simplificado de sección de cable según potencia e intensidad.
              </span>
            </li>
          </ul>
        )}
        {page === 'potenciaMotorTrifasico' && <PotenciaMotorTrifasico />}
        {page === 'motorTrifasicoParVelocidad' && <MotorTrifasicoParVelocidad />}
        {page === 'cosenoPhi' && <CosenoPhi />}
        {page === 'ensayosMotorTrifasico' && <EnsayosMotorTrifasico />}
        {page === 'inductorCheatSheet' && <InductorCheatSheet />}
        {page === 'capacitorCheatSheet' && <CapacitorCheatSheet />}
        {page === 'rlcSerieCheatSheet' && <RlcSerieCheatSheet />}
        {page === 'cablePotenciaCobre' && <CablePotenciaCobre />}
        {page === 'instalacionesDom' && <InstalacionesDomesticas />}
        {page === 'instalacionesInd' && <InstalacionesIndustriales />}
        {page === 'componentesElectronicos' && <ComponentesElectronicosCheatSheet />}
      </div>
    </>
  )
}

export default App

