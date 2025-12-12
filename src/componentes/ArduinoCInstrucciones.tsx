// src/components/ArduinoCInstrucciones.tsx
import React from "react";

const ArduinoCInstrucciones: React.FC = () => {
  return (
    <div className="arduino-page">
      {/* Cabecera */}
      <header className="arduino-header">
        <span className="arduino-pill">Arduino / Lenguaje C</span>
        <h1 className="arduino-title">
          Instrucciones básicas en C para programar Arduino
        </h1>
        <p className="arduino-subtitle">
          Cómo está organizado un sketch, qué hacen <code>setup()</code> y{" "}
          <code>loop()</code>, y las instrucciones de C más usadas para controlar
          pines, tomar decisiones y repetir acciones.
        </p>
      </header>

      {/* ¿Qué lenguaje usa Arduino? */}
      <section className="arduino-section">
        <h2 className="arduino-section-title">¿Qué lenguaje usa Arduino?</h2>
        <p className="arduino-text">
          Cuando programás un Arduino, en realidad escribís en{" "}
          <strong>C/C++ simplificado</strong>. El IDE de Arduino genera por
          detrás algunos archivos y prototipos de función, pero lo que se compila
          es C/C++ para el microcontrolador (por ejemplo, el ATmega328P del
          Arduino Uno).
        </p>
        <p className="arduino-text">
          Definís <strong>variables</strong>, escribís código en las funciones
          especiales <code>setup()</code> y <code>loop()</code>, y usás
          instrucciones para controlar pines, leer entradas, tomar decisiones y
          repetir tareas.
        </p>
      </section>

      {/* Estructura básica de un sketch */}
      <section className="arduino-section">
        <h2 className="arduino-section-title">Estructura básica de un sketch</h2>

        <div className="arduino-block">
          <div className="arduino-block-tag">Plantilla típica</div>
          <pre className="arduino-code-block">
            <code>
{`// 1) Incluir librerías (opcional)
#include <Arduino.h>

// 2) Declarar constantes y variables globales
const int LED_PIN = 13;
int contador = 0;

// 3) setup(): se ejecuta una sola vez al encender o resetear
void setup() {
  pinMode(LED_PIN, OUTPUT); // configuramos el pin 13 como salida
  Serial.begin(9600);       // inicializamos el puerto serie
}

// 4) loop(): se ejecuta en un bucle infinito
void loop() {
  digitalWrite(LED_PIN, HIGH); // encender LED
  delay(500);                  // esperar 500 ms
  digitalWrite(LED_PIN, LOW);  // apagar LED
  delay(500);                  // esperar 500 ms

  contador = contador + 1;     // incrementar contador
  Serial.println(contador);    // enviar valor por serie
}`}
            </code>
          </pre>
        </div>

        <ul className="arduino-list">
          <li>
            <code>#include &lt;...&gt;</code>: incluye{" "}
            <strong>librerías</strong> (por ejemplo{" "}
            <code>&lt;Arduino.h&gt;</code>, <code>&lt;Wire.h&gt;</code>, etc.).
          </li>
          <li>
            <strong>Variables globales</strong>: se declaran fuera de las
            funciones, al principio del archivo.
          </li>
          <li>
            <code>void setup()</code>: se ejecuta una sola vez al iniciar. Ideal
            para configuraciones (pines, serie, sensores, etc.).
          </li>
          <li>
            <code>void loop()</code>: se ejecuta en un{" "}
            <strong>bucle infinito</strong>. Es el ciclo principal del programa.
          </li>
        </ul>
      </section>

      {/* Variables y tipos de datos */}
      <section className="arduino-section">
        <h2 className="arduino-section-title">
          Variables y tipos de datos básicos
        </h2>

        <p className="arduino-text">
          Algunos tipos de variables que se usan mucho en Arduino:
        </p>

        <div className="arduino-block">
          <div className="arduino-block-tag">Ejemplos de variables</div>
          <pre className="arduino-code-block">
            <code>
{`int contador = 0;         // entero (puede ser negativo)
unsigned int pasos = 0;  // entero sin signo (solo positivos)
long tiempo = 0;         // entero largo
float temperatura = 23.5; // número con decimales
bool encendido = true;    // booleano: true / false
char letra = 'A';         // un solo carácter
String texto = "Hola";    // cadena de caracteres (clase String de Arduino)`}
            </code>
          </pre>
        </div>

        <p className="arduino-text">
          Las <strong>constantes</strong> se declaran con <code>const</code>:
        </p>
        <pre className="arduino-code-block">
          <code>
{`const int LED_PIN = 13;
const float PI = 3.14159;`}
          </code>
        </pre>
      </section>

      {/* Entrada / salida digital y analógica */}
      <section className="arduino-section">
        <h2 className="arduino-section-title">
          Instrucciones de entrada/salida (digital y analógica)
        </h2>

        <div className="arduino-block">
          <div className="arduino-block-tag">Configurar pines</div>
          <pre className="arduino-code-block">
            <code>
{`pinMode(13, OUTPUT);      // el pin 13 será una salida
pinMode(2, INPUT);         // el pin 2 será una entrada (sin pull-up)
pinMode(3, INPUT_PULLUP);  // entrada con resistencia pull-up interna`}
            </code>
          </pre>
        </div>

        <div className="arduino-block">
          <div className="arduino-block-tag">Salida digital</div>
          <pre className="arduino-code-block">
            <code>
{`digitalWrite(13, HIGH); // poner el pin 13 en nivel alto (5V)
digitalWrite(13, LOW);  // poner el pin 13 en nivel bajo (0V)`}
            </code>
          </pre>
        </div>

        <div className="arduino-block">
          <div className="arduino-block-tag">Entrada digital</div>
          <pre className="arduino-code-block">
            <code>
{`int estado = digitalRead(2); // lee 0 o 1 (LOW o HIGH)

if (estado == HIGH) {
  // botón presionado, por ejemplo
} else {
  // botón suelto
}`}
            </code>
          </pre>
        </div>

        <div className="arduino-block">
          <div className="arduino-block-tag">Entrada analógica</div>
          <pre className="arduino-code-block">
            <code>
{`int valor = analogRead(A0); // lee entre 0 y 1023

// Convertir lectura a voltaje (Arduino Uno, 5V de referencia)
float voltaje = valor * (5.0 / 1023.0);`}
            </code>
          </pre>
        </div>

        <div className="arduino-block">
          <div className="arduino-block-tag">Salida tipo PWM (analogWrite)</div>
          <pre className="arduino-code-block">
            <code>
{`analogWrite(5, 0);    // 0% (apagado)
analogWrite(5, 128);  // ~50%
analogWrite(5, 255);  // ~100% (máxima potencia)`}
            </code>
          </pre>
        </div>
      </section>

      {/* Control de flujo */}
      <section className="arduino-section">
        <h2 className="arduino-section-title">
          Instrucciones de control de flujo
        </h2>

        <p className="arduino-text">
          Son las instrucciones de C que permiten tomar decisiones y repetir
          código.
        </p>

        <div className="arduino-block">
          <div className="arduino-block-tag">if / else</div>
          <pre className="arduino-code-block">
            <code>
{`if (temperatura > 30.0) {
  digitalWrite(VENTILADOR_PIN, HIGH); // encender ventilador
} else {
  digitalWrite(VENTILADOR_PIN, LOW);  // apagar ventilador
}`}
            </code>
          </pre>
        </div>

        <div className="arduino-block">
          <div className="arduino-block-tag">else if</div>
          <pre className="arduino-code-block">
            <code>
{`if (temperatura > 35.0) {
  // muy caliente
} else if (temperatura > 25.0) {
  // templado
} else {
  // frío
}`}
            </code>
          </pre>
        </div>

        <div className="arduino-block">
          <div className="arduino-block-tag">switch / case</div>
          <pre className="arduino-code-block">
            <code>
{`int modo = 2;

switch (modo) {
  case 1:
    // modo 1
    break;
  case 2:
    // modo 2
    break;
  default:
    // otro modo
    break;
}`}
            </code>
          </pre>
        </div>

        <div className="arduino-block">
          <div className="arduino-block-tag">for (bucle con contador)</div>
          <pre className="arduino-code-block">
            <code>
{`for (int i = 0; i < 10; i++) {
  // este bloque se ejecuta 10 veces
  // i toma los valores 0,1,2,...,9
}`}
            </code>
          </pre>
        </div>

        <div className="arduino-block">
          <div className="arduino-block-tag">while (bucle condicionado)</div>
          <pre className="arduino-code-block">
            <code>
{`while (digitalRead(BOTON_PIN) == LOW) {
  // se repite mientras el botón esté suelto
  // ¡cuidado con los bucles infinitos!
}`}
            </code>
          </pre>
        </div>

        <div className="arduino-block">
          <div className="arduino-block-tag">do / while</div>
          <pre className="arduino-code-block">
            <code>
{`int numero;
do {
  numero = analogRead(POT_PIN);
} while (numero < 100); // el bloque se ejecuta al menos una vez`}
            </code>
          </pre>
        </div>
      </section>

      {/* Funciones propias */}
      <section className="arduino-section">
        <h2 className="arduino-section-title">Funciones propias</h2>

        <p className="arduino-text">
          Además de <code>setup()</code> y <code>loop()</code>, podés crear tus
          propias funciones para organizar el código y evitar repetir.
        </p>

        <div className="arduino-block">
          <div className="arduino-block-tag">Ejemplo de función</div>
          <pre className="arduino-code-block">
            <code>
{`// Declaración (prototipo) opcional arriba del archivo
void parpadear(int pin, int tiempo);

// Definición de la función
void parpadear(int pin, int tiempo) {
  digitalWrite(pin, HIGH);
  delay(tiempo);
  digitalWrite(pin, LOW);
  delay(tiempo);
}

void loop() {
  parpadear(13, 200); // llamamos a la función
}`}
            </code>
          </pre>
        </div>

        <p className="arduino-text">
          Estructura general de una función en C:
        </p>
        <pre className="arduino-code-block">
          <code>
{`tipo_retorno nombreFuncion(tipo1 param1, tipo2 param2, ...) {
  // código
  return valor; // si el tipo_retorno no es void
}`}
          </code>
        </pre>
      </section>

      {/* Resumen */}
      <section className="arduino-section">
        <h2 className="arduino-section-title">Resumen rápido</h2>
        <ul className="arduino-list">
          <li>
            Arduino usa <strong>C/C++</strong>, con{" "}
            <code>setup()</code> y <code>loop()</code> como punto de entrada.
          </li>
          <li>
            Usás <strong>variables</strong>, <strong>constantes</strong> y{" "}
            <strong>tipos de datos</strong> como en C.
          </li>
          <li>
            Controlás pines con <code>pinMode()</code>,{" "}
            <code>digitalWrite()</code>, <code>digitalRead()</code>,{" "}
            <code>analogRead()</code> y <code>analogWrite()</code>.
          </li>
          <li>
            Tomás decisiones con <code>if</code>, <code>else</code>,{" "}
            <code>switch</code> y repetís código con <code>for</code>,{" "}
            <code>while</code>, <code>do / while</code>.
          </li>
          <li>
            Podés crear <strong>funciones propias</strong> para ordenar mejor el
            programa.
          </li>
        </ul>
      </section>

      <footer className="arduino-footer">
        <p className="arduino-footer-text">
          Podés usar este componente como apunte teórico y, en otra página, sumar
          ejemplos prácticos de proyectos (parpadeo, lectura de sensores, control
          de relés, etc.).
        </p>
      </footer>
    </div>
  );
};

export default ArduinoCInstrucciones;

