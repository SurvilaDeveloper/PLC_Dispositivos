// src/components/LadderPlcCheatSheet.tsx
import "./LadderPlcCheatSheet.css";

export default function LadderPlcCheatSheet() {
  return (
    <div className="plc-cheatsheet">
      {/* Encabezado */}
      <header className="plc-header">
        <div className="plc-header-pill">PLC · Lenguaje Ladder</div>
        <h1 className="plc-title">Apuntes de comandos Ladder para PLC</h1>
        <p className="plc-subtitle">
          Resumen de contactos, bobinas, temporizadores, contadores y bloques típicos según IEC 61131-3.
          Útil como referencia cuando estás programando PLC (Siemens, Allen-Bradley, Schneider, etc.).
        </p>
      </header>

      {/* Navegación rápida */}
      <nav className="plc-nav">
        <a href="#contactos" className="plc-nav-item">Contactos y bobinas</a>
        <a href="#timers" className="plc-nav-item">Temporizadores</a>
        <a href="#contadores" className="plc-nav-item">Contadores</a>
        <a href="#flancos" className="plc-nav-item">Flancos</a>
        <a href="#comparadores" className="plc-nav-item">Comparadores</a>
        <a href="#bits" className="plc-nav-item">Bits / lógica</a>
        <a href="#matematica" className="plc-nav-item">Matemática</a>
        <a href="#datos" className="plc-nav-item">Movimiento de datos</a>
        <a href="#casting" className="plc-nav-item">Casting</a>
        <a href="#flujo" className="plc-nav-item">Flujo de programa</a>
        <a href="#especiales" className="plc-nav-item">Bloques especiales</a>
        <a href="#scan" className="plc-nav-item">Ciclo de scan</a>
        <a href="#direccionamiento" className="plc-nav-item">Direccionamiento</a>
        <a href="#tipos-datos" className="plc-nav-item">Tipos de datos</a>
        <a href="#ejemplos" className="plc-nav-item">Ejemplos Ladder</a>
        <a href="#buenas-practicas" className="plc-nav-item">Buenas prácticas</a>
      </nav>

      {/* Contenido */}
      <main className="plc-content">
        {/* 1. Contactos y bobinas */}
        <section id="contactos" className="plc-section">
          <h2 className="plc-section-title">1. Contactos y bobinas (lógica básica)</h2>

          <div className="plc-two-columns">
            <div>
              <h3 className="plc-section-subtitle">Contactos (lado izquierdo del peldaño)</h3>
              <ul className="plc-list">
                <li>
                  <span className="plc-code">—[ ]—</span>
                  <div>
                    <strong>Contacto normalmente abierto (NO)</strong> — Conduce cuando el bit está en 1 (TRUE).
                  </div>
                </li>
                <li>
                  <span className="plc-code">—[/]—</span>
                  <div>
                    <strong>Contacto normalmente cerrado (NC)</strong> — Conduce cuando el bit está en 0 (FALSE).
                  </div>
                </li>
                <li>
                  <span className="plc-code">—[P]—</span>
                  <div>
                    <strong>Flanco ascendente</strong> — TRUE solo en el instante que la señal pasa de 0→1.
                  </div>
                </li>
                <li>
                  <span className="plc-code">—[N]—</span>
                  <div>
                    <strong>Flanco descendente</strong> — TRUE solo en el instante que la señal pasa de 1→0.
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="plc-section-subtitle">Bobinas (lado derecho del peldaño)</h3>
              <ul className="plc-list">
                <li>
                  <span className="plc-code">—( )—</span>
                  <div>
                    <strong>Bobina simple</strong> — Escribe 1 si la lógica a la izquierda es TRUE, 0 si es FALSE.
                  </div>
                </li>
                <li>
                  <span className="plc-code">—(/)—</span>
                  <div>
                    <strong>Bobina negada</strong> — Escribe el valor invertido (1 cuando la lógica es FALSE).
                  </div>
                </li>
                <li>
                  <span className="plc-code">—(S)—</span>
                  <div>
                    <strong>Set / Latch</strong> — Pone el bit en 1 y lo mantiene hasta que otra lógica lo resetee.
                  </div>
                </li>
                <li>
                  <span className="plc-code">—(R)—</span>
                  <div>
                    <strong>Reset / Unlatch</strong> — Pone el bit en 0.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 2. Temporizadores */}
        <section id="timers" className="plc-section">
          <h2 className="plc-section-title">2. Temporizadores (Timers)</h2>
          <p className="plc-text">
            Campos típicos: <span className="plc-code-inline">IN</span> (entrada),
            <span className="plc-code-inline">PT</span> (tiempo preseleccionado),
            <span className="plc-code-inline">Q</span> (salida),
            <span className="plc-code-inline">ET</span> (tiempo transcurrido).
          </p>
          <ul className="plc-list">
            <li>
              <strong>TON — Timer On-Delay</strong>
              <div className="plc-text-small">
                Q pasa a 1 cuando IN se mantiene en 1 durante PT.
              </div>
            </li>
            <li>
              <strong>TOF — Timer Off-Delay</strong>
              <div className="plc-text-small">
                Q se mantiene en 1 un tiempo PT después de que IN pasa a 0.
              </div>
            </li>
            <li>
              <strong>TP — Timer Pulse</strong>
              <div className="plc-text-small">
                Ante el flanco 0→1 de IN, Q se pone en 1 durante PT y luego vuelve a 0.
              </div>
            </li>
            <li>
              <strong>TONR / RTO — Timer acumulativo / retentivo</strong>
              <div className="plc-text-small">
                Acumula tiempo mientras IN está en 1; solo se resetea con una señal de reset.
              </div>
            </li>
          </ul>
        </section>

        {/* 3. Contadores */}
        <section id="contadores" className="plc-section">
          <h2 className="plc-section-title">3. Contadores (Counters)</h2>
          <ul className="plc-list">
            <li>
              <strong>CTU — Contador ascendente</strong>
              <ul className="plc-sublist">
                <li><span className="plc-code-inline">CU</span> — entrada de conteo (flanco).</li>
                <li>
                  <span className="plc-code-inline">PV</span> — valor preseleccionado;
                  <span className="plc-code-inline">CV</span> — valor actual.
                </li>
                <li><span className="plc-code-inline">Q</span> — TRUE cuando <code>CV ≥ PV</code>.</li>
                <li><span className="plc-code-inline">R</span> — reset del contador.</li>
              </ul>
            </li>
            <li>
              <strong>CTD — Contador descendente</strong>
            </li>
            <li>
              <strong>CTUD — Contador UP/DOWN</strong> (sube y baja según entradas).
            </li>
          </ul>
        </section>

        {/* 4. Flancos */}
        <section id="flancos" className="plc-section">
          <h2 className="plc-section-title">4. Flancos / disparadores</h2>
          <ul className="plc-list">
            <li>
              <strong>R_TRIG / P_TRIG — Flanco positivo</strong>
              <div className="plc-text-small">
                Salida TRUE solo un ciclo cuando la entrada pasa de 0 a 1.
              </div>
            </li>
            <li>
              <strong>F_TRIG / N_TRIG — Flanco negativo</strong>
              <div className="plc-text-small">
                Salida TRUE solo un ciclo cuando la entrada pasa de 1 a 0.
              </div>
            </li>
          </ul>
        </section>

        {/* 5. Comparadores */}
        <section id="comparadores" className="plc-section">
          <h2 className="plc-section-title">5. Comparadores (valores numéricos)</h2>
          <ul className="plc-list plc-list-grid">
            <li><strong>EQ</strong> — Equal → <code>A == B</code></li>
            <li><strong>NE</strong> — Not Equal → <code>A != B</code></li>
            <li><strong>GT</strong> — Greater Than → <code>A &gt; B</code></li>
            <li><strong>GE</strong> — Greater or Equal → <code>A &gt;= B</code></li>
            <li><strong>LT</strong> — Less Than → <code>A &lt; B</code></li>
            <li><strong>LE</strong> — Less or Equal → <code>A &lt;= B</code></li>
          </ul>
          <p className="plc-text-small">
            Ejemplo: alarma de nivel si <code>Nivel_Tanque &gt; 80%</code>.
          </p>
        </section>

        {/* 6. Operaciones booleanas / bits */}
        <section id="bits" className="plc-section">
          <h2 className="plc-section-title">6. Operaciones booleanas / de bits</h2>
          <ul className="plc-list">
            <li><strong>AND, OR, XOR, NOT</strong> — operaciones lógicas básicas.</li>
            <li><strong>SET_BIT, RESET_BIT, TEST_BIT</strong> — manipulación de bits individuales.</li>
            <li><strong>SHL, SHR</strong> — corrimientos (shift) de bits.</li>
            <li><strong>ROL, ROR</strong> — rotaciones de bits.</li>
          </ul>
        </section>

        {/* 7. Matemática */}
        <section id="matematica" className="plc-section">
          <h2 className="plc-section-title">7. Operaciones matemáticas</h2>
          <ul className="plc-list plc-list-grid">
            <li><strong>ADD</strong> — suma (<code>OUT = IN1 + IN2</code>)</li>
            <li><strong>SUB</strong> — resta</li>
            <li><strong>MUL</strong> — multiplicación</li>
            <li><strong>DIV</strong> — división</li>
            <li><strong>MOD</strong> — resto</li>
            <li><strong>ABS</strong> — valor absoluto</li>
            <li><strong>SQRT</strong> — raíz cuadrada</li>
            <li><strong>NEG</strong> — cambia el signo</li>
          </ul>
          <p className="plc-text-small">
            Típico para escalar entradas analógicas, calcular promedios, errores, etc.
          </p>
        </section>

        {/* 8. Movimiento de datos */}
        <section id="datos" className="plc-section">
          <h2 className="plc-section-title">8. Movimiento y manejo de datos</h2>
          <ul className="plc-list">
            <li><strong>MOV</strong> — copia un valor de una variable a otra.</li>
            <li><strong>INC / DEC</strong> — incrementa / decrementa un valor.</li>
            <li><strong>SHL, SHR, ROL, ROR</strong> — registros desplazantes, corrimientos y rotaciones.</li>
            <li><strong>FIFO / LIFO</strong> — colas (cuando el PLC las soporta).</li>
          </ul>
        </section>

        {/* 9. Casting */}
        <section id="casting" className="plc-section">
          <h2 className="plc-section-title">9. Conversión de tipos (casting)</h2>
          <ul className="plc-list">
            <li><strong>INT_TO_REAL</strong>, <strong>REAL_TO_INT</strong></li>
            <li><strong>DINT_TO_INT</strong>, <strong>INT_TO_DINT</strong></li>
            <li><strong>BCD_TO_INT</strong>, <strong>INT_TO_BCD</strong></li>
            <li><strong>WORD_TO_INT</strong>, <strong>INT_TO_WORD</strong>, etc.</li>
          </ul>
        </section>

        {/* 10. Flujo de programa */}
        <section id="flujo" className="plc-section">
          <h2 className="plc-section-title">10. Saltos, subrutinas y control de programa</h2>
          <ul className="plc-list">
            <li><strong>CALL</strong> — llama a una subrutina o bloque de función.</li>
            <li><strong>RET</strong> — retorno de subrutina.</li>
            <li><strong>JMP</strong> — salto a una etiqueta (<strong>LBL</strong>).</li>
            <li><strong>MCR</strong> — Master Control Relay; habilita o deshabilita un bloque de programa.</li>
          </ul>
        </section>

        {/* 11. Bloques especiales */}
        <section id="especiales" className="plc-section">
          <h2 className="plc-section-title">11. Bloques especiales (según PLC)</h2>
          <ul className="plc-list">
            <li><strong>PID</strong> — control proporcional–integral–derivativo.</li>
            <li><strong>SCALE / NORM_X</strong> — escalado de señales analógicas (ej.: 0–10 V → 0–100 %).</li>
            <li><strong>COMM</strong> — comunicación (Modbus, Ethernet, etc.).</li>
            <li><strong>HSC</strong> — High Speed Counter (contadores rápidos).</li>
            <li><strong>PWM</strong> — generación de señales PWM.</li>
          </ul>
        </section>

        {/* 12. Ciclo de scan */}
        <section id="scan" className="plc-section">
          <h2 className="plc-section-title">12. Ciclo de scan del PLC</h2>
          <ul className="plc-list">
            <li>
              <strong>Lectura de entradas físicas</strong> — el PLC copia el estado de entradas digitales/analógicas a la imagen de proceso.
            </li>
            <li>
              <strong>Ejecución del programa</strong> — se evalúan los peldaños Ladder, bloques y funciones usando la imagen de entradas.
            </li>
            <li>
              <strong>Actualización de salidas</strong> — el resultado (bits internos, salidas, registros) se vuelca a las salidas físicas.
            </li>
          </ul>
          <p className="plc-text-small">
            Esto se repite cada ciclo de scan. Un cambio en una entrada puede reflejarse
            en la salida recién en el siguiente ciclo.
          </p>
        </section>

        {/* 13. Direccionamiento */}
        <section id="direccionamiento" className="plc-section">
          <h2 className="plc-section-title">13. Direccionamiento típico (ejemplos)</h2>
          <div className="plc-two-columns">
            <div>
              <h3 className="plc-section-subtitle">Siemens (S7, TIA Portal)</h3>
              <ul className="plc-list">
                <li><code>I0.0</code> — Entrada digital 0, bit 0</li>
                <li><code>Q0.0</code> — Salida digital 0, bit 0</li>
                <li><code>M0.0</code> — Marca (bit interno)</li>
                <li><code>DB10.DBW0</code> — Palabra en Data Block 10, offset 0</li>
                <li><code>DB20.DBD4</code> — Doble palabra (REAL/DINT) en DB20, offset 4</li>
              </ul>
            </div>
            <div>
              <h3 className="plc-section-subtitle">Allen-Bradley (Logix)</h3>
              <ul className="plc-list">
                <li><code>I:1/0</code> — Entrada módulo 1, bit 0</li>
                <li><code>O:2/1</code> — Salida módulo 2, bit 1</li>
                <li><code>B3:0/0</code> — Bit interno (archivo B3)</li>
                <li><code>N7:0</code> — Entero (archivo N7)</li>
                <li><code>F8:0</code> — Float (archivo F8)</li>
              </ul>
            </div>
          </div>
          <p className="plc-text-small">
            El nombre real de las direcciones depende de la familia de PLC y del proyecto,
            pero la idea es similar: entradas, salidas, marcas y datos en bloques/archivos.
          </p>
        </section>

        {/* 16. Tipos de datos y variables */}
        <section id="tipos-datos" className="plc-section">
          <h2 className="plc-section-title">14. Tipos de datos y tipo de variable</h2>

          <div className="plc-two-columns">
            <div>
              <h3 className="plc-section-subtitle">Tipos de datos IEC 61131-3</h3>
              <ul className="plc-list">
                <li><strong>BOOL</strong> — lógico TRUE/FALSE (entradas, salidas, flags).</li>
                <li><strong>SINT, INT, DINT</strong> — enteros con signo (8/16/32 bits).</li>
                <li><strong>USINT, UINT, UDINT</strong> — enteros sin signo.</li>
                <li><strong>REAL, LREAL</strong> — números reales (coma flotante).</li>
                <li><strong>TIME</strong> — tiempos (ms, s, etc.), usado en TON/TOF/TP.</li>
                <li><strong>DATE, TIME_OF_DAY, DATE_AND_TIME</strong> — fechas y horas.</li>
                <li><strong>BYTE, WORD, DWORD</strong> — grupos de bits (8/16/32).</li>
                <li><strong>STRING[n]</strong> — cadenas de texto.</li>
              </ul>
            </div>

            <div>
              <h3 className="plc-section-subtitle">Tipo de variable en el programa</h3>
              <ul className="plc-list">
                <li>
                  <strong>Entradas físicas</strong> — terminales de campo (sensores).
                  Ej.: Siemens <code>I0.0</code>, AB <code>I:1/0</code>.
                </li>
                <li>
                  <strong>Salidas físicas</strong> — actuadores, relés, bobinas.
                  Ej.: Siemens <code>Q0.0</code>, AB <code>O:2/0</code>.
                </li>
                <li>
                  <strong>Marcas / internas</strong> — bits o palabras auxiliares (memoria).
                  Ej.: Siemens <code>M0.0</code>, AB <code>B3:0/0</code>.
                </li>
                <li>
                  <strong>Locales de bloque</strong> — declaradas dentro de un FB/FC, solo visibles allí.
                </li>
                <li>
                  <strong>Globales</strong> — visibles desde varios bloques (según la configuración del proyecto).
                </li>
                <li>
                  <strong>Retentivas</strong> — conservan valor al apagar/encender PLC (según marca/configuración).
                </li>
              </ul>
            </div>
          </div>

          <p className="plc-text-small">
            En Ladder, verás el tipo de dato en la declaración de variables (ej. <code>Nivel_Tanque : REAL</code>,
            <code>Marcha_Motor : BOOL</code>) y el “tipo de variable” según dónde esté vinculada: entrada, salida,
            marca interna, global, etc.
          </p>
        </section>


        {/* 14. Ejemplos Ladder */}
        <section id="ejemplos" className="plc-section">
          <h2 className="plc-section-title">15. Ejemplos de peldaños típicos</h2>

          <h3 className="plc-section-subtitle">14.1. Arranque/parada de motor con enclavamiento</h3>
          <p className="plc-text-small">
            Lógica clásica de marcha–paro con realimentación del contactor:
          </p>
          <ul className="plc-list">
            <li>
              <strong>Entradas:</strong> <code>Start</code> (pulsador NO),
              <code>Stop</code> (pulsador NC), <code>KM</code> (realimentación del contactor).
            </li>
            <li>
              <strong>Salida:</strong> <code>KM</code> (bobina del contactor).
            </li>
          </ul>
          <p className="plc-text-small">
            Peldaño lógico: <code>Stop</code> en serie con (<code>Start</code> en paralelo con
            el contacto de realimentación de <code>KM</code>), y al final la bobina de <code>KM</code>.
          </p>

          <h3 className="plc-section-subtitle">14.2. Temporizado de arranque</h3>
          <p className="plc-text-small">
            Uso de TON para arrancar un motor unos segundos después de una orden:
          </p>
          <ul className="plc-list">
            <li>Peldaño 1: <code>Start</code> → <strong>TON</strong> con <code>PT = 5 s</code>.</li>
            <li>Peldaño 2: <code>TON.Q</code> → bobina <code>KM</code>.</li>
          </ul>
        </section>

        {/* 15. Buenas prácticas */}
        <section id="buenas-practicas" className="plc-section">
          <h2 className="plc-section-title">16. Buenas prácticas de programación en Ladder</h2>
          <ul className="plc-list">
            <li>
              <strong>Nombra bien las variables</strong> — evitá <code>M0.0</code> sin descripción;
              usá nombres tipo <code>Marcha_Banda1</code>, <code>Alarma_Nivel_Alto</code>, etc.
            </li>
            <li>
              <strong>Comentá los peldaños</strong> — explicá qué hace cada peldaño (función,
              condición de seguridad, etc.).
            </li>
            <li>
              <strong>Separá en secciones</strong> — por máquina, zona o función (seguridad, arranques, alarmas, etc.).
            </li>
            <li>
              <strong>Evitá lógica excesivamente anidada</strong> — si el peldaño es muy largo, dividilo en varios.
            </li>
            <li>
              <strong>Usá bloques reutilizables</strong> — FB/FC para secuencias, PID, gestión de alarmas, etc.
            </li>
            <li>
              <strong>Probá en simulador</strong> cuando sea posible antes de descargar en la planta real.
            </li>
          </ul>
        </section>
      </main>

      <footer className="plc-footer">
        Apuntes pensados como guía rápida mientras programás PLC en Ladder.
        Podés adaptarlos a cada marca cambiando nombres de bloques y direcciones.
      </footer>
    </div>
  );
}
