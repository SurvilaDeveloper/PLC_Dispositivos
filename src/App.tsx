import { useEffect, useState, type MouseEvent } from 'react'
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
import { useLegacyAccessibility } from './legacyAccessibility'

type RouteItem = {
  route: AppRoute
  label: string
}

type MenuGroup = {
  title: string
  items: readonly RouteItem[]
}

type TopicItem = {
  route: AppRoute
  title: string
  description: string
}

const MENU_GROUPS: readonly MenuGroup[] = [
  {
    title: 'PLC · Automatización Industrial',
    items: [
      { route: ROUTES.plcComponents, label: 'Componentes' },
      { route: ROUTES.plcLadder, label: 'Comandos Ladder' },
    ],
  },
  {
    title: 'Sistemas embebidos',
    items: [
      { route: ROUTES.microcontrollers, label: 'Microcontroladores' },
      { route: ROUTES.developmentBoards, label: 'Placas de desarrollo' },
      { route: ROUTES.advancedBoards, label: 'Placas híbridas / avanzadas' },
      { route: ROUTES.platformSelection, label: 'Elección de plataforma' },
      { route: ROUTES.architectureSelection, label: 'Elección de arquitectura' },
      { route: ROUTES.arduinoLanguage, label: 'Programación para Arduino' },
    ],
  },
  {
    title: 'Fórmulas, calculadoras y tablas',
    items: [
      { route: ROUTES.formulas, label: 'Fórmulas y calculadoras' },
      { route: ROUTES.tables, label: 'Tablas y símbolos' },
    ],
  },
  {
    title: 'Instalaciones eléctricas',
    items: [
      { route: ROUTES.domesticInstallations, label: 'Instalaciones domésticas' },
      { route: ROUTES.industrialInstallations, label: 'Instalaciones industriales' },
    ],
  },
  {
    title: 'Electrónica',
    items: [
      { route: ROUTES.electronicComponents, label: 'Componentes electrónicos' },
    ],
  },
]

const FORMULA_LINKS: readonly TopicItem[] = [
  {
    route: ROUTES.resistanceMaterials,
    title: 'Resistencia de materiales conductores',
    description: 'Fórmulas para calcular la resistencia eléctrica según material, longitud y sección.',
  },
  {
    route: ROUTES.threePhasePower,
    title: 'Potencia de motores trifásicos',
    description: 'Relación entre tensión, corriente, cos φ y potencia.',
  },
  {
    route: ROUTES.threePhaseTorqueSpeed,
    title: 'Motor trifásico: par y velocidad',
    description: 'Vínculo entre velocidad sincrónica, resbalamiento y par.',
  },
  {
    route: ROUTES.powerFactor,
    title: 'Factor de potencia: cos φ',
    description: 'Potencia activa, reactiva y aparente para distintos valores de cos φ.',
  },
  {
    route: ROUTES.threePhaseTests,
    title: 'Ensayos de motor trifásico',
    description: 'Ensayo en vacío y rotor bloqueado para obtener parámetros.',
  },
  {
    route: ROUTES.inductor,
    title: 'Inductor ideal: fórmulas clave',
    description: 'Resumen de fórmulas esenciales para el análisis de inductores ideales.',
  },
  {
    route: ROUTES.capacitor,
    title: 'Capacitor ideal: fórmulas clave',
    description: 'Resumen de fórmulas esenciales para el análisis de capacitores ideales.',
  },
  {
    route: ROUTES.rlcSeries,
    title: 'Circuito RLC serie: fórmulas clave',
    description: 'Resumen de fórmulas esenciales para el análisis de circuitos RLC serie.',
  },
  {
    route: ROUTES.copperCable,
    title: 'Cable de potencia de cobre',
    description: 'Cálculo simplificado de sección de cable según potencia e intensidad.',
  },
  {
    route: ROUTES.bjt,
    title: 'Transistor BJT',
    description: 'Fórmulas y relaciones principales del transistor BJT.',
  },
  {
    route: ROUTES.mosfet,
    title: 'Transistor MOSFET',
    description: 'Fórmulas y relaciones principales del transistor MOSFET.',
  },
  {
    route: ROUTES.mosfetFollower,
    title: 'MOSFET seguidor de fuente',
    description: 'Análisis del transistor MOSFET en configuración seguidor de fuente.',
  },
  {
    route: ROUTES.pmosMirror,
    title: 'PMOS: espejo de corriente',
    description: 'PMOS como espejo de corriente y carga activa.',
  },
  {
    route: ROUTES.pmosActiveLoad,
    title: 'PMOS: carga activa',
    description: 'PMOS como carga activa en un amplificador diferencial.',
  },
]

