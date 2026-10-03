import {
  componentesAutomatizacion as componentesAutomatizacionRaw,
  componentType as componentTypesRaw,
} from './catalogo'

export interface AutomationComponent {
  type: string
  category: string
  subcategory: string
  name: string
  signal: string
  notes: string
  application: string
  diagramContext: string
}

const EXPECTED_FIELDS = 8

function toAutomationComponent(
  record: string[],
  index: number,
): AutomationComponent {
  if (record.length !== EXPECTED_FIELDS) {
    throw new Error(
      `Registro de catálogo inválido en la posición ${index}: se esperaban ${EXPECTED_FIELDS} campos y se encontraron ${record.length}.`,
    )
  }

  const [
    type,
    category,
    subcategory,
    name,
    signal,
    notes,
    application,
    diagramContext,
  ] = record

  return {
    type,
    category,
    subcategory,
    name,
    signal,
    notes,
    application,
    diagramContext,
  }
}

export const automationComponents: AutomationComponent[] =
  componentesAutomatizacionRaw.map(toAutomationComponent)

export const componentTypes = [...componentTypesRaw]
