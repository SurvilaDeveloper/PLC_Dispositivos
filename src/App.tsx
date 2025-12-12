import { useState } from 'react'
import PLCComponentesMenu from './PLCComponentsMenu'
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
import SimbolosElectronicos from './componentes/simbolosElectronicos'
import ResistenciaMateriales from './componentes/ResistenciaMateriales'
import TransistorBjtCheatSheet from './componentes/TransistorBjtCheatSheet'
import TransistorMosfetCheatSheet from './componentes/TransistorMosfetCheatSheet'
import MosfetSourceFollowerCheatSheet from './componentes/MosfetSourceFollowerCheatSheet'
import PmosCurrentMirrorCheatSheet from './componentes/PmosCurrentMirrorCheatSheet'
import PmosActiveLoadDiffAmpCheatSheet from './componentes/PmosActiveLoadDiffAmpCheatSheet'
import MicrocontroladoresCheatSheet from './componentes/MicrocontroladoresCheatSheet'
import PlacasDesarrolloCheatSheet from './componentes/PlacasDesarrolloCheatSheet'
import PlacasHibridasAvanzadas from './componentes/PlacasHibridasAvanzadas'
import MatrizEleccionPlataforma from './componentes/MatrizEleccionPlataforma'
import MatrizArquitecturaPlataformas from './componentes/MatrizArquitecturaPlataformas'
import ArduinoCInstrucciones from './componentes/ArduinoCInstrucciones'

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
      <nav className="navbar">
        <button className="btn" onClick={() => {
          setPage('presentacion');
          resetMenu();
          window.scrollTo({
            top: 0,
            behavior: "smooth", // o "auto" si no querés animación
          });
        }}>&#x1F3E1;</button>
        <button className="btn" onClick={() => {
          toggleMenu();
          window.scrollTo({
            top: 0,
            behavior: "smooth", // o "auto" si no querés animación
          });
        }}>Menú</button>
      </nav>
      <div className='page-panel'>

        <h1>Electricidad y Electrónica</h1>
        <div className='nav-buttons' style={{ height: menuHeight, overflow: 'hidden', visibility: menuVisibility }}>
          <div className='tema'> PLC - Automatización Industrial
            <div className='btn-group'>
              <button onClick={() => { setPage('componentes'); toggleMenu() }} className='btn'>Componentes</button>
              <button onClick={() => { setPage('ladder'); toggleMenu() }} className='btn'>Comandos Ladder</button>
            </div>
          </div>
          <div className='tema'> Robótica
            <div className='btn-group'>
              <button onClick={() => { setPage('micro_controladores'); toggleMenu() }} className='btn'>Micro-controladores</button>
              <button onClick={() => { setPage('placa_desarrollo'); toggleMenu() }} className='btn'>Placas de Desarrollo</button>
              <button onClick={() => { setPage('placa_desarrollo_ha'); toggleMenu() }} className='btn'>Placas de Desarrollo Híbridas / Avanzadas</button>
              <button onClick={() => { setPage('elec_plataforma'); toggleMenu() }} className='btn'>Elección de Plataforma</button>
              <button onClick={() => { setPage('elec_arquitectura'); toggleMenu() }} className='btn'>Elección de Arquitectura</button>
              <button onClick={() => { setPage('arduino_lenguaje'); toggleMenu() }} className='btn'>Lenguaje de Programación para Arduino</button>

            </div>
          </div>
          <div className='tema'> Fórmulas, Calculadoras y Tablas
            <div className='btn-group'>
              <button onClick={() => { setPage('formulas'); toggleMenu() }} className='btn'>Fórmulas</button>
              <button onClick={() => { setPage('tablas'); toggleMenu() }} className='btn'>Tablas</button>
            </div>
          </div>
          <div className='tema'> Instalaciones Eléctricas Domésticas
            <div className='btn-group'>
              <button onClick={() => { setPage('instalacionesDom'); toggleMenu() }} className='btn'>Instalaciones Domésticas</button>
            </div>
          </div>
          <div className='tema'> Instalaciones Eléctricas Industriales
            <div className='btn-group'>
              <button onClick={() => { setPage('instalacionesInd'); toggleMenu() }} className='btn'>Instalaciones Industriales</button>
            </div>
          </div>
          <div className='tema'> Electrónica
            <div className='btn-group'>
              <button onClick={() => { setPage('componentesElectronicos'); toggleMenu() }} className='btn'>Componentes Electrónicos</button>
            </div>
          </div>

        </div>
        {page === 'componentes' && <PLCComponentesMenu />}
        {page === 'ladder' && <LadderPlcCheatSheet />}
        {/* FORMULAS */}
        {page === 'formulas' && (
          <ul className="tema-list">
            <li
              className="tema-list-li"
              onClick={() => setPage("resistenciaMateriales")}
            >
              <span className="tema-title">Resistencia de materiales conductores</span>
              <span className="tema-descripcion">
                Fórmulas para calcular la resistencia eléctrica según material, longitud y sección.
              </span>
            </li>
            <li
              className="tema-list-li"
              onClick={() => setPage("potenciaMotorTrifasico")}
            >
              <span className="tema-title">Potencia de motores trifásicos</span>
              <span className="tema-descripcion">
                Relación entre tensión, corriente, cos φ y potencia.
              </span>
            </li>

            <li
              className="tema-list-li"
              onClick={() => setPage("motorTrifasicoParVelocidad")}
            >
              <span className="tema-title">Motor trifásico: par y velocidad</span>
              <span className="tema-descripcion">
                Vínculo entre velocidad sincrónica, resbalamiento y par.
              </span>
            </li>

            <li
              className="tema-list-li"
              onClick={() => setPage("cosenoPhi")}
            >
              <span className="tema-title">Factor de potencia: cos φ</span>
              <span className="tema-descripcion">
                Activa, reactiva y aparente para distintos cos φ.
              </span>
            </li>

            <li
              className="tema-list-li"
              onClick={() => setPage("ensayosMotorTrifasico")}
            >
              <span className="tema-title">Ensayos de motor trifásico</span>
              <span className="tema-descripcion">
                Ensayo en vacío y rotor bloqueado para obtener parámetros.
              </span>
            </li>
            <li
              className="tema-list-li"
              onClick={() => setPage("inductorCheatSheet")}
            >
              <span className="tema-title">Inductor ideal: fórmulas clave</span>
              <span className="tema-descripcion">
                Resumen de fórmulas esenciales para el análisis de inductores ideales.
              </span>
            </li>
            <li
              className="tema-list-li"
              onClick={() => setPage("capacitorCheatSheet")}
            >
              <span className="tema-title">Capacitor ideal: fórmulas clave</span>
              <span className="tema-descripcion">
                Resumen de fórmulas esenciales para el análisis de capacitores ideales.
              </span>
            </li>
            <li
              className="tema-list-li"
              onClick={() => setPage("rlcSerieCheatSheet")}
            >
              <span className="tema-title">Circuito RLC serie: fórmulas clave</span>
              <span className="tema-descripcion">
                Resumen de fórmulas esenciales para el análisis de circuitos RLC serie.
              </span>
            </li>
            <li
              className="tema-list-li"
              onClick={() => setPage("cablePotenciaCobre")}
            >
              <span className="tema-title">Cable de potencia de cobre</span>
              <span className="tema-descripcion">
                Cálculo simplificado de sección de cable según potencia e intensidad.
              </span>
            </li>
            <li
              className="tema-list-li"
              onClick={() => setPage("bjt")}
            >
              <span className="tema-title">Transistor BJT</span>
              <span className="tema-descripcion">
                Fórmulas del transistor BJT.
              </span>
            </li>
            <li
              className="tema-list-li"
              onClick={() => setPage("mosfet")}
            >
              <span className="tema-title">Transistor MOSFET</span>
              <span className="tema-descripcion">
                Fórmulas del transistor MOSFET.
              </span>
            </li>
            <li
              className="tema-list-li"
              onClick={() => setPage("mosfet-follower")}
            >
              <span className="tema-title">Transistor MOSFET</span>
              <span className="tema-descripcion">
                MOSFET seguidor de fuente.
              </span>
            </li>
            <li
              className="tema-list-li"
              onClick={() => setPage("mosfet-mirror")}
            >
              <span className="tema-title">Transistor MOSFET</span>
              <span className="tema-descripcion">
                PMOS espejo de corriente / carga activa.
              </span>
            </li>
            <li
              className="tema-list-li"
              onClick={() => setPage("mosfet-active")}
            >
              <span className="tema-title">Transistor MOSFET</span>
              <span className="tema-descripcion">
                PMOS como carga activa (amplificador diferencial).
              </span>
            </li>

          </ul>
        )}
        {page === 'tablas' && (
          <ul className="formulas-list">
            <li
              className="tema-list-li"
              onClick={() => setPage("tablaCorrienteCable")}
            >
              <span className="tema-title">Tabla sección del cable</span>
              <span className="tema-descripcion">
                Tabla de corriente admisible según sección del cable de cobre.
              </span>
            </li>
            <li
              className="tema-list-li"
              onClick={() => setPage("simbolosElectronicos")}
            >
              <span className="tema-title">Símbolos electrónicos</span>
              <span className="tema-descripcion">
                Tabla con símbolos normalizados de componentes electrónicos.
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
        {page === 'simbolosElectronicos' && <SimbolosElectronicos />}
        {page === 'resistenciaMateriales' && <ResistenciaMateriales />}
        {page === 'bjt' && <TransistorBjtCheatSheet />}
        {page === 'mosfet' && <TransistorMosfetCheatSheet />}
        {page === 'mosfet-follower' && <MosfetSourceFollowerCheatSheet />}
        {page === 'mosfet-mirror' && <PmosCurrentMirrorCheatSheet />}
        {page === 'mosfet-active' && <PmosActiveLoadDiffAmpCheatSheet />}
        {page === 'micro_controladores' && <MicrocontroladoresCheatSheet />}
        {page === 'placa_desarrollo' && <PlacasDesarrolloCheatSheet/>}
        {page === 'placa_desarrollo_ha' && <PlacasHibridasAvanzadas/>}
        {page === 'elec_plataforma' && <MatrizEleccionPlataforma/>}
        {page === 'elec_arquitectura' && <MatrizArquitecturaPlataformas/>}
        {page === 'arduino_lenguaje' && <ArduinoCInstrucciones/>}
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
      <footer className='main-footer'>
        Sitio desarrollado por Gabriel E. Survila

      </footer>
      
      
    </>
  )
}

export default App