const TABLE_LINKS: readonly TopicItem[] = [
  {
    route: ROUTES.cableCurrentTable,
    title: 'Tabla de sección del cable',
    description: 'Corriente admisible orientativa según sección del conductor de cobre.',
  },
  {
    route: ROUTES.electronicSymbols,
    title: 'Símbolos electrónicos',
    description: 'Tabla visual de símbolos de componentes electrónicos.',
  },
]

function App() {
  const { path, navigate, href, isKnownRoute } = useAppNavigation()
  const [menuOpen, setMenuOpen] = useState(false)

  useLegacyAccessibility(path)

  const handleRouteClick = (
    event: MouseEvent<HTMLAnchorElement>,
    route: AppRoute,
  ) => {
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
    navigate(route)
    setMenuOpen(false)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
    document.title = `${routeTitle(path)} | Electricidad, Electrónica y Automatización`
  }, [path])

  useEffect(() => {
    const closeMenuOnPopState = () => setMenuOpen(false)

    window.addEventListener('popstate', closeMenuOnPopState)
    return () => window.removeEventListener('popstate', closeMenuOnPopState)
  }, [])

  useEffect(() => {
    if (!menuOpen) {
      return
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  const renderTopicList = (items: readonly TopicItem[]) => (
    <ul className="topic-list">
      {items.map((item) => (
        <li key={item.route}>
          <a
            className="topic-link"
            href={href(item.route)}
            onClick={(event) => handleRouteClick(event, item.route)}
          >
            <span>
              <span className="tema-title">{item.title}</span>
              <span className="tema-descripcion">{item.description}</span>
            </span>
            <span className="topic-link-arrow" aria-hidden="true">→</span>
          </a>
        </li>
      ))}
    </ul>
  )

  return (
    <>
      <a className="skip-link" href="#main-content">
        Saltar al contenido
      </a>

      <header className="site-header">
        <nav className="navbar" aria-label="Navegación principal">
          <div className="navbar-inner">
            <a
              className="site-brand"
              href={href(ROUTES.home)}
              aria-current={path === ROUTES.home ? 'page' : undefined}
              onClick={(event) => handleRouteClick(event, ROUTES.home)}
            >
              <span className="site-brand-icon" aria-hidden="true">⚡</span>
              <span className="site-brand-text">
                <span className="site-brand-name">Electricidad · Electrónica · Automatización</span>
                <span className="site-brand-short">EEA Toolkit</span>
              </span>
            </a>

            <button
              type="button"
              className="btn menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="main-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
              {menuOpen ? 'Cerrar' : 'Menú'}
            </button>
          </div>
        </nav>

        <div id="main-menu" className="nav-menu" hidden={!menuOpen}>
          <div className="nav-menu-grid">
            {MENU_GROUPS.map((group) => (
              <section className="nav-menu-section" key={group.title}>
                <h2 className="nav-menu-title">{group.title}</h2>
                <div className="nav-menu-links">
                  {group.items.map((item) => (
                    <a
                      key={item.route}
                      className="nav-menu-link"
                      href={href(item.route)}
                      aria-current={path === item.route ? 'page' : undefined}
                      onClick={(event) => handleRouteClick(event, item.route)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </header>

      <main id="main-content" className="page-panel" tabIndex={-1}>
        {path === ROUTES.plcComponents && <PLCComponentesMenu />}
        {path === ROUTES.plcLadder && <LadderPlcCheatSheet />}

        {path === ROUTES.formulas && (
          <section className="route-index">
            <header className="route-index-header">
              <div className="sheet-pill">Herramientas</div>
              <h1 className="route-index-title">Fórmulas y calculadoras</h1>
              <p className="route-index-description">
                Accesos directos a fórmulas, calculadoras y resúmenes técnicos.
              </p>
            </header>
            {renderTopicList(FORMULA_LINKS)}
          </section>
        )}

        {path === ROUTES.tables && (
          <section className="route-index">
            <header className="route-index-header">
              <div className="sheet-pill">Consulta rápida</div>
              <h1 className="route-index-title">Tablas y símbolos</h1>
              <p className="route-index-description">
                Referencias visuales y tablas de consulta del toolkit.
              </p>
            </header>
            {renderTopicList(TABLE_LINKS)}
          </section>
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
          <section className="home-hero">
            <div className="card profile-card">
              <div className="profile-data">
                <p className="profile-name">Gabriel E. Survila</p>
                <p>Desarrollador Full Stack</p>
                <p>
                  <a href="mailto:surviladeveloper@gmail.com">
                    surviladeveloper@gmail.com
                  </a>
                </p>
                <p>
                  <a href="tel:+541158451937">+54 11 5845-1937</a>
                </p>
              </div>

              <img
                src={`${import.meta.env.BASE_URL}gabi.png`}
                alt="Gabriel Survila"
                className="profile-image"
              />
            </div>

            <div className="hero-copy">
              <div className="sheet-pill">Toolkit técnico interactivo</div>
              <h1>Electricidad, Electrónica y Automatización</h1>

              <p className="hero-lead">
                Proyecto web de consulta y aprendizaje que reúne apuntes técnicos,
                herramientas interactivas y calculadoras en un mismo entorno.
              </p>

              <div className="home-feature-grid">
                <article className="home-feature">
                  <h2>Instalaciones</h2>
                  <p>
                    Conceptos, dispositivos hogareños e industriales y selección orientativa
                    de cables y protecciones.
                  </p>
                </article>

                <article className="home-feature">
                  <h2>Motores trifásicos</h2>
                  <p>
                    Potencia, factor de potencia, curvas par–velocidad, ensayos y parámetros
                    equivalentes.
                  </p>
                </article>

                <article className="home-feature">
                  <h2>PLC y Ladder</h2>
                  <p>
                    Comandos típicos, temporizadores, contadores, ciclo de scan y ejemplos
                    de lógica de mando.
                  </p>
                </article>

                <article className="home-feature">
                  <h2>Electrónica</h2>
                  <p>
                    Componentes pasivos, semiconductores, RLC, inductores, capacitores y
                    circuitos de ejemplo.
                  </p>
                </article>

                <article className="home-feature">
                  <h2>Sistemas embebidos</h2>
                  <p>
                    Microcontroladores, placas de desarrollo, Arduino y criterios de elección
                    de plataforma y arquitectura.
                  </p>
                </article>

                <article className="home-feature">
                  <h2>Calculadoras</h2>
                  <p>
                    Herramientas para estimar corrientes, secciones de cable, potencias y
                    otros parámetros eléctricos.
                  </p>
                </article>
              </div>

              <p className="home-disclaimer">
                El material tiene fines educativos y de consulta rápida. No sustituye
                reglamentaciones vigentes, documentación oficial ni el asesoramiento de
                profesionales habilitados.
              </p>
            </div>
          </section>
        )}

        {!isKnownRoute && (
          <section className="not-found">
            <div className="sheet-pill">404</div>
            <h1>Página no encontrada</h1>
            <p>La dirección ingresada no corresponde a una sección disponible del toolkit.</p>
            <a
              className="btn btn-primary"
              href={href(ROUTES.home)}
              onClick={(event) => handleRouteClick(event, ROUTES.home)}
            >
              Volver al inicio
            </a>
          </section>
        )}
      </main>

      <footer className="main-footer">
        Sitio desarrollado por Gabriel E. Survila
      </footer>
    </>
  )
}

export default App
