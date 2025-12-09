import { componentesAutomatizacion } from './catalogo'
import './App.css'

type SelectedProps = {
  tipoSeleccionado: string | null
  categoriaSeleccionada: string | null
  subcategoriaSeleccionada: string | null
  elementoSeleccionado: string | null
}

function Selected({
  tipoSeleccionado,
  categoriaSeleccionada,
  subcategoriaSeleccionada,
  elementoSeleccionado,
}: SelectedProps) {
  const handleClickG = (componente: string[]) => {
    console.log('Componente seleccionado:', componente)
    const elemento = `${componente[0]} ${componente[1]} ${componente[2]} ${componente[3]}`
    const url = `https://www.google.com/search?q=${encodeURIComponent(elemento)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleClickM = (componente: string[]) => {
    console.log('Componente seleccionado:', componente)
    const elemento = `${componente[0]} ${componente[1]} ${componente[2]} ${componente[3]}`
    const url = `https://listado.mercadolibre.com.ar/${encodeURIComponent(elemento)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  // Si no hay nada seleccionado, no muestres nada o un mensaje
  if (!tipoSeleccionado) {
    return null
    // o: return <p>Seleccioná un componente para ver el detalle</p>
  }

  const seleccionados = componentesAutomatizacion.filter(
    (componente) =>
      componente[0] === tipoSeleccionado &&
      componente[1] === categoriaSeleccionada &&
      componente[2] === subcategoriaSeleccionada &&
      componente[3] === elementoSeleccionado,
  )

  return (
    <div className='selected'>
      {seleccionados.map((componente, idx) => (
        <div className="item_container" key={idx}>
          <span className="item_title">Tipo: </span>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <span className="item_descript">{componente[0]}</span>
          <br />

          <span className="item_title">Categoría: </span>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <span className="item_descript">{componente[1]}</span>
          <br />

          <span className="item_title">Subcategoría: </span>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <span className="item_descript">{componente[2]}</span>
          <br />

          <span className="item_title">Elemento: </span>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <span className="item_descript">{componente[3]}</span>
          <br />

          <span className="item_title">Señal típica / Control: </span>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <span className="item_descript">{componente[4]}</span>
          <br />

          <span className="item_title">Notas / Uso típico: </span>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <span className="item_descript">{componente[5]}</span>
          <br />

          <span className="item_title">Ejemplo de aplicación: </span>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <span className="item_descript">{componente[6]}</span>
          <br />

          <span className="item_title">Dónde aparece en el esquema: </span>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <span className="item_descript">{componente[7]}</span>
          <br />
          <div className="button-group">
          <button onClick={() => handleClickG(componente)} className='button-nav'>Buscar en Google</button>
          <button onClick={() => handleClickM(componente)} className='button-nav'>Buscar en Mercado Libre</button>
          </div>

        </div>
      ))}
    </div>
  )
}

export default Selected
