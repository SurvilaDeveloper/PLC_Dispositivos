import type { AutomationComponent } from './catalogoModel'

type SelectedProps = {
  component: AutomationComponent
}

function buildSearchText(component: AutomationComponent) {
  return [
    component.type,
    component.category,
    component.subcategory,
    component.name,
  ].join(' ')
}

function SelectedPLCComponente({ component }: SelectedProps) {
  const handleGoogleSearch = () => {
    const searchText = buildSearchText(component)
    const url = `https://www.google.com/search?q=${encodeURIComponent(searchText)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleMercadoLibreSearch = () => {
    const searchText = buildSearchText(component)
    const url = `https://listado.mercadolibre.com.ar/${encodeURIComponent(searchText)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="selected">
      <div className="item_container">
        <span className="item_title">Tipo: </span>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <span className="item_descript">{component.type}</span>
        <br />

        <span className="item_title">Categoría: </span>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <span className="item_descript">{component.category}</span>
        <br />

        <span className="item_title">Subcategoría: </span>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <span className="item_descript">{component.subcategory}</span>
        <br />

        <span className="item_title">Elemento: </span>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <span className="item_descript">{component.name}</span>
        <br />

        <span className="item_title">Señal típica / Control: </span>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <span className="item_descript">{component.signal}</span>
        <br />

        <span className="item_title">Notas / Uso típico: </span>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <span className="item_descript">{component.notes}</span>
        <br />

        <span className="item_title">Ejemplo de aplicación: </span>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <span className="item_descript">{component.application}</span>
        <br />

        <span className="item_title">Dónde aparece en el esquema: </span>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <span className="item_descript">{component.diagramContext}</span>
        <br />

        <div className="btn-group">
          <button type="button" onClick={handleGoogleSearch} className="btn">
            Buscar en Google
          </button>
          <button type="button" onClick={handleMercadoLibreSearch} className="btn">
            Buscar en Mercado Libre
          </button>
        </div>
      </div>
    </div>
  )
}

export default SelectedPLCComponente
