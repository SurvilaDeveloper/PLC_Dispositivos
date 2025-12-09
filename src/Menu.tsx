// Menu.tsx
import { useState } from 'react'
import { componentesAutomatizacion, componentType } from './catalogo'
import './App.css'
import Selected from './Selected'

function Menu() {
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
    <div className="menu-wrapper">
      <div className="menu-panel">
        <header className="menu-header">
          <div className="menu-pill">Catálogo · Automatización</div>
          <h1 className="menu-title">Componentes de automatización</h1>
          <p className="menu-subtitle">
            Explorá los componentes por tipo, categoría y subcategoría. Hacé clic en un elemento para ver más detalles.
          </p>
        </header>

        <ul className="menu-type-list">
          {componentType.map((tipo) => (
            <li className="item_title_2" key={tipo}>
              <div className="item">
                {tipo}
              </div>

              <ul className="menu-component-list">
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
                        className={`item_container ${isSelected ? 'item_container--selected' : ''}`}
                        key={idx}
                        onClick={() =>
                          handleItemClick(componente[0], componente[1], componente[2], componente[3])
                        }
                      >
                        {!isSelected && (
                          <div className="item_2">
                            <span className="item_descript">{componente[1]}, </span>
                            <span className="item_descript">{componente[2]}, </span>
                            <span className="item_descript">{componente[3]}</span>
                          </div>
                        )}

                        {isSelected && (
                          <div className="detalle">
                            <Selected
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
    </div>
  )
}

export default Menu
