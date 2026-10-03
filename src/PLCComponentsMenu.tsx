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
    setSelectedComponent((current) => current === component ? null : component)
  }

  return (
    <div className="page-wrapper">
      <header className="sheet-header">
        <div className="sheet-pill">Catálogo · Automatización</div>
        <h1 className="sheet-title">Componentes de automatización</h1>
        <p className="sheet-subtitle">
          Explorá los componentes por tipo, categoría y subcategoría. Activá un elemento para ver sus detalles.
        </p>
      </header>

      <ul className="tema-list catalog-groups">
        {componentTypes.map((type) => (
          <li className="catalog-group" key={type}>
            <h2 className="tema">{type}</h2>

            <ul className="tema-list catalog-list">
              {automationComponents
                .filter((component) => component.type === type)
                .map((component) => {
                  const isSelected = selectedComponent === component
                  const componentId = `${component.type}|${component.category}|${component.subcategory}|${component.name}`
                  const detailsId = `component-details-${encodeURIComponent(componentId).replaceAll('%', '')}`

                  return (
                    <li
                      className={`item-container ${isSelected ? 'item-container--selected' : ''}`}
                      key={componentId}
                    >
                      <button
                        type="button"
                        className="catalog-item-trigger"
                        aria-expanded={isSelected}
                        aria-controls={detailsId}
                        onClick={() => handleItemClick(component)}
                      >
                        <span className="catalog-item-copy">
                          <span className="item_descript">{component.category}</span>
                          <span className="catalog-item-separator" aria-hidden="true">·</span>
                          <span className="item_descript">{component.subcategory}</span>
                          <span className="catalog-item-separator" aria-hidden="true">·</span>
                          <span className="item_descript">{component.name}</span>
                        </span>
                        <span className="catalog-item-chevron" aria-hidden="true">
                          {isSelected ? '−' : '+'}
                        </span>
                      </button>

                      {isSelected && (
                        <div className="detalle" id={detailsId}>
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
