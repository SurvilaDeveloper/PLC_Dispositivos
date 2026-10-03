# Electricidad, Electrónica y Automatización

Toolkit técnico interactivo desarrollado con **React + TypeScript + Vite** para reunir material de consulta, fórmulas, calculadoras y recursos sobre electricidad, electrónica, PLC, automatización industrial y sistemas embebidos.

> El repositorio conserva por ahora el nombre `PLC_Dispositivos`, aunque el alcance actual del proyecto es bastante más amplio que PLC.

## Demo

GitHub Pages:

https://surviladeveloper.github.io/PLC_Dispositivos/

## Qué incluye

- **PLC y automatización industrial:** catálogo de componentes, comandos Ladder y conceptos de control.
- **Instalaciones eléctricas:** material de consulta para entornos domiciliarios e industriales.
- **Motores trifásicos:** potencia, factor de potencia, par, velocidad y ensayos.
- **Electrónica:** componentes, símbolos, circuitos RLC, capacitores, inductores y transistores.
- **Sistemas embebidos:** microcontroladores, placas de desarrollo, Arduino y criterios de elección de plataforma.
- **Calculadoras y tablas:** herramientas interactivas para distintos cálculos eléctricos y electrónicos.

## Stack

- React 19
- TypeScript
- Vite
- CSS
- MathJax
- GitHub Pages

## Ejecutar localmente

Requisitos:

- Node.js
- npm

```bash
git clone https://github.com/SurvilaDeveloper/PLC_Dispositivos.git
cd PLC_Dispositivos
npm install
npm run dev
```

Para generar el build de producción:

```bash
npm run build
```

Para previsualizarlo localmente:

```bash
npm run preview
```

## Publicación

El proyecto utiliza Vite con la base:

```ts
base: '/PLC_Dispositivos/'
```

El deploy actual se realiza sobre GitHub Pages mediante:

```bash
npm run deploy
```

## Organización actual

```text
src/
├── componentes/   # calculadoras, cheat sheets y herramientas técnicas
├── pages/         # páginas temáticas
├── App.tsx        # navegación y composición principal
├── catalogo.ts    # catálogo de componentes de automatización
└── style.css      # estilos globales

public/            # imágenes y símbolos técnicos
```

## Evolución del proyecto

El proyecto está siendo refactorizado de forma incremental para mejorar su calidad como aplicación y como pieza de portfolio. Entre las mejoras previstas se encuentran:

- navegación mediante rutas reales y URLs compartibles;
- catálogo tipado con modelos TypeScript explícitos;
- mejoras de accesibilidad y semántica HTML;
- separación más clara entre datos, contenido y presentación;
- validaciones, lint, tests y CI;
- revisión específica del contenido técnico y normativo.

La intención es conservar el conocimiento y las herramientas ya construidas, evitando una reescritura innecesaria.

## Alcance del contenido técnico

El material tiene fines **educativos y de consulta**. Las referencias a instalaciones, protecciones, conductores y normativa no sustituyen reglamentaciones vigentes, documentación oficial ni la intervención de profesionales habilitados.

## Autor

**Gabriel E. Survila**  
Desarrollador Full Stack

- GitHub: https://github.com/SurvilaDeveloper
- Email: surviladeveloper@gmail.com
