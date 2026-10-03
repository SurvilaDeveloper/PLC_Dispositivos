import { useEffect, useState } from 'react'
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
import { ROUTES, routeTitle, useAppNavigation, type AppRoute } from './navigation'

function App() {
  const { path, navigate, href, isKnownRoute } = useAppNavigation()
  const [menuHeight, setMenuHeight] = useState('0')
  const [menuVisibility, setMenuVisibility] = useState<'visible' | 'hidden'>('hidden')

  const toggleMenu = () => {
    if (menuHeight === '0') {
      setMenuHeight('auto')
      setMenuVisibility('visible')
    } else {
      setMenuHeight('0')
      setMenuVisibility('hidden')
    }
  }

  const resetMenu = () => {
    setMenuHeight('0')
    setMenuVisibility('hidden')
  }

  const goTo = (route: AppRoute) => {
    navigate(route)
    resetMenu()
  }

  useEffect(() => {
    resetMenu()
    window.scrollTo({ top: 0, behavior: 'auto' })
    document.title = `${routeTitle(path)} | Electricidad, Electrónica y Automatización`
  }, [path])

  return (
    <>
      <nav className="navbar" aria-label="Navegación principal">
        <a
          className="btn"
          href={href(ROUTES.home)}
          aria-label="Ir al inicio"
          onClick={(event) => {
            if (
              event.button !== 0 ||
              event.metaKey ||
              event.ctrlKey ||
              event.shiftKey ||
              event.altKey
            ) {
              return
            }

            event.preventDefault()
            goTo(ROUTES.home)
          }}
        >
          &#x1F3E1;
        </a>

        <button
          type="button"
          className="btn"
          aria-expanded={menuHeight !== '0'}
          aria-controls="main-menu"
          onClick={toggleMenu}
        >
          Menú
        </button>
      </nav>

      <div className="page-panel">
        <h1>Electricidad, Electrónica y Automatización</h1>

        <div
          id="main-menu"
          className="nav-buttons"
          style={{ height: menuHeight, overflow: 'hidden', visibility: menuVisibility }}
        >
          <div className="tema">
            PLC - Automatización Industrial
            <div className="btn-group">
              <button onClick={() => goTo(ROUTES.plcComponents)} className="btn">
                Componentes
              </button>
              <button onClick={() => goTo(ROUTES.plcLadder)} className="btn">
                Comandos Ladder
              </button>
            </div>
          </div>

          <div className="tema">
            Robótica
            <div className="btn-group">
              <button onClick={() => goTo(ROUTES.microcontrollers)} className="btn">
                Micro-controladores
              </button>
              <button onClick={() => goTo(ROUTES.developmentBoards)} className="btn">
                Placas de Desarrollo
              </button>
              <button onClick={() => goTo(ROUTES.advancedBoards)} className="btn">
                Placas de Desarrollo Híbridas / Avanzadas
              </button>
              <button onClick={() => goTo(ROUTES.platformSelection)} className="btn">
                Elección de Plataforma
              </button>
              <button onClick={() => goTo(ROUTES.architectureSelection)} className="btn">
                Elección de Arquitectura
              </button>
              <button onClick={() => goTo(ROUTES.arduinoLanguage)} className="btn">
                Lenguaje de Programación para Arduino
              </button>
            </div>
          </div>

          <div className="tema">
            Fórmulas, Calculadoras y Tablas
            <div className="btn-group">
              <button onClick={() => goTo(ROUTES.formulas)} className="btn">
                Fórmulas
              </button>
              <button onClick={() => goTo(ROUTES.tables)} className="btn">
                Tablas
              </button>
            </div>
          </div>

          <div className="tema">
            Instalaciones Eléctricas Domésticas
            <div className="btn-group">
              <button onClick={() => goTo(ROUTES.domesticInstallations)} className="btn">
                Instalaciones Domésticas
              </button>
            </div>
          </div>

          <div className="tema">
            Instalaciones Eléctricas Industriales
            <div className="btn-group">
              <button onClick={() => goTo(ROUTES.industrialInstallations)} className="btn">
                Instalaciones Industriales
              </button>
            </div>
          </div>

          <div className="tema">
            Electrónica
            <div className="btn-group">
              <button onClick={() => goTo(ROUTES.electronicComponents)} className="btn">
                Componentes Electrónicos
              </button>
            </div>
          </div>
        </div>

        {path === ROUTES.plcComponents && <PLCComponentesMenu />}
        {path === ROUTES.plcLadder && <LadderPlcCheatSheet />}

        {path === ROUTES.formulas && (
          <ul className="tema-list">
            <li className="tema-list-li" onClick={() => goTo(ROUTES.resistanceMaterials)}>
              <span className="tema-title">Resistencia de materiales conductores</span>
              <span className="tema-descripcion">
                Fórmulas para calcular la resistencia eléctrica según material, longitud y sección.
              </span>
            </li>

            <li className="tema-list-li" onClick={() => goTo(ROUTES.threePhasePower)}>
              <span className="tema-title">Potencia de motores trifásicos</span>
              <span className="tema-descripcion">
                Relación entre tensión, corriente, cos φ y potencia.
              </span>
            </li>

            <li className="tema-list-li" onClick={() => goTo(ROUTES.threePhaseTorqueSpeed)}>
              <span className="tema-title">Motor trifásico: par y velocidad</span>
              <span className="tema-descripcion">
                Vínculo entre velocidad sincrónica, resbalamiento y par.
              </span>
            </li>

            <li className="tema-list-li" onClick={() => goTo(ROUTES.powerFactor)}>
              <span className="tema-title">Factor de potencia: cos φ</span>
              <span className="tema-descripcion">
                Activa, reactiva y aparente para distintos cos φ.
              </span>
            </li>

            <li className="tema-list-li" onClick={() => goTo(ROUTES.threePhaseTests)}>
              <span className="tema-title">Ensayos de motor trifásico</span>
              <span className="tema-descripcion">
                Ensayo en vacío y rotor bloqueado para obtener parámetros.
              </span>
            </li>

            <li className="tema-list-li" onClick={() => goTo(ROUTES.inductor)}>
              <span className="tema-title">Inductor ideal: fórmulas clave</span>
              <span className="tema-descripcion">
                Resumen de fórmulas esenciales para el análisis de inductores ideales.
              </span>
            </li>

            <li className="tema-list-li" onClick={() => goTo(ROUTES.capacitor)}>
              <span className="tema-title">Capacitor ideal: fórmulas clave</span>
              <span className="tema-descripcion">
                Resumen de fórmulas esenciales para el análisis de capacitores ideales.
              </span>
            </li>

            <li className="tema-list-li" onClick={() => goTo(ROUTES.rlcSeries)}>
              <span className="tema-title">Circuito RLC serie: fórmulas clave</span>
              <span className="tema-descripcion">
                Resumen de fórmulas esenciales para el análisis de circuitos RLC serie.
              </span>
            </li>

            <li className="tema-list-li" onClick={() => goTo(ROUTES.copperCable)}>
              <span className="tema-title">Cable de potencia de cobre</span>
              <span className="tema-descripcion">
                Cálculo simplificado de sección de cable según potencia e intensidad.
              </span>
            </li>

            <li className="tema-list-li" onClick={() => goTo(ROUTES.bjt)}>
              <span className="tema-title">Transistor BJT</span>
              <span className="tema-descripcion">Fórmulas del transistor BJT.</span>
            </li>

            <li className="tema-list-li" onClick={() => goTo(ROUTES.mosfet)}>
              <span className="tema-title">Transistor MOSFET</span>
              <span className="tema-descripcion">Fórmulas del transistor MOSFET.</span>
            </li>

            <li className="tema-list-li" onClick={() => goTo(ROUTES.mosfetFollower)}>
              <span className="tema-title">Transistor MOSFET</span>
              <span className="tema-descripcion">MOSFET seguidor de fuente.</span>
            </li>

            <li className="tema-list-li" onClick={() => goTo(ROUTES.pmosMirror)}>
              <span className="tema-title">Transistor MOSFET</span>
              <span className="tema-descripcion">
                PMOS espejo de corriente / carga activa.
              </span>
            </li>

            <li className="tema-list-li" onClick={() => goTo(ROUTES.pmosActiveLoad)}>
              <span className="tema-title">Transistor MOSFET</span>
              <span className="tema-descripcion">
                PMOS como carga activa (amplificador diferencial).
              </span>
            </li>
          </ul>
        )}

        {path === ROUTES.tables && (
          <ul className="formulas-list">
            <li className="tema-list-li" onClick={() => goTo(ROUTES.cableCurrentTable)}>
              <span className="tema-title">Tabla sección del cable</span>
              <span className="tema-descripcion">
                Tabla de corriente admisible según sección del cable de cobre.
              </span>
            </li>

            <li className="tema-list-li" onClick={() => goTo(ROUTES.electronicSymbols)}>
              <span className="tema-title">Símbolos electrónicos</span>
              <span className="tema-descripcion">
                Tabla con símbolos normalizados de componentes electrónicos.
              </span>
            </li>
          </ul>
        )}

        {path === ROUTES.threePhasePower && <PotenciaMotorTrifasico />}
        {path === ROUTES.threePhaseTorqueSpeed && <MotorTrifasicoParVelocidad />}
        {path === ROUTES.powerFactor && <CosenoPhi />}
        {path === ROUTES.threePhaseTests && <EnsayosMotorTrifasico />}
        {path === ROUTES.inductor && <InductorCheatSheet />}
        {path === ROUTES.capacitor && <CapacitorCheatSheet />}
        {path === ROUTES.rlcSeries && <RlcSerieCheatSheet />}
        {path === ROUTES.copperCable && <CablePotenciaCobre />}
        {path === ROUTES.domesticInstallations && <InstalacionesDomesticas />}
        {path === ROUTES.industrialInstallations && <InstalacionesIndustriales />}
        {path === ROUTES.electronicComponents && <ComponentesElectronicosCheatSheet />}
        {path === ROUTES.cableCurrentTable && <TablaCorrienteCable />}
        {path === ROUTES.electronicSymbols && <SimbolosElectronicos />}
        {path === ROUTES.resistanceMaterials && <ResistenciaMateriales />}
        {path === ROUTES.bjt && <TransistorBjtCheatSheet />}
        {path === ROUTES.mosfet && <TransistorMosfetCheatSheet />}
        {path === ROUTES.mosfetFollower && <MosfetSourceFollowerCheatSheet />}
        {path === ROUTES.pmosMirror && <PmosCurrentMirrorCheatSheet />}
        {path === ROUTES.pmosActiveLoad && <PmosActiveLoadDiffAmpCheatSheet />}
        {path === ROUTES.microcontrollers && <MicrocontroladoresCheatSheet />}
        {path === ROUTES.developmentBoards && <PlacasDesarrolloCheatSheet />}
        {path === ROUTES.advancedBoards && <PlacasHibridasAvanzadas />}
        {path === ROUTES.platformSelection && <MatrizEleccionPlataforma />}
        {path === ROUTES.architectureSelection && <MatrizArquitecturaPlataformas />}
        {path === ROUTES.arduinoLanguage && <ArduinoCInstrucciones />}

        {path === ROUTES.home && (
          <div>
            <section className="home-hero">
              <div className="card">
                <div className="profile-data">
                  <p>Gabriel E. Survila - Desarrollador Full Stack</p>
                  <p>email: surviladeveloper@gmail.com</p>
                  <p>cel-WhatsApp: 11-5845-1937</p>
                </div>
                <img
                  src={`${import.meta.env.BASE_URL}gabi.png`}
                  alt="Foto de Gabriel Survila"
                  className="profile-image"
                />
              </div>

              <h1>Toolkit técnico interactivo de Electricidad, Electrónica y Automatización</h1>

              <p>
                Proyecto web de consulta y aprendizaje que reúne apuntes técnicos,
                herramientas interactivas y calculadoras en un mismo entorno.
              </p>
              <p>
                <strong>Apuntes sobre instalaciones: </strong>
                conceptos, dispositivos hogareños e industriales, selección orientativa de cables y protecciones.
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
                <strong>Electrónica: </strong>
                componentes pasivos, semiconductores, RLC, inductores, capacitores y circuitos de ejemplo.
              </p>
              <p>
                <strong>Sistemas embebidos: </strong>
                microcontroladores, placas de desarrollo, Arduino y criterios de elección de plataforma y arquitectura.
              </p>
              <p>
                <strong>Calculadoras interactivas: </strong>
                herramientas para estimar corrientes, secciones de cable, potencias y otros parámetros eléctricos.
              </p>

              <p>
                El material tiene fines educativos y de consulta rápida, y no sustituye
                reglamentaciones vigentes, documentación oficial ni el asesoramiento de profesionales habilitados.
              </p>
            </section>
          </div>
        )}

        {!isKnownRoute && (
          <section className="home-hero">
            <h2>Página no encontrada</h2>
            <p>La dirección ingresada no corresponde a una sección disponible del toolkit.</p>
            <button type="button" className="btn" onClick={() => goTo(ROUTES.home)}>
              Volver al inicio
            </button>
          </section>
        )}
      </div>

      <footer className="main-footer">
        Sitio desarrollado por Gabriel E. Survila
      </footer>
    </>
  )
}

export default App
