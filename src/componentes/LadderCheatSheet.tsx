// src/components/LadderPlcCheatSheet.tsx
import "./LadderPlcCheatSheet.css";

export default function LadderPlcCheatSheet() {
  return (
    <div className="plc-cheatsheet">
      {/* Encabezado */}
      <header className="plc-header">
        <div className="plc-header-pill">PLC · Lenguaje Ladder</div>
        <h1 className="plc-title">Chuleta de comandos Ladder para PLC</h1>
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
      </main>

      <footer className="plc-footer">
        Chuleta pensada como guía rápida mientras programás PLC en Ladder.
        Podés adaptarla a cada marca cambiando nombres de bloques.
      </footer>
    </div>
  );
}


