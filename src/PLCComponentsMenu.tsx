import { useState } from 'react'
import {
  automationComponents,
  componentTypes,
  type AutomationComponent,
} from './catalogoModel'
import SelectedPLCComponente from './SelectedPLCComponente'

function PLCComponentesMenu() {
  const [selectedComponent, setSelectedComponent] =
    useState<AutomationComponent | null>(null)

  const handleItemClick = (component: AutomationComponent) => {
    setSelectedComponent(component)
  }

  return (
    <div className="page-wrapper">
      <header className="sheet-header">
        <div className="sheet-pill">Catálogo · Automatización</div>
        <h1 className="sheet-title">Componentes de automatización</h1>
        <p className="sheet-subtitle">
          Explorá los componentes por tipo, categoría y subcategoría. Hacé clic en un elemento para ver más detalles.
        </p>
      </header>

      <ul className="tema-list">
        {componentTypes.map((type) => (
          <li className="tema-title" key={type}>
            <div className="tema">{type}</div>

            <ul className="tema-list">
              {automationComponents
                .filter((component) => component.type === type)
                .map((component) => {
                  const isSelected = selectedComponent === component

                  return (
                    <li
                      className={`item-container ${isSelected ? 'item-container--selected' : ''}`}
                      key={`${component.type}|${component.category}|${component.subcategory}|${component.name}`}
                      onClick={() => handleItemClick(component)}
                    >
                      {!isSelected && (
                        <div className="item-no-selected">
                          <span className="item_descript">{component.category}, </span>
                          <span className="item_descript">{component.subcategory}, </span>
                          <span className="item_descript">{component.name}</span>
                        </div>
                      )}

                      {isSelected && (
                        <div className="detalle">
                          <SelectedPLCComponente component={component} />
                        </div>
                      )}
                    </li>
                  )
                })}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PLCComponentesMenu
