import React, { useMemo, useState } from "react";
import {
  COMMON_COPPER_SECTIONS_MM2,
  type CableSystem,
  suggestCopperSection,
} from "../electricalCalculations";

const TablaCorrienteCable: React.FC = () => {
  const [tipoSistema, setTipoSistema] = useState<CableSystem>(
    "singlePhaseTwoWire",
  );
  const [voltaje, setVoltaje] = useState("230");
  const [corriente, setCorriente] = useState("16");
  const [longitud, setLongitud] = useState("20");
  const [factorPotencia, setFactorPotencia] = useState("1");
  const [temperatura, setTemperatura] = useState("20");
  const [caidaMaxima, setCaidaMaxima] = useState("3");
  const [densidadMaxima, setDensidadMaxima] = useState("6");

  const resultado = useMemo(
    () =>
      suggestCopperSection({
        system: tipoSistema,
        nominalVoltageV: Number.parseFloat(voltaje),
        currentA: Number.parseFloat(corriente),
        oneWayLengthM: Number.parseFloat(longitud),
        powerFactor: Number.parseFloat(factorPotencia),
        conductorTemperatureC: Number.parseFloat(temperatura),
        maxVoltageDropPercent: Number.parseFloat(caidaMaxima),
        maxCurrentDensityAPerMm2: Number.parseFloat(densidadMaxima),
      }),
    [
      tipoSistema,
      voltaje,
      corriente,
      longitud,
      factorPotencia,
      temperatura,
      caidaMaxima,
      densidadMaxima,
    ],
  );

  return (
    <div className="page-wrapper">
      <header className="sheet-header">
        <div className="sheet-pill">Conductores de cobre · modelo didáctico</div>
        <h1 className="sheet-title">
          Caída de tensión y comparación de secciones de cable
        </h1>
        <p className="sheet-subtitle">
          Calculadora física simplificada para comparar secciones de cobre según
          corriente, longitud y caída de tensión. No calcula ampacidad normativa
          ni reemplaza las tablas AEA/IRAM, IEC o del fabricante.
        </p>
      </header>

      <main className="page-wrapper">
        <section className="sheet-section">
          <h2 className="sheet-title">Supuestos del modelo</h2>
          <ul className="formula-block">
            <li>Conductor de cobre.</li>
            <li>La longitud ingresada es la longitud de un conductor, no ida + vuelta.</li>
            <li>
              La resistencia se corrige linealmente con la temperatura del conductor.
            </li>
            <li>
              La caída de tensión considera sólo la componente resistiva y desprecia
              la reactancia del cable.
            </li>
            <li>
              En monofásico se usa ΔV ≈ 2·I·R·cos φ; en trifásico equilibrado,
              ΔV ≈ √3·I·R·cos φ.
            </li>
            <li>
              El criterio de densidad de corriente es un filtro didáctico definido
              por el usuario; <strong>no es un límite de ampacidad normativa</strong>.
            </li>
          </ul>
        </section>

        <section className="sheet-section">
          <h2 className="sheet-title">Datos y criterios de comparación</h2>

          <div className="calc-grid">
            <label htmlFor="cable-system">
              Tipo de sistema
              <select
                id="cable-system"
                value={tipoSistema}
                onChange={(event) =>
                  setTipoSistema(event.target.value as CableSystem)
                }
              >
                <option value="singlePhaseTwoWire">Monofásico, dos conductores</option>
                <option value="threePhaseBalanced">Trifásico equilibrado</option>
              </select>
            </label>

            <label htmlFor="cable-voltage">
              Tensión nominal (V)
              <input
                id="cable-voltage"
                type="number"
                min={1}
                step={1}
                inputMode="decimal"
                value={voltaje}
                onChange={(event) => setVoltaje(event.target.value)}
              />
            </label>

            <label htmlFor="cable-current">
              Corriente de línea (A)
              <input
                id="cable-current"
                type="number"
                min={0.01}
                step={0.1}
                inputMode="decimal"
                value={corriente}
                onChange={(event) => setCorriente(event.target.value)}
              />
            </label>

            <label htmlFor="cable-length">
              Longitud de un conductor (m)
              <input
                id="cable-length"
                type="number"
                min={0.01}
                step={1}
                inputMode="decimal"
                value={longitud}
                onChange={(event) => setLongitud(event.target.value)}
              />
            </label>

            <label htmlFor="cable-power-factor">
              Factor de potencia cos φ
              <input
                id="cable-power-factor"
                type="number"
                min={0.01}
                max={1}
                step={0.01}
                inputMode="decimal"
                value={factorPotencia}
                onChange={(event) => setFactorPotencia(event.target.value)}
              />
            </label>

            <label htmlFor="cable-temperature">
              Temperatura del conductor (°C)
              <input
                id="cable-temperature"
                type="number"
                step={1}
                inputMode="decimal"
                value={temperatura}
                onChange={(event) => setTemperatura(event.target.value)}
              />
            </label>

            <label htmlFor="cable-max-drop">
              Caída máxima elegida (%)
              <input
                id="cable-max-drop"
                type="number"
                min={0.01}
                step={0.1}
                inputMode="decimal"
                value={caidaMaxima}
                onChange={(event) => setCaidaMaxima(event.target.value)}
              />
            </label>

            <label htmlFor="cable-max-density">
              Densidad máxima didáctica (A/mm²)
              <input
                id="cable-max-density"
                type="number"
                min={0.01}
                step={0.1}
                inputMode="decimal"
                value={densidadMaxima}
                onChange={(event) => setDensidadMaxima(event.target.value)}
                aria-describedby="cable-density-help"
              />
              <small id="cable-density-help">
                Sólo criterio comparativo del modelo; no representa ampacidad reglamentaria.
              </small>
            </label>
          </div>
        </section>

        <section className="sheet-section" aria-live="polite" aria-atomic="true">
          <h2 className="sheet-title">Resultado orientativo</h2>

          {!resultado.ok ? (
            <p role="alert" className="calc-results" style={{ color: "#f97373" }}>
              {resultado.error}
            </p>
          ) : resultado.value.selected ? (
            <div className="calc-results">
              <p>
                Primera sección candidata que cumple simultáneamente los dos
                criterios ingresados: <strong>{resultado.value.selected.sectionMm2} mm²</strong>.
              </p>
              <ul>
                <li>
                  Caída aproximada: {resultado.value.selected.voltageDropV.toFixed(2)} V
                  ({" "}{resultado.value.selected.voltageDropPercent.toFixed(2)} %)
                </li>
                <li>
                  Densidad de corriente: {resultado.value.selected.currentDensityAPerMm2.toFixed(2)} A/mm²
                </li>
                <li>
                  Resistencia de un conductor: {resultado.value.selected.oneWayResistanceOhm.toFixed(4)} Ω
                </li>
                <li>
                  Pérdidas resistivas totales aproximadas: {resultado.value.selected.resistiveLossW.toFixed(1)} W
                </li>
              </ul>
            </div>
          ) : (
            <p className="calc-results">
              Ninguna de las secciones candidatas hasta {COMMON_COPPER_SECTIONS_MM2[COMMON_COPPER_SECTIONS_MM2.length - 1]} mm²
              cumple simultáneamente los criterios ingresados. Esto no significa que
              “corresponda” usar una sección mayor: el diseño real requiere revisar
              ampacidad, protección, cortocircuito, método de instalación y reglamentación.
            </p>
          )}
        </section>

        {resultado.ok && (
          <section className="sheet-section">
            <h2 className="sheet-title">Comparación entre secciones candidatas</h2>
            <div className="page-table-container">
              <table>
                <caption className="sr-only">
                  Comparación de densidad de corriente, caída de tensión y pérdidas
                  resistivas para distintas secciones de conductor de cobre.
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Sección</th>
                    <th scope="col">J</th>
                    <th scope="col">ΔV</th>
                    <th scope="col">ΔV %</th>
                    <th scope="col">Pérdidas</th>
                    <th scope="col">Criterios</th>
                  </tr>
                </thead>
                <tbody>
                  {resultado.value.evaluated.map((fila) => {
                    const cumpleDensidad =
                      fila.currentDensityAPerMm2 <=
                      resultado.value.maxCurrentDensityAPerMm2;
                    const cumpleCaida =
                      fila.voltageDropPercent <=
                      resultado.value.maxVoltageDropPercent;
                    const cumple = cumpleDensidad && cumpleCaida;

                    return (
                      <tr key={fila.sectionMm2}>
                        <th scope="row">{fila.sectionMm2} mm²</th>
                        <td>{fila.currentDensityAPerMm2.toFixed(2)} A/mm²</td>
                        <td>{fila.voltageDropV.toFixed(2)} V</td>
                        <td>{fila.voltageDropPercent.toFixed(2)} %</td>
                        <td>{fila.resistiveLossW.toFixed(1)} W</td>
                        <td>{cumple ? "Cumple modelo" : "No cumple modelo"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        )}

        <section className="formula-block-warning">
          <div className="tag">Límite de uso</div>
          <p>
            Esta herramienta compara secciones con un modelo resistivo transparente.
            <strong> No determina por sí sola una sección reglamentaria.</strong> La
            selección final debe verificarse con ampacidad, método de instalación,
            aislamiento, agrupamiento, temperatura ambiente, protección contra
            sobrecorriente, cortocircuito, caída de tensión admisible y normativa aplicable.
          </p>
        </section>
      </main>
    </div>
  );
};

export default TablaCorrienteCable;
