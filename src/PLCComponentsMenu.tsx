// Menu.tsx
import { useState } from 'react'
import { componentesAutomatizacion, componentType } from './catalogo'
import SelectedPLCComponente from './SelectedPLCComponente'

function PLCComponentesMenu() {
  const [tipoSeleccionado, setTipoSeleccionado] = useState<string | null>(null)
  const [CategoríaSeleccionada, setCategoríaSeleccionada] = useState<string | null>(null)
  const [SubcategoríaSeleccionada, setSubcategoríaSeleccionada] = useState<string | null>(null)
  const [ElementoSeleccionado, setElementoSeleccionado] = useState<string | null>(null)

  const handleItemClick = (tipo: string, categoria: string, subcategoria: string, elemento: string) => {
    setTipoSeleccionado(tipo)
    setCategoríaSeleccionada(categoria)
    setSubcategoríaSeleccionada(subcategoria)
    setElementoSeleccionado(elemento)
    console.log('Componente seleccionado:', tipo, categoria, subcategoria, elemento)
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

        <ul className='tema-list'>
          {componentType.map((tipo) => (
            <li className="tema-title" key={tipo}>
              <div className="tema">
                {tipo}
              </div>

              <ul className="tema-list">
                {componentesAutomatizacion
                  .filter((componente) => componente[0] === tipo)
                  .map((componente, idx) => {
                    const isSelected =
                      tipoSeleccionado === componente[0] &&
                      CategoríaSeleccionada === componente[1] &&
                      SubcategoríaSeleccionada === componente[2] &&
                      ElementoSeleccionado === componente[3]

                    return (
                      <li
                        className={`item-container ${isSelected ? 'item-container--selected' : ''}`}
                        key={idx}
                        onClick={() =>
                          handleItemClick(componente[0], componente[1], componente[2], componente[3])
                        }
                      >
                        {!isSelected && (
                          <div className="item-no-selected">
                            <span className="item_descript">{componente[1]}, </span>
                            <span className="item_descript">{componente[2]}, </span>
                            <span className="item_descript">{componente[3]}</span>
                          </div>
                        )}

                        {isSelected && (
                          <div className="detalle">
                            <SelectedPLCComponente
                              tipoSeleccionado={tipoSeleccionado}
                              categoriaSeleccionada={CategoríaSeleccionada}
                              subcategoriaSeleccionada={SubcategoríaSeleccionada}
                              elementoSeleccionado={ElementoSeleccionado}
                            />
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
