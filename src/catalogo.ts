export const componentesAutomatizacion: string[][] = [
  // ---- Sensores: presencia / posición ----
  [
    'Sensor',
    'Presencia / Posición',
    'Proximidad',
    'Inductivo',
    'Salida digital 24 V, NPN/PNP',
    'Detecta metal a corta distancia, muy usado en finales de posición',
    'Detección de presencia o posición de piezas metálicas en una cinta transportadora',
    'Plano de control / plano de campo (sensores discretos)'
  ],
  [
    'Sensor',
    'Presencia / Posición',
    'Proximidad',
    'Capacitivo',
    'Salida digital 24 V, NPN/PNP',
    'Detecta plásticos, líquidos, grano, etc.',
    'Detección de nivel de material a granel o presencia de envases plásticos',
    'Plano de control / plano de campo (sensores discretos)'
  ],
  [
    'Sensor',
    'Presencia / Posición',
    'Proximidad',
    'Ultrasónico',
    'Salida analógica 4–20 mA / 0–10 V o digital',
    'Mide distancia sin contacto, útil para nivel o posicionamiento',
    'Medición de distancia a una superficie líquida para control de nivel',
    'P&ID / plano de instrumentación de proceso'
  ],
  [
    'Sensor',
    'Presencia / Posición',
    'Proximidad',
    'Fotoeléctrico barrera',
    'Salida digital 24 V',
    'Emisor y receptor separados, detección fiable en distancias medias',
    'Conteo de piezas que atraviesan una cinta transportadora',
    'Plano de control / plano de campo (sensores discretos)'
  ],
  [
    'Sensor',
    'Presencia / Posición',
    'Proximidad',
    'Fotoeléctrico retro-reflectivo',
    'Salida digital 24 V',
    'Usa reflector, menos cableado que la barrera',
    'Detección de productos en una línea de envasado usando reflector',
    'Plano de control / plano de campo (sensores discretos)'
  ],
  [
    'Sensor',
    'Presencia / Posición',
    'Proximidad',
    'Fotoeléctrico difuso',
    'Salida digital 24 V',
    'Emisor y receptor en el mismo cuerpo, reflexión en el objeto',
    'Detección de presencia de cajas u objetos sobre una mesa de rodillos',
    'Plano de control / plano de campo (sensores discretos)'
  ],
  [
    'Sensor',
    'Presencia / Posición',
    'Final de carrera mecánico',
    'Micro-switch con rodillo o palanca',
    'Contacto NA/NC',
    'Limitación física de recorrido, robusto',
    'Detección de tope de recorrido de un carro o eje mecánico',
    'Plano de control / plano de campo (sensores discretos)'
  ],
  [
    'Sensor',
    'Presencia / Posición',
    'Magnético',
    'Reed o efecto Hall',
    'Salida digital 24 V',
    'Detección de imán en cilindros neumáticos, puertas, etc.',
    'Detección de posición de émbolo en cilindro neumático con imán',
    'Plano de control / plano de campo (sensores discretos)'
  ],
  [
    'Sensor',
    'Presencia / Posición',
    'Encoder',
    'Encoder incremental rotativo',
    'Pulsos A/B/Z (5 V o 24 V)',
    'Mide velocidad y posición relativa de ejes',
    'Medición de velocidad y posición de un motor de eje en máquina',
    'Plano de control / plano de campo (sensores discretos)'
  ],
  [
    'Sensor',
    'Presencia / Posición',
    'Encoder',
    'Encoder absoluto',
    'Bus industrial o código binario/Gray',
    'Informa posición absoluta del eje',
    'Posicionamiento absoluto de un eje en máquina de embalaje o robot',
    'Plano de control / plano de campo (sensores discretos)'
  ],

  // ---- Sensores: movimiento / velocidad ----
  [
    'Sensor',
    'Movimiento / Velocidad',
    'Velocidad',
    'Sensor inductivo con rueda dentada',
    'Pulsos digitales 24 V',
    'Mide velocidad de giro de ejes o ruedas',
    'Medición de RPM de un eje usando rueda dentada',
    'Plano de control / plano de mantenimiento predictivo'
  ],
  [
    'Sensor',
    'Movimiento / Velocidad',
    'Vibración',
    'Sensor de vibración industrial',
    '4–20 mA o bus',
    'Monitorización de estado de rodamientos y motores',
    'Monitorización de vibraciones de motores para mantenimiento predictivo',
    'Plano de control / plano de mantenimiento predictivo'
  ],
  [
    'Sensor',
    'Movimiento / Velocidad',
    'Inclinación',
    'Sensor de inclinación',
    '4–20 mA / 0–10 V / bus',
    'Control de ángulo en grúas, plataformas, etc.',
    'Control de inclinación de plataforma de elevación',
    'Plano de control / plano de instrumentación de proceso'
  ],

  // ---- Sensores: temperatura ----
  [
    'Sensor',
    'Temperatura',
    'Termopar',
    'Termopar tipo K/J/etc.',
    'mV, requiere acondicionamiento',
    'Rangos amplios de temperatura, uso en hornos y procesos',
    'Medición de temperatura en horno industrial de tratamiento térmico',
    'P&ID / plano de instrumentación de proceso'
  ],
  [
    'Sensor',
    'Temperatura',
    'RTD',
    'PT100 / PT1000',
    'Resistencia variable, entrada específica',
    'Buena precisión y estabilidad',
    'Control de temperatura de tanque con PT100 y lazo PID',
    'P&ID / plano de instrumentación de proceso'
  ],
  [
    'Sensor',
    'Temperatura',
    'Termistor',
    'NTC/PTC',
    'Resistencia variable',
    'Uso en aplicaciones de rango más limitado',
    'Protección térmica en equipos electrónicos o pequeños procesos',
    'P&ID / plano de instrumentación de proceso'
  ],

  // ---- Sensores: presión / caudal ----
  [
    'Sensor',
    'Presión / Caudal',
    'Presión',
    'Transductor de presión',
    '4–20 mA / 0–10 V',
    'Mide presión en sistemas hidráulicos y neumáticos',
    'Medición de presión en línea de aire comprimido o circuito hidráulico',
    'P&ID / plano de instrumentación de proceso'
  ],
  [
    'Sensor',
    'Presión / Caudal',
    'Presión',
    'Presostato',
    'Contacto NA/NC',
    'Actúa como interruptor ante un umbral de presión',
    'Activación de alarma o paro de bomba al superar presión límite',
    'P&ID / plano de instrumentación de proceso'
  ],
  [
    'Sensor',
    'Presión / Caudal',
    'Caudal',
    'Caudalímetro tipo turbina',
    'Pulso o 4–20 mA',
    'Mide caudal de líquidos',
    'Medición de caudal de agua en circuito de refrigeración',
    'P&ID / plano de instrumentación de proceso'
  ],
  [
    'Sensor',
    'Presión / Caudal',
    'Caudal',
    'Caudalímetro electromagnético',
    '4–20 mA + comunicación digital',
    'Preciso para líquidos conductivos',
    'Medición de caudal de producto en tubería de proceso',
    'P&ID / plano de instrumentación de proceso'
  ],

  // ---- Sensores: nivel ----
  [
    'Sensor',
    'Nivel',
    'Mecánico',
    'Flotador de nivel',
    'Contacto NA/NC',
    'Control sencillo de nivel mínimo/máximo',
    'Protección de bomba por nivel mínimo mediante flotador',
    'P&ID / plano de instrumentación de proceso'
  ],
  [
    'Sensor',
    'Nivel',
    'Capacitivo',
    'Sensor capacitivo de nivel',
    'Digital 24 V o 4–20 mA',
    'Mide nivel en sólidos y líquidos',
    'Detección de nivel de granos o polvos en silo',
    'P&ID / plano de instrumentación de proceso'
  ],
  [
    'Sensor',
    'Nivel',
    'Ultrasónico',
    'Sensor de nivel ultrasónico',
    '4–20 mA / 0–10 V',
    'Mide distancia a la superficie del líquido',
    'Medición de nivel sin contacto en tanque abierto',
    'P&ID / plano de instrumentación de proceso'
  ],
  [
    'Sensor',
    'Nivel',
    'Radar',
    'Sensor de nivel radar',
    '4–20 mA + comunicación',
    'Alta precisión, poco afectado por vapor o polvo',
    'Control de nivel en tanque de reactores o silos de polvo',
    'P&ID / plano de instrumentación de proceso'
  ],

  // ---- Sensores: fuerza / peso ----
  [
    'Sensor',
    'Fuerza / Peso',
    'Celda de carga',
    'Celda de carga',
    'mV/V con acondicionamiento a 4–20 mA',
    'Uso en básculas y dosificación',
    'Pesaje de tolva de dosificación en planta de mezclas',
    'P&ID / plano de instrumentación / diagrama de pesaje'
  ],
  [
    'Sensor',
    'Fuerza / Peso',
    'Deformación',
    'Strain gauge',
    'mV/V',
    'Medición de esfuerzos en estructuras',
    'Monitorización de esfuerzos en estructura metálica o prensa',
    'P&ID / plano de instrumentación / diagrama de pesaje'
  ],

  // ---- Sensores: ópticos avanzados ----
  [
    'Sensor',
    'Ópticos avanzados',
    'Color / Contraste',
    'Sensor de color / contraste',
    'Salida digital / analógica / bus',
    'Detección de marcas en packaging, impresión',
    'Detección de marcas de registro en máquinas de impresión',
    'Plano de control / plano de visión artificial'
  ],
  [
    'Sensor',
    'Ópticos avanzados',
    'Identificación',
    'Lector de código de barras o QR',
    'RS-232 / Ethernet / bus',
    'Identificación de piezas y productos',
    'Identificación de cajas o pallets por código de barras',
    'Plano de control / plano de campo'
  ],
  [
    'Sensor',
    'Ópticos avanzados',
    'Visión',
    'Cámara industrial / sensor de visión',
    'Ethernet / bus',
    'Inspección, medición, conteo, guiado',
    'Inspección de calidad de envases o soldaduras con visión',
    'Plano de control / plano de visión artificial'
  ],

  // ---- Sensores: identificación / distancia ----
  [
    'Sensor',
    'Identificación / Distancia',
    'RFID',
    'Lector RFID',
    'Bus industrial / serie',
    'Seguimiento de pallets, piezas, herramientas',
    'Identificación de pallets en línea de logística mediante tags RFID',
    'Plano de control / plano de campo'
  ],
  [
    'Sensor',
    'Identificación / Distancia',
    'Distancia',
    'Sensor láser de distancia',
    '4–20 mA / bus',
    'Posicionamiento preciso, medición de perfil',
    'Posicionamiento de carro o medición de perfil de producto',
    'Plano de control / plano de campo'
  ],

  // ---- Sensores: ambientales ----
  [
    'Sensor',
    'Ambientales',
    'Clima',
    'Sensor de temperatura y humedad',
    '4–20 mA / 0–10 V / bus',
    'Ambientes controlados, almacenes',
    'Control de temperatura y humedad en sala de producción',
    'Plano de instrumentación / plano de servicios auxiliares'
  ],
  [
    'Sensor',
    'Ambientales',
    'Gases',
    'Sensor de gas (CO2, CH4, etc.)',
    '4–20 mA / bus',
    'Seguridad y control de atmósfera',
    'Detección de fugas de gas en sala de calderas o depósitos',
    'Plano de instrumentación / plano de servicios auxiliares'
  ],
  [
    'Sensor',
    'Ambientales',
    'Luz',
    'Luxómetro / sensor de luz',
    '0–10 V / bus',
    'Control de iluminación',
    'Control automático de iluminación según nivel de luz ambiente',
    'Plano de instrumentación / plano de servicios auxiliares'
  ],

  // ---- Actuadores: motores eléctricos ----
  [
    'Actuador',
    'Motores eléctricos',
    'AC trifásico',
    'Motor AC trifásico + VFD',
    'Controlado por entradas digitales/analógicas o bus',
    'Movimiento continuo de cintas, bombas, ventiladores',
    'Accionamiento de cinta transportadora mediante motor trifásico con variador',
    'Esquema de potencia de motores / P&ID si acciona bomba'
  ],
  [
    'Actuador',
    'Motores eléctricos',
    'DC',
    'Motor DC + driver H-bridge',
    'PWM + dirección desde PLC o micro',
    'Aplicaciones de baja tensión y control sencillo',
    'Accionamiento de eje pequeño o cinta liviana con control por PWM',
    'Esquema de potencia de motores / plano de control de máquina'
  ],
  [
    'Actuador',
    'Motores eléctricos',
    'Paso a paso',
    'Motor paso a paso + driver',
    'Entradas STEP/DIR',
    'Posicionamiento preciso a bajo costo',
    'Posicionamiento de indexador o eje de dosificación con motor paso a paso',
    'Esquema de potencia de motores / plano de control de motion'
  ],
  [
    'Actuador',
    'Motores eléctricos',
    'Servo',
    'Servomotor AC/BLDC',
    'Entradas de control + feedback de encoder',
    'Motion control de alta precisión',
    'Control de ejes de robot, pick and place o máquina CNC',
    'Esquema de potencia de motores / plano de control de motion'
  ],

  // ---- Actuadores: lineales eléctricos ----
  [
    'Actuador',
    'Actuadores lineales eléctricos',
    'Cilindro eléctrico',
    'Actuador lineal eléctrico',
    'Señales de control digitales/analógicas o bus',
    'Reemplazo de cilindros neumáticos con control preciso de posición',
    'Posicionamiento lineal de tope o empujador con actuador eléctrico',
    'P&ID / plano de control de máquina'
  ],

  // ---- Actuadores: neumáticos ----
  [
    'Actuador',
    'Neumáticos',
    'Cilindros',
    'Cilindro neumático simple o doble efecto',
    'Controlado por válvula neumática',
    'Movimiento lineal rápido en automatización general',
    'Movimiento de prensas pequeñas, empujadores o pinzas',
    'P&ID neumático / esquema de mando neumático'
  ],
  [
    'Actuador',
    'Neumáticos',
    'Válvulas',
    'Válvula neumática 5/2 o 5/3',
    'Solenoide 24 VDC',
    'Control de cilindros y actuadores neumáticos',
    'Conmutación de aire para cilindros en maniobras de máquina',
    'P&ID neumático / esquema de mando neumático'
  ],
  [
    'Actuador',
    'Neumáticos',
    'Pinzas',
    'Pinza neumática',
    'Controlada por válvula',
    'Agarre de piezas en robots o manipuladores',
    'Pinza de robot para tomar y soltar piezas en línea de montaje',
    'P&ID neumático / plano de control de máquina'
  ],

  // ---- Actuadores: hidráulicos ----
  [
    'Actuador',
    'Hidráulicos',
    'Cilindros',
    'Cilindro hidráulico',
    'Controlado por válvula hidráulica',
    'Fuerzas muy elevadas (prensas, maquinaria pesada)',
    'Accionamiento de prensa o pistón de gran fuerza',
    'P&ID hidráulico / esquema de potencia hidráulica'
  ],
  [
    'Actuador',
    'Hidráulicos',
    'Motores',
    'Motor hidráulico',
    'Control de flujo y presión del aceite',
    'Movimiento rotativo de alto par',
    'Movimiento de tambor, rueda o winche con motor hidráulico',
    'P&ID hidráulico / esquema de potencia hidráulica'
  ],
  [
    'Actuador',
    'Hidráulicos',
    'Válvulas',
    'Válvula hidráulica direccional o proporcional',
    'Solenoides controlados desde PLC',
    'Control de dirección y caudal en sistemas hidráulicos',
    'Control de velocidad y sentido de cilindros y motores hidráulicos',
    'P&ID hidráulico / esquema de potencia hidráulica'
  ],

  // ---- Actuadores: conmutación de potencia ----
  [
    'Actuador',
    'Conmutación de potencia',
    'Relés',
    'Relé electromecánico',
    'Bobina 24 V, contactos NA/NC',
    'Conmutación de cargas pequeñas o medias',
    'Activación de pequeñas cargas o señales a partir del PLC',
    'Esquema unifilar / esquema de potencia'
  ],
  [
    'Actuador',
    'Conmutación de potencia',
    'Relés',
    'Relé de estado sólido (SSR)',
    'Entrada 3–32 V, salida AC/DC',
    'Conmutación sin partes móviles, ideal para maniobras rápidas',
    'Control de resistencias de calefacción con alta frecuencia de conmutación',
    'Esquema unifilar / esquema de potencia'
  ],
  [
    'Actuador',
    'Conmutación de potencia',
    'Contactores',
    'Contactor trifásico',
    'Bobina 24 V o 220 V',
    'Conmutación de motores y grandes cargas',
    'Arranque y paro de motores trifásicos en tableros de potencia',
    'Esquema unifilar / esquema de potencia de motores'
  ],
  [
    'Actuador',
    'Conmutación de potencia',
    'Soft-starter',
    'Arrancador suave',
    'Señales digitales/analógicas desde PLC',
    'Arranque controlado de motores AC',
    'Reducir picos de corriente y golpes mecánicos al arrancar motores',
    'Esquema de potencia de motores / plano de control'
  ],

  // ---- Actuadores: válvulas de proceso ----
  [
    'Actuador',
    'Válvulas de proceso',
    'Válvulas on/off',
    'Válvula de bola o mariposa motorizada',
    '24 VDC/AC, señal de apertura/cierre',
    'Control de flujo sencillo en tuberías',
    'Apertura y cierre de línea de agua o producto',
    'P&ID de proceso'
  ],
  [
    'Actuador',
    'Válvulas de proceso',
    'Válvulas proporcionales',
    'Válvula de control con actuador eléctrico o neumático',
    'Señal 4–20 mA / 0–10 V',
    'Control continuo de caudal, presión, temperatura',
    'Control de caudal de vapor o líquido en lazo PID',
    'P&ID de proceso'
  ],
  [
    'Actuador',
    'Válvulas de proceso',
    'Solenoides',
    'Válvula solenoide',
    'Bobina 24 VDC/AC',
    'Control de aire, agua, aceite, etc.',
    'Piloteo de válvulas neumáticas o control directo de fluidos',
    'P&ID de proceso / esquema de mando neumático'
  ],

  // ---- Actuadores: otros ----
  [
    'Actuador',
    'Otros',
    'Electroimanes',
    'Electroimán de traba o freno',
    'Bobina 24 VDC',
    'Sujeción, bloqueo y frenado de mecanismos',
    'Bloqueo de puertas o freno de ejes mediante electroimán',
    'Plano de control / esquema de potencia'
  ],
  [
    'Actuador',
    'Otros',
    'Frenos/embragues',
    'Freno o embrague electromagnético',
    'Bobina controlada por PLC',
    'Acople y desacople de movimiento',
    'Control de acople de eje en máquinas con varias etapas',
    'Plano de control / esquema de potencia'
  ],
  [
    'Actuador',
    'Otros',
    'Señalización',
    'Baliza luminosa o sirena',
    'Entrada 24 VDC',
    'Indicadores de estado de máquina y alarmas',
    'Indicación luminosa y sonora de estados RUN/STOP/FALLO',
    'Frente de máquina / plano de control'
  ],
  [
    'Actuador',
    'Otros',
    'Interfaz HMI simple',
    'Pulsadores luminosos / HMI básica',
    'Entradas/salidas digitales y buses',
    'Interacción operario–máquina simple',
    'Control local mediante pulsadores iluminados y pequeñas interfaces',
    'Frente de tablero / diagrama de mando'
  ],

  // ---- Displays / HMI: simples ----
  [
    'Display/HMI',
    'Displays simples',
    '7 segmentos / numéricos',
    'Display numérico 7 segmentos',
    'Entrada desde PLC o indicador (24 V, 4–20 mA, 0–10 V)',
    'Muestra valores numéricos: velocidad, conteo, temperatura, setpoint',
    'Visualización local de una variable de proceso en frontal de tablero',
    'Frente de tablero / diagrama de mando'
  ],
  [
    'Display/HMI',
    'Displays simples',
    'Bargraph / barra de LEDs',
    'Indicador bargraph de nivel/carga',
    'Entrada analógica 4–20 mA / 0–10 V',
    'Representa un valor como barra: nivel, porcentaje, carga',
    'Indicador de nivel o carga mediante barra de LEDs',
    'Frente de tablero / diagrama de mando'
  ],

  // ---- Displays / HMI: indicadores de panel ----
  [
    'Display/HMI',
    'Indicadores de panel',
    'Indicador de proceso',
    'Indicador de proceso de panel',
    'Entradas 4–20 mA, 0–10 V, PT100, termopar',
    'Muestra una variable de proceso y puede tener salidas de relé de alarma',
    'Indicador digital de nivel, presión o caudal en puerta de armario',
    'Frente de tablero / P&ID como instrumento indicador'
  ],
  [
    'Display/HMI',
    'Indicadores de panel',
    'Contador / tacómetro',
    'Contador / tacómetro digital',
    'Entrada de pulsos y salidas de relé o SSR',
    'Cuenta piezas o mide RPM o frecuencia',
    'Conteo de piezas producidas o medición de RPM en máquina',
    'Frente de tablero / plano de control'
  ],

  // ---- Displays embebidos ----
  [
    'Display/HMI',
    'Displays LCD/TFT embebidos',
    'LCD caracteres',
    'LCD 16x2 / 20x4 caracteres',
    'Bus paralelo tipo HD44780 o I2C/SPI',
    'Muestra texto simple en sistemas con microcontrolador',
    'Mensajes de estado y parámetros en controladores dedicados',
    'Plano del equipo / diagrama eléctrico del equipo'
  ],
  [
    'Display/HMI',
    'Displays LCD/TFT embebidos',
    'LCD gráfico monocromo',
    'LCD gráfico 128x64',
    'SPI o bus paralelo',
    'Dibujo de gráficos simples, iconos y curvas',
    'Visualización de tendencia o estados en controladores específicos',
    'Plano del equipo / diagrama eléctrico del equipo'
  ],
  [
    'Display/HMI',
    'Displays LCD/TFT embebidos',
    'TFT color',
    'Display TFT color',
    'SPI / RGB / paralelo',
    'Interfaces gráficas ricas en equipos específicos',
    'Pantalla integrada en variadores o controladores complejos',
    'Plano del equipo / diagrama eléctrico del equipo'
  ],

  // ---- HMI industriales ----
  [
    'Display/HMI',
    'HMI industriales',
    'HMI texto',
    'HMI de texto con teclado',
    'RS-232 / RS-485 (Modbus u otros)',
    'Configuración básica y mensajes de estado desde PLCs compactos',
    'Interfaz con texto para ajustar parámetros y ver mensajes',
    'Frente de tablero / arquitectura PLC–HMI'
  ],
  [
    'Display/HMI',
    'HMI industriales',
    'HMI gráfica táctil',
    'HMI táctil',
    'Ethernet, Modbus TCP, Profinet, etc.',
    'Pantallas de operación: recetas, alarmas, tendencias, mandos',
    'Pantalla principal para operar máquina o línea de producción',
    'Frente de tablero / arquitectura de control'
  ],
  [
    'Display/HMI',
    'HMI industriales',
    'HMI con funciones avanzadas',
    'HMI con datalogger o scripts',
    'Ethernet + puertos adicionales',
    'Puede registrar datos y ejecutar lógica sencilla',
    'Registro de tendencias y pequeñas automatizaciones desde la HMI',
    'Frente de tablero / arquitectura de control'
  ],

  // ---- PC industrial ----
  [
    'Display/HMI',
    'PC industrial',
    'Panel PC',
    'Panel PC industrial táctil',
    'Ethernet, USB y buses según tarjetas',
    'Corre SCADA o aplicaciones propias',
    'Supervisión de planta o línea completa con SCADA',
    'Plano de sala de control / arquitectura de red'
  ],
  [
    'Display/HMI',
    'PC industrial',
    'Box PC + monitor',
    'PC industrial + monitor',
    'Ethernet y buses de campo',
    'PC en armario y monitor en puerta o consola',
    'Supervisión y control HMI–SCADA distribuido',
    'Plano de sala de control / arquitectura de red'
  ],

  // ---- Señalización de estado tipo display ----
  [
    'Display/HMI',
    'Señalización',
    'Torretas / balizas',
    'Baliza luminosa tipo andon',
    'Entradas digitales 24 V',
    'Indica estados de máquina por colores',
    'Andon de estado de máquina visible a distancia',
    'Frente de máquina / plano de control'
  ],
  [
    'Display/HMI',
    'Señalización',
    'Scoreboards / Andon',
    'Panel andon / scoreboard',
    'Entradas digitales o buses industriales/Ethernet',
    'Muestra producción, objetivos, tiempos de parada',
    'Visualización de producción y objetivos en línea de montaje',
    'Plano de control / layout de planta'
  ],
  [
    'Display/HMI',
    'Señalización',
    'Etiquetas electrónicas',
    'Etiqueta electrónica / e-paper industrial',
    'Comunicaciones inalámbricas específicas',
    'Identificación dinámica de ubicaciones o contenedores',
    'Etiquetado electrónico en estanterías de almacén',
    'Plano de logística / layout de almacén'
  ],

  // ---- Dispositivos de mando: pulsadores ----
  [
    'Dispositivo de mando',
    'Pulsadores',
    'Pulsador simple',
    'Pulsador NA (marcha)',
    'Contacto NA 24 V',
    'Orden de arranque o marcha de máquina o función',
    'Pulsador verde de marcha en puerta de armario',
    'Frente de tablero / diagrama de mando'
  ],
  [
    'Dispositivo de mando',
    'Pulsadores',
    'Pulsador simple',
    'Pulsador NC (paro)',
    'Contacto NC 24 V',
    'Orden de paro normal de máquina o función',
    'Pulsador rojo de paro en el frente del tablero',
    'Frente de tablero / diagrama de mando'
  ],
  [
    'Dispositivo de mando',
    'Pulsadores',
    'Pulsador doble',
    'Pulsador doble marcha/paro',
    'Dos contactos (NA + NC) 24 V',
    'Un solo cuerpo con dos funciones diferenciadas',
    'Mando combinado de marcha y paro en un solo dispositivo',
    'Frente de tablero / diagrama de mando'
  ],
  [
    'Dispositivo de mando',
    'Pulsadores',
    'Pulsador luminoso',
    'Pulsador luminoso NA/NC',
    'Contacto(s) 24 V + lámpara LED',
    'Combina mando con indicación luminosa de estado',
    'Pulsador iluminado que indica estado de función o máquina',
    'Frente de tablero / diagrama de mando'
  ],

  // ---- Dispositivos de mando: selectores ----
  [
    'Dispositivo de mando',
    'Selectores',
    'Selector mantenido',
    'Selector 2 posiciones mantenido',
    'Dos posiciones con contactos NA/NC',
    'Selección manual/automático o local/remoto',
    'Selector para elegir modo de operación MAN/AUTO',
    'Frente de tablero / diagrama de mando'
  ],
  [
    'Dispositivo de mando',
    'Selectores',
    'Selector mantenido',
    'Selector 3 posiciones mantenido',
    'Tres posiciones con contactos NA/NC',
    'Selección de varios modos de operación',
    'Selector para modos paro, manual y automático',
    'Frente de tablero / diagrama de mando'
  ],
  [
    'Dispositivo de mando',
    'Selectores',
    'Selector con retorno',
    'Selector con retorno por resorte',
    'Posición momentánea y posición(es) mantenida(s)',
    'Usado para órdenes de jog o impulsos momentáneos',
    'Selector para jog de motor o eje',
    'Frente de tablero / diagrama de mando'
  ],

  // ---- Dispositivos de mando: llaves / autorización ----
  [
    'Dispositivo de mando',
    'Llaves / Autorización',
    'Selector a llave',
    'Selector a llave 2 posiciones',
    'Contactos NA/NC 24 V',
    'Solo con llave se cambia de modo',
    'Selector a llave para habilitar modo mantenimiento',
    'Frente de tablero / diagrama de mando y seguridad'
  ],
  [
    'Dispositivo de mando',
    'Llaves / Autorización',
    'Selector a llave',
    'Selector a llave 3 posiciones',
    'Varios contactos NA/NC',
    'Permite modos restringidos y seguros',
    'Selector a llave para modos operativo, ajuste y mantenimiento',
    'Frente de tablero / diagrama de mando y seguridad'
  ],
  [
    'Dispositivo de mando',
    'Llaves / Autorización',
    'Interruptor de llave simple',
    'Interruptor con llave ON/OFF',
    'Contacto NA/NC 24 V',
    'Habilita o bloquea funciones críticas',
    'Bloqueo de habilitación de máquina mediante llave',
    'Frente de tablero / diagrama de mando y seguridad'
  ],

  // ---- Dispositivos de mando: emergencia / seguridad ----
  [
    'Dispositivo de mando',
    'Emergencia / Seguridad',
    'Paro de emergencia',
    'Pulsador de emergencia tipo seta enclavado',
    'Contactos NC de seguridad',
    'Paro de emergencia de máquina, requiere reset',
    'Sistemas de paro de emergencia en perímetro de máquina',
    'Plano de seguridad / diagrama de paro de emergencia'
  ],
  [
    'Dispositivo de mando',
    'Emergencia / Seguridad',
    'Paro de emergencia',
    'Pulsador de emergencia con llave',
    'Contactos NC + llave',
    'Solo personal autorizado puede resetear la emergencia',
    'Paro de emergencia con reset restringido para personal autorizado',
    'Plano de seguridad / diagrama de paro de emergencia'
  ],
  [
    'Dispositivo de mando',
    'Emergencia / Seguridad',
    'Cuerda de paro',
    'Interruptor de cable de emergencia (pull cord)',
    'Contactos NC en serie de seguridad',
    'Paro de emergencia en cintas transportadoras largas',
    'Paro de emergencia tipo cuerda a lo largo de cinta transportadora',
    'Plano de seguridad / P&ID mecánico de transporte'
  ],
  [
    'Dispositivo de mando',
    'Emergencia / Seguridad',
    'Interruptor de puerta',
    'Interruptor de puerta de seguridad',
    'Contactos especiales NC/NA, a menudo codificados',
    'Detecta apertura de puertas de resguardo',
    'Interbloqueo de puertas de resguardo en máquinas peligrosas',
    'Plano de seguridad / diagrama de enclavamientos'
  ],

  // ---- Dispositivos de mando: pedales / joystick ----
  [
    'Dispositivo de mando',
    'Pedales / Joysticks',
    'Pedal de mando',
    'Pedal simple NA',
    'Contacto NA 24 V',
    'Orden momentánea con el pie',
    'Accionamiento de prensas o herramientas con pedal',
    'Plano de mando local / esquema de control'
  ],
  [
    'Dispositivo de mando',
    'Pedales / Joysticks',
    'Pedal de mando',
    'Pedal biestable',
    'Contactos mantenidos',
    'Mantiene estado mientras el pedal está pisado o enclavado',
    'Control sostenido de función mientras el operador pisa el pedal',
    'Plano de mando local / esquema de control'
  ],
  [
    'Dispositivo de mando',
    'Pedales / Joysticks',
    'Joystick de mando',
    'Joystick de 2 ejes con contactos',
    'Varios contactos NA/NC',
    'Control de grúas, puentes o manipuladores',
    'Mando de puente grúa o manipulador en varias direcciones',
    'Plano de mando local / esquema de control'
  ],

  // ---- Dispositivos de mando: estaciones y botoneras ----
  [
    'Dispositivo de mando',
    'Estaciones de mando',
    'Estación de mando fija',
    'Caja de mando con varios pulsadores y selectores',
    'Conjunto de contactos 24 V',
    'Agrupa varios dispositivos de mando en un mismo punto',
    'Puesto de mando local con varios botones y selectores',
    'Plano de mando / layout de la máquina'
  ],
  [
    'Dispositivo de mando',
    'Estaciones de mando',
    'Botonera colgante',
    'Botonera colgante para puente grúa',
    'Contactos NA/NC por botón',
    'Permite mando desde posición móvil',
    'Botonera para subir/bajar y desplazar puente grúa',
    'Plano de mando / layout de la máquina'
  ],
  [
    'Dispositivo de mando',
    'Estaciones de mando',
    'Panel de operador simple',
    'Panel con pulsadores, selectores y pilotos',
    'Contactos 24 V + señalización',
    'Interfaz local básica sin HMI táctil',
    'Panel frontal de máquina con mandos y pilotos',
    'Frente de tablero / diagrama de mando'
  ],

  // ---- Dispositivos de mando: otros ----
  [
    'Dispositivo de mando',
    'Otros dispositivos de mando',
    'Potenciómetro',
    'Potenciómetro de mando (setpoint)',
    'Entrada analógica (0–10 V / resistencia)',
    'Ajuste de consignas como velocidad o temperatura',
    'Ajuste manual de velocidad de cinta o setpoint de proceso',
    'Frente de tablero / diagrama de mando'
  ],
  [
    'Dispositivo de mando',
    'Otros dispositivos de mando',
    'Encoder manual',
    'Encoder manual / rueda de pulso',
    'Pulsos digitales',
    'Ajuste fino o jog de ejes y valores',
    'Ajuste incremental de posición o parámetros con rueda de pulsos',
    'Frente de tablero / diagrama de mando'
  ],
  [
    'Dispositivo de mando',
    'Otros dispositivos de mando',
    'Teclado numérico',
    'Teclado numérico industrial',
    'Matriz de contactos o bus',
    'Entrada de valores numéricos como recetas o contraseñas',
    'Carga de recetas o parámetros numéricos desde panel',
    'Frente de tablero / diagrama de mando'
  ],

  // ---- Equipos de control ----
  [
    'Equipo de control',
    'PLC y controladores',
    'PLC compacto',
    'PLC compacto / micro-PLC',
    'Entradas/salidas digitales/analógicas, buses industriales',
    'Control de máquinas pequeñas y medianas',
    'Automatización de máquina simple con PLC compacto',
    'Plano de control / esquema de PLC / arquitectura de control'
  ],
  [
    'Equipo de control',
    'PLC y controladores',
    'PLC modular',
    'PLC modular',
    'Módulos de CPU + E/S + comunicación',
    'Control de líneas de producción y plantas',
    'Automatización de línea completa con PLC modular',
    'Plano de control / esquema de PLC / arquitectura de control'
  ],
  [
    'Equipo de control',
    'PLC y controladores',
    'Módulo de E/S remotas',
    'Módulo de E/S remotas en campo',
    'Red industrial (Profinet, EtherCAT, Modbus, etc.)',
    'Acerca las entradas y salidas al proceso reduciendo cableado',
    'Distribución de E/S cerca de máquinas conectadas por red',
    'Plano de control / arquitectura de control distribuido'
  ],
  [
    'Equipo de control',
    'PLC y controladores',
    'Relé de seguridad',
    'Relé o módulo de seguridad',
    'Entradas seguras + salidas de seguridad',
    'Gestión segura de setas, cortinas y puertas',
    'Implementación de funciones de parada de emergencia y enclavamientos',
    'Plano de seguridad / esquema de control de seguridad'
  ],
  [
    'Equipo de control',
    'PLC y controladores',
    'Controlador de lazo',
    'Controlador PID de panel',
    'Entradas de proceso + salidas analógicas/relés',
    'Control dedicado de temperatura, nivel, presión o caudal',
    'Control autónomo de temperatura de horno o tanque',
    'P&ID / plano de instrumentación de proceso'
  ],

  // ---- Protección / Potencia ----
  [
    'Protección / Potencia',
    'Protección general',
    'Disyuntor / termomagnético',
    'Interruptor termomagnético',
    'Protección de línea',
    'Protege contra sobrecargas y cortocircuitos',
    'Protección de alimentación de tablero o circuitos individuales',
    'Esquema unifilar / esquema de potencia'
  ],
  [
    'Protección / Potencia',
    'Protección general',
    'Fusibles',
    'Fusible / porta-fusible',
    'Corte por sobrecorriente',
    'Protección simple y económica de circuitos',
    'Protección local de cargas concretas con fusibles',
    'Esquema unifilar / esquema de potencia'
  ],
  [
    'Protección / Potencia',
    'Protección motor',
    'Guardamotor',
    'Guardamotor / interruptor motor',
    'Protección térmica y magnética de motor',
    'Protege motores trifásicos frente a sobrecargas y fallos',
    'Protección de motor aguas arriba del contactor',
    'Esquema de potencia de motores'
  ],
  [
    'Protección / Potencia',
    'Protección motor',
    'Relé térmico',
    'Relé térmico para motor',
    'Contactos auxiliares de fallo',
    'Se combina con contactores para proteger el motor',
    'Señalización de fallo térmico de motor al PLC',
    'Esquema de potencia de motores / plano de control'
  ],
  [
    'Protección / Potencia',
    'Protección de sobretensión',
    'Supresores de sobretensión',
    'Descargador / varistor / módulo de sobretensión',
    'Conexión en red de potencia o señales',
    'Protege contra picos de tensión transitorios',
    'Protección frente a sobretensiones en líneas de alimentación o señales',
    'Esquema unifilar / plano de protección'
  ],

  // ---- Drives / Motion ----
  [
    'Drive / Motion',
    'Variadores de velocidad',
    'VFD / inverter',
    'Variador de frecuencia para motor AC',
    'Entradas digitales/analógicas + bus',
    'Control de velocidad y torque de motores AC',
    'Control de velocidad de bombas, ventiladores o cintas',
    'Esquema de potencia de motores / plano de control'
  ],
  [
    'Drive / Motion',
    'Servodrives',
    'Servo drive',
    'Amplificador de servomotor',
    'Bus de campo + feedback encoder',
    'Control preciso de posición, velocidad y torque',
    'Control de ejes en robots, empaquetadoras o CNC',
    'Esquema de potencia de motores / plano de control de motion'
  ],
  [
    'Drive / Motion',
    'Motores paso a paso',
    'Driver de motor paso a paso',
    'Driver stepper',
    'Entradas STEP/DIR',
    'Control de motores paso a paso en posicionamiento sencillo',
    'Accionamiento de ejes discretos con motor paso a paso',
    'Esquema de potencia de motores / plano de control de motion'
  ],
  [
    'Drive / Motion',
    'Arranque de motores',
    'Soft-starter',
    'Arrancador suave de motor',
    'Entradas de mando desde PLC',
    'Reduce corrientes de arranque y esfuerzos mecánicos',
    'Arranque suave de compresores, bombas o cintas',
    'Esquema de potencia de motores / plano de control'
  ],

  // ---- Red / Comunicación ----
  [
    'Red / Comunicación',
    'Conmutación Ethernet',
    'Switch industrial',
    'Switch Ethernet industrial',
    'Puertos Ethernet RJ45 o M12',
    'Interconexión de PLCs, HMIs y otros equipos en red',
    'Red de comunicación entre PLCs, HMIs y SCADA',
    'Plano de red industrial / arquitectura de comunicaciones'
  ],
  [
    'Red / Comunicación',
    'Gateways',
    'Gateway de protocolo',
    'Gateway Modbus, Profinet, CAN, etc.',
    'Diferentes buses de campo',
    'Traduce entre distintos protocolos industriales',
    'Conexión de equipos con buses diferentes en una misma planta',
    'Plano de red industrial / arquitectura de comunicaciones'
  ],
  [
    'Red / Comunicación',
    'Seguridad de red',
    'Router / Firewall industrial',
    'Router o firewall industrial',
    'Ethernet / WAN',
    'Segmentación, VPN y seguridad de red de automatización',
    'Conexión segura de red de planta con red corporativa',
    'Plano de red industrial / arquitectura de comunicaciones'
  ],
  [
    'Red / Comunicación',
    'Red inalámbrica',
    'Access point industrial',
    'Punto de acceso WiFi industrial',
    'Ethernet + WiFi',
    'Conecta equipos móviles o remotos de forma inalámbrica',
    'Comunicación con tablets, máquinas móviles o zonas remotas',
    'Plano de red industrial / arquitectura de comunicaciones'
  ],

  // ---- Alimentación / Energía ----
  [
    'Alimentación / Energía',
    'Fuentes',
    'Fuente 24 VDC riel DIN',
    'Fuente conmutada 24 VDC',
    'Entrada 230 VAC → salida 24 VDC',
    'Alimenta PLC, sensores y actuadores de baja potencia',
    'Alimentación principal de circuito de control a 24 V',
    'Esquema unifilar / plano de alimentación de control'
  ],
  [
    'Alimentación / Energía',
    'Fuentes',
    'Convertidor DC/DC',
    'Módulo DC/DC (por ejemplo 24 → 5 V)',
    'Entrada DC → salida DC regulada',
    'Genera tensiones auxiliares para electrónica',
    'Alimentación de electrónica a 5 V o 12 V desde 24 V',
    'Esquema de alimentación de control / detalle de electrónica'
  ],
  [
    'Alimentación / Energía',
    'Calidad de energía',
    'UPS / SAI',
    'UPS industrial',
    'Entrada/salida AC, a veces DC',
    'Mantiene activos PLC, PC y HMI ante cortes de energía',
    'Continuidad de servicio para sistemas críticos de control',
    'Esquema unifilar / plano de alimentación'
  ],
  [
    'Alimentación / Energía',
    'Monitores',
    'Relé de control de tensión/fase',
    'Relé de control de fase/tensión',
    'Monitorea red trifásica o monofásica',
    'Detecta fallo de fase, orden incorrecta o sub/sobretensión',
    'Protección de motores y equipos frente a fallos de red',
    'Esquema unifilar / plano de protección'
  ],

  // ---- Infraestructura / Montaje ----
  [
    'Infraestructura / Montaje',
    'Gabinetes',
    'Gabinete / armario',
    'Armario eléctrico industrial',
    'N/A (elemento mecánico)',
    'Aloja y protege componentes eléctricos y electrónicos',
    'Tablero principal de control y potencia',
    'Plano de armario / layout mecánico'
  ],
  [
    'Infraestructura / Montaje',
    'Gabinetes',
    'Caja de conexión',
    'Caja de conexiones IP65/IP67',
    'N/A',
    'Conexión y distribución de señales cerca del proceso',
    'Cajas de derivación y empalme de sensores y actuadores',
    'Plano de campo / layout de planta'
  ],
  [
    'Infraestructura / Montaje',
    'Conexión',
    'Bornes / regletas',
    'Regleta / bornera en riel DIN',
    'Conexión de conductores',
    'Facilita el cableado y mantenimiento',
    'Interconexión de cables de campo con cables de tablero',
    'Plano de armario / diagrama de cableado'
  ],
  [
    'Infraestructura / Montaje',
    'Conexión',
    'Conectores circulares',
    'Conectores M8/M12',
    'Conexión enchufable de sensores/actuadores',
    'Permiten conexión rápida y robusta en campo',
    'Conexión de sensores y actuadores en máquinas modulares',
    'Plano de campo / diagramas de conexionado'
  ],
  [
    'Infraestructura / Montaje',
    'Canalización',
    'Canaletas / bandejas / prensaestopas',
    'Canaleta, bandeja portacables, prensaestopas',
    'N/A',
    'Guiado y entrada de cables al armario y entre equipos',
    'Gestión de cables entre armario y campo',
    'Plano de armario / layout mecánico / plano de cableado'
  ],

  // ---- Instrumentación de proceso avanzada ----
  [
    'Instrumentación de proceso',
    'Transmisores inteligentes',
    'Transmisor de presión',
    'Transmisor de presión inteligente',
    '4–20 mA + HART o fieldbus',
    'Mide presión con diagnóstico y comunicación avanzada',
    'Medición de presión en procesos críticos con diagnóstico adicional',
    'P&ID / plano de instrumentación de planta'
  ],
  [
    'Instrumentación de proceso',
    'Transmisores inteligentes',
    'Transmisor de nivel',
    'Transmisor de nivel radar/ultrasónico',
    '4–20 mA + comunicación digital',
    'Mide nivel en tanques con alta fiabilidad',
    'Control de nivel en tanques de producto o reactores',
    'P&ID / plano de instrumentación de planta'
  ],
  [
    'Instrumentación de proceso',
    'Transmisores inteligentes',
    'Transmisor de caudal',
    'Caudalímetro electromagnético o coriolis',
    '4–20 mA + fieldbus',
    'Medición de caudal precisa en procesos',
    'Medición de caudal de producto en líneas de proceso continuo',
    'P&ID / plano de instrumentación de planta'
  ],
  [
    'Instrumentación de proceso',
    'Analizadores',
    'Analizador químico',
    'Analizador de pH, conductividad u oxígeno disuelto',
    '4–20 mA + comunicación',
    'Controla calidad de agua o procesos químicos',
    'Control de calidad de agua de calderas, efluentes o procesos químicos',
    'P&ID / plano de instrumentación de planta'
  ],
  [
    'Instrumentación de proceso',
    'Registro de datos',
    'Datalogger / registrador',
    'Registrador de datos independiente',
    'Entradas analógicas/digitales + memoria',
    'Registro histórico de variables de proceso sin PC',
    'Registro local de tendencias de temperatura, presión o caudal',
    'P&ID / plano de instrumentación / documentación de planta'
  ]
];

export const componentType = [
    'Sensor',
    'Actuador',
    'Display/HMI',
    'Dispositivo de mando',
    'Equipo de control',
    'Protección / Potencia',
    'Drive / Motion',
    'Red / Comunicación',
    'Alimentación / Energía',
    'Infraestructura / Montaje',
    'Instrumentación de proceso'
]

