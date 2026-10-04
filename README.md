# Electricidad, Electrónica y Automatización

[![Quality & GitHub Pages](https://github.com/SurvilaDeveloper/PLC_Dispositivos/actions/workflows/quality-and-pages.yml/badge.svg)](https://github.com/SurvilaDeveloper/PLC_Dispositivos/actions/workflows/quality-and-pages.yml)

Toolkit técnico interactivo desarrollado con **React, TypeScript y Vite**. Reúne apuntes, calculadoras y recursos sobre electricidad, electrónica, motores, PLC, automatización industrial y sistemas embebidos.

> El repositorio conserva el nombre histórico `PLC_Dispositivos`, aunque el alcance actual del proyecto es más amplio.

## Demo

**GitHub Pages:**  
https://surviladeveloper.github.io/PLC_Dispositivos/

## Objetivo del proyecto

El proyecto comenzó como una colección personal de apuntes técnicos y evolucionó hacia una aplicación web organizada y navegable. La refactorización actual prioriza:

- arquitectura y modelos TypeScript explícitos;
- URLs compartibles sin incorporar un router innecesario;
- accesibilidad y semántica HTML;
- separación entre cálculos físicos y presentación;
- validaciones para evitar resultados físicamente imposibles;
- contenido técnico con supuestos visibles;
- referencias oficiales cuando se mencionan reglamentaciones;
- tests automatizados para las funciones de cálculo;
- lint, typecheck y build como puerta de calidad;
- code-splitting por secciones;
- CI y despliegue preparado con GitHub Actions.

## Qué incluye

### Electricidad e instalaciones

- resistencia de conductores de cobre;
- caída de tensión y comparación orientativa de secciones;
- dispositivos de protección y maniobra;
- puesta a tierra y equipotencialidad;
- apuntes domiciliarios e industriales;
- referencias a AEA, ENRE, CABA y otros organismos, distinguiendo su alcance.

### Motores trifásicos

- potencia activa, reactiva y aparente;
- rendimiento y potencia mecánica de eje;
- velocidad síncrona y deslizamiento;
- par mecánico y modelo electromagnético;
- factor de potencia;
- ensayo en vacío y rotor bloqueado;
- calculadora simplificada de parámetros equivalentes.

### PLC y automatización

- catálogo tipado de componentes;
- comandos Ladder;
- temporizadores, contadores y elementos de control;
- material de consulta sobre automatización industrial.

### Electrónica

- componentes y símbolos;
- RLC, capacitores e inductores;
- BJT y MOSFET;
- configuraciones y circuitos de ejemplo.

### Sistemas embebidos

- microcontroladores;
- placas de desarrollo;
- Arduino;
- matrices de elección de plataforma y arquitectura.

## Stack

- **React 19**
- **TypeScript 5**
- **Vite 7**
- CSS
- MathJax
- ESLint
- Node.js para los tests
- GitHub Actions
- GitHub Pages

## Arquitectura y decisiones

### Navegación

La aplicación usa la **History API del navegador** mediante una pequeña abstracción propia. Para este proyecto, con rutas estáticas y sin autenticación, parámetros dinámicos ni loaders, evita incorporar una dependencia de routing que no aporta valor suficiente.

Las rutas pueden abrirse y compartirse directamente. `public/404.html` permite recuperar deep links al utilizar GitHub Pages.

### Catálogo de automatización

El catálogo dejó de representarse como arreglos posicionales y usa objetos TypeScript con campos explícitos. Esto elimina accesos del tipo `component[0]` y hace el modelo más fácil de mantener.

### Cálculos eléctricos

Las funciones puras viven en:

```text
src/electricalCalculations.ts
```

La UI consume esas funciones en lugar de duplicar fórmulas dentro de los componentes. Los cálculos incluyen validaciones de dominio y hacen visibles sus simplificaciones.

### Carga diferida

Las hojas y calculadoras temáticas se cargan mediante `React.lazy()` y `Suspense`. Esto evita enviar toda la aplicación técnica en el bundle inicial y permite que Vite genere chunks por funcionalidad.

La hoja de símbolos electrónicos permanece cargada de forma directa porque conserva una capa de compatibilidad con contenido heredado que actualmente se mejora de forma síncrona al cambiar de ruta.

## Calidad

La puerta de calidad local se ejecuta con:

```bash
npm run check
```

Ese comando ejecuta:

```text
ESLint
  ↓
TypeScript
  ↓
tests
  ↓
build de producción
```

También pueden ejecutarse individualmente:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

Los tests actuales cubren las funciones puras de cálculo, entre ellas:

- potencia trifásica equilibrada;
- validación del factor de potencia;
- resistencia del cobre y efecto de temperatura;
- caída de tensión;
- selección orientativa entre secciones candidatas;
- parámetros simplificados de motor de inducción;
- rechazo de mediciones físicamente incompatibles.

## Desarrollo local

Requisitos recomendados:

- Node.js 22
- npm

```bash
git clone https://github.com/SurvilaDeveloper/PLC_Dispositivos.git
cd PLC_Dispositivos
npm ci
npm run dev
```

Build de producción:

```bash
npm run build
```

Preview local:

```bash
npm run preview
```

## GitHub Pages y CI

Vite está configurado para este repositorio con:

```ts
base: '/PLC_Dispositivos/'
```

El repositorio incluye:

```text
.github/workflows/quality-and-pages.yml
```

El workflow:

1. instala dependencias con `npm ci`;
2. ejecuta `npm run check`;
3. en pull requests se detiene después de validar;
4. en `main` empaqueta `dist`;
5. despliega el artefacto mediante GitHub Pages.

Para utilizar el despliegue mediante Actions, en GitHub debe seleccionarse:

```text
Settings
→ Pages
→ Build and deployment
→ Source
→ GitHub Actions
```

El script histórico `npm run deploy` puede conservarse como alternativa manual mientras se verifica la migración.

## Estructura principal

```text
src/
├── componentes/              # hojas, calculadoras y herramientas técnicas
├── pages/                    # páginas temáticas
├── App.tsx                   # composición, navegación y carga diferida
├── navigation.ts             # rutas y History API
├── electricalCalculations.ts # lógica de cálculo pura
├── catalogo.ts               # catálogo tipado de automatización
└── ...

tests/
└── electricalCalculations.test.mjs

public/
├── 404.html
└── ...                       # imágenes y símbolos técnicos
```

## Alcance técnico

El contenido tiene fines **educativos y de consulta**.

Las calculadoras muestran sus supuestos y no sustituyen un proyecto eléctrico completo. Cuando se mencionan reglamentaciones o normas, debe verificarse siempre la edición vigente, la jurisdicción y la autoridad competente.

Para instalaciones reales deben utilizarse los documentos oficiales aplicables y la intervención de profesionales habilitados cuando corresponda.

## Autor

**Gabriel E. Survila**  
Desarrollador Full Stack

- GitHub: https://github.com/SurvilaDeveloper
- Email: surviladeveloper@gmail.com
