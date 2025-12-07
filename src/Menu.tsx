import { useState } from 'react'
import { componentesAutomatizacion, componentType } from './catalogo'
import './App.css'
import Selected from './Selected'

function Menu() {

    const [tipoSeleccionado, setTipoSeleccionado] = useState<string | null>(null);
    const [CategoríaSeleccionada, setCategoríaSeleccionada] = useState<string | null>(null);
    const [SubcategoríaSeleccionada, setSubcategoríaSeleccionada] = useState<string | null>(null);
    const [ElementoSeleccionado, setElementoSeleccionado] = useState<string | null>(null);

    const handleItemClick = (tipo: string, categoria: string, subcategoria: string, elemento: string) => {
        setTipoSeleccionado(tipo);
        setCategoríaSeleccionada(categoria);
        setSubcategoríaSeleccionada(subcategoria);
        setElementoSeleccionado(elemento);
        console.log('Componente seleccionado:', tipo, categoria, subcategoria, elemento);
    }

    return (
        <>
            <div>

                <ul>
                    {componentType.map((tipo) => (
                        <li className="item_title_2" key={tipo}>

                            <span className="item">{tipo}</span>

                            <ul>
                                {componentesAutomatizacion
                                    .filter((componente) => componente[0] === tipo)
                                    .map((componente, idx) => (
                                        <li className="item_container" key={idx} onClick={() => handleItemClick(componente[0], componente[1], componente[2], componente[3])}>


                                            {
                                                (tipoSeleccionado != componente[0] ||
                                                CategoríaSeleccionada != componente[1] ||
                                                SubcategoríaSeleccionada != componente[2] ||
                                                ElementoSeleccionado != componente[3]) && (
                                                    <div className="item_2">
                                            <span className="item_descript">{componente[1]}, </span>

                                            <span className="item_descript">{componente[2]}, </span>

                                            <span className="item_descript">{componente[3]}, </span>
                                            <br />
                                                    </div>
                                                )}
                                            {
                                                tipoSeleccionado === componente[0] &&
                                                CategoríaSeleccionada === componente[1] &&
                                                SubcategoríaSeleccionada === componente[2] &&
                                                ElementoSeleccionado === componente[3] && (
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
                                    ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Menu