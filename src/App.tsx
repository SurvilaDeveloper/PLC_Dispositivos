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
import TablaCorrienteCable from './componentes/TablaCorrienteCable'

function App() {

  const [page, setPage] = useState('presentacion');
  const [menuHeight, setMenuHeight] = useState('0');
  const [menuVisibility, setMenuVisibility] = useState<'visible' | 'hidden'>('hidden');


  const toggleMenu = () => {
    if (menuHeight === '0') {
      setMenuHeight('auto');
      setMenuVisibility('visible')
    } else {
      setMenuHeight('0');
      setMenuVisibility('hidden')
    }
  }

  const resetMenu = () => {
    setMenuHeight('0');
    setMenuVisibility('hidden')
  }

  return (
    <>

      <div>

        <h1>Electricidad y Electrónica</h1>

        <nav className="navbar">
          <button className="home-button" onClick={() => {setPage('presentacion'); resetMenu()}}>🏠</button>
          <button className="menu-button" onClick={() => toggleMenu()}>Menú</button>
        </nav>

        <div className='nav-buttons' style={{ height: menuHeight, overflow: 'hidden', visibility: menuVisibility }}>
          <div className='temaButtons'> PLC - Automatización Industrial
            <div className='buttons-container'>
              <button onClick={() => { setPage('componentes'); toggleMenu() }} className='button-nav'>Componentes</button>
              <button onClick={() => { setPage('ladder'); toggleMenu() }} className='button-nav'>Comandos Ladder</button>
            </div>
          </div>
          <div className='temaButtons'> Fórmulas, Calculadoras y Tablas
            <div className='buttons-container'>
              <button onClick={() => { setPage('formulas'); toggleMenu() }} className='button-nav'>Fórmulas</button>
              <button onClick={() => { setPage('tablas'); toggleMenu() }} className='button-nav'>Tablas</button>
            </div>
          </div>
          <div className='temaButtons'> Instalaciones Eléctricas Domésticas
            <div className='buttons-container'>
              <button onClick={() => { setPage('instalacionesDom'); toggleMenu() }} className='button-nav'>Instalaciones Domésticas</button>
            </div>
          </div>
          <div className='temaButtons'> Instalaciones Eléctricas Industriales
            <div className='buttons-container'>
              <button onClick={() => { setPage('instalacionesInd'); toggleMenu() }} className='button-nav'>Instalaciones Industriales</button>
            </div>
          </div>
          <div className='temaButtons'> Electrónica
            <div className='buttons-container'>
              <button onClick={() => { setPage('componentesElectronicos'); toggleMenu() }} className='button-nav'>Componentes Electrónicos</button>
            </div>
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
        {page === 'tablas' && (
          <ul className="formulas-list">
            <li
              className="formulas-list-item"
              onClick={() => setPage("tablaCorrienteCable")}
            >
              <span className="formulas-item-title">Tabla sección del cable</span>
              <span className="formulas-item-desc">
                Tabla de corriente admisible según sección del cable de cobre.
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
        {page === 'tablaCorrienteCable' && <TablaCorrienteCable />}
        {page === 'presentacion' && (
          <div>
            <section className="home-hero">
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
              <h1>Apuntes de Electricidad y Automatización – Material didáctico y calculadoras</h1>

              <p>
                Este sitio reúne en un solo lugar:
              </p>
              <p>
                <strong>Apuntes sobre instalaciones: </strong>
                normas básicas, dispositivos hogareños e industriales, selección orientativa de cables y protecciones.
              </p>
              <p>
                <strong>Motores trifásicos: </strong>
                potencia, factor de potencia, curvas par–velocidad, ensayos y parámetros equivalentes.
              </p>
              <p>
                <strong>PLC y Ladder: </strong>
                comandos típicos, temporizadores, contadores, ciclo de scan y ejemplos de lógica de mando.
              </p>
              <p>
                <strong>Electrónica básica: </strong>
                componentes pasivos, semiconductores, RLC, inductores, capacitores y circuitos de ejemplo.
              </p>
              <p>
                <strong>Calculadoras interactivas: </strong>
                herramientas para estimar corrientes, secciones de cable, potencias y otros parámetros eléctricos.
              </p>

              <p>
                El material tiene fines educativos y de consulta rápida, y no sustituye
                las reglamentaciones AEA/IRAM ni el asesoramiento de profesionales matriculados.
              </p>
            </section>

          </div>
        )}
      </div>
    </>
  )
}

export default App

