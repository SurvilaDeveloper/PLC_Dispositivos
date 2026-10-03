import { useCallback, useEffect, useState } from 'react'

export const ROUTES = {
  home: '/',
  plcComponents: '/plc/componentes',
  plcLadder: '/plc/ladder',
  microcontrollers: '/sistemas-embebidos/microcontroladores',
  developmentBoards: '/sistemas-embebidos/placas-desarrollo',
  advancedBoards: '/sistemas-embebidos/placas-hibridas-avanzadas',
  platformSelection: '/sistemas-embebidos/eleccion-plataforma',
  architectureSelection: '/sistemas-embebidos/eleccion-arquitectura',
  arduinoLanguage: '/sistemas-embebidos/arduino',
  formulas: '/herramientas/formulas',
  tables: '/herramientas/tablas',
  domesticInstallations: '/instalaciones/domesticas',
  industrialInstallations: '/instalaciones/industriales',
  electronicComponents: '/electronica/componentes',
  resistanceMaterials: '/calculadoras/resistencia-conductores',
  threePhasePower: '/calculadoras/potencia-motor-trifasico',
  threePhaseTorqueSpeed: '/calculadoras/motor-trifasico-par-velocidad',
  powerFactor: '/calculadoras/factor-potencia',
  threePhaseTests: '/calculadoras/ensayos-motor-trifasico',
  inductor: '/formulas/inductor',
  capacitor: '/formulas/capacitor',
  rlcSeries: '/formulas/rlc-serie',
  copperCable: '/calculadoras/cable-potencia-cobre',
  bjt: '/electronica/transistor-bjt',
  mosfet: '/electronica/transistor-mosfet',
  mosfetFollower: '/electronica/mosfet-seguidor-fuente',
  pmosMirror: '/electronica/pmos-espejo-corriente',
  pmosActiveLoad: '/electronica/pmos-carga-activa',
  cableCurrentTable: '/tablas/corriente-cable',
  electronicSymbols: '/electronica/simbolos',
} as const

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES]

const ROUTE_TITLES: Record<AppRoute, string> = {
  [ROUTES.home]: 'Inicio',
  [ROUTES.plcComponents]: 'Componentes PLC',
  [ROUTES.plcLadder]: 'Comandos Ladder',
  [ROUTES.microcontrollers]: 'Microcontroladores',
  [ROUTES.developmentBoards]: 'Placas de desarrollo',
  [ROUTES.advancedBoards]: 'Placas híbridas y avanzadas',
  [ROUTES.platformSelection]: 'Elección de plataforma',
  [ROUTES.architectureSelection]: 'Elección de arquitectura',
  [ROUTES.arduinoLanguage]: 'Programación para Arduino',
  [ROUTES.formulas]: 'Fórmulas',
  [ROUTES.tables]: 'Tablas',
  [ROUTES.domesticInstallations]: 'Instalaciones domésticas',
  [ROUTES.industrialInstallations]: 'Instalaciones industriales',
  [ROUTES.electronicComponents]: 'Componentes electrónicos',
  [ROUTES.resistanceMaterials]: 'Resistencia de conductores',
  [ROUTES.threePhasePower]: 'Potencia de motores trifásicos',
  [ROUTES.threePhaseTorqueSpeed]: 'Par y velocidad de motor trifásico',
  [ROUTES.powerFactor]: 'Factor de potencia',
  [ROUTES.threePhaseTests]: 'Ensayos de motor trifásico',
  [ROUTES.inductor]: 'Inductor ideal',
  [ROUTES.capacitor]: 'Capacitor ideal',
  [ROUTES.rlcSeries]: 'Circuito RLC serie',
  [ROUTES.copperCable]: 'Cable de potencia de cobre',
  [ROUTES.bjt]: 'Transistor BJT',
  [ROUTES.mosfet]: 'Transistor MOSFET',
  [ROUTES.mosfetFollower]: 'MOSFET seguidor de fuente',
  [ROUTES.pmosMirror]: 'PMOS espejo de corriente',
  [ROUTES.pmosActiveLoad]: 'PMOS como carga activa',
  [ROUTES.cableCurrentTable]: 'Tabla de corriente admisible',
  [ROUTES.electronicSymbols]: 'Símbolos electrónicos',
}

const KNOWN_ROUTES = new Set<string>(Object.values(ROUTES))

const basePath = import.meta.env.BASE_URL === '/'
  ? ''
  : import.meta.env.BASE_URL.replace(/\/$/, '')

function normalizeRoute(path: string): string {
  if (!path || path === '/') {
    return '/'
  }

  const withLeadingSlash = path.startsWith('/') ? path : `/${path}`
  return withLeadingSlash.replace(/\/+$/, '')
}

function currentRoute(): string {
  const { pathname } = window.location

  if (!basePath) {
    return normalizeRoute(pathname)
  }

  if (pathname === basePath || pathname === `${basePath}/`) {
    return '/'
  }

  if (pathname.startsWith(`${basePath}/`)) {
    return normalizeRoute(pathname.slice(basePath.length))
  }

  return normalizeRoute(pathname)
}

function hrefFor(route: AppRoute): string {
  const normalized = normalizeRoute(route)
  return `${basePath}${normalized}`
}

export function routeTitle(path: string): string {
  return KNOWN_ROUTES.has(path)
    ? ROUTE_TITLES[path as AppRoute]
    : 'Página no encontrada'
}

export function useAppNavigation() {
  const [path, setPath] = useState(currentRoute)

  useEffect(() => {
    const handlePopState = () => setPath(currentRoute())

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = useCallback((route: AppRoute) => {
    const nextPath = normalizeRoute(route)

    if (nextPath === currentRoute()) {
      return
    }

    window.history.pushState(null, '', hrefFor(route))
    setPath(nextPath)
  }, [])

  const href = useCallback((route: AppRoute) => hrefFor(route), [])

  return {
    path,
    navigate,
    href,
    isKnownRoute: KNOWN_ROUTES.has(path),
  }
}
