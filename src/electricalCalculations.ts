export type CalculationResult<T> =
  | { ok: true; value: T }
  | { ok: false; error: string }

export type ThreePhasePowerResult = {
  activePowerW: number
  apparentPowerKVA: number
  apparentPowerVA: number
  reactivePowerKVAr: number
  lineCurrentA: number
}

export function calculateBalancedThreePhasePower(
  lineVoltageV: number,
  activePowerKW: number,
  powerFactor: number,
): CalculationResult<ThreePhasePowerResult> {
  if (!Number.isFinite(lineVoltageV) || lineVoltageV <= 0) {
    return { ok: false, error: 'La tensión de línea debe ser mayor que 0 V.' }
  }

  if (!Number.isFinite(activePowerKW) || activePowerKW < 0) {
    return { ok: false, error: 'La potencia activa no puede ser negativa.' }
  }

  if (!Number.isFinite(powerFactor) || powerFactor <= 0 || powerFactor > 1) {
    return {
      ok: false,
      error: 'El factor de potencia debe ser mayor que 0 y menor o igual que 1.',
    }
  }

  const activePowerW = activePowerKW * 1000
  const apparentPowerKVA = activePowerKW / powerFactor
  const apparentPowerVA = apparentPowerKVA * 1000
  const reactivePowerKVAr = Math.sqrt(
    Math.max(apparentPowerKVA ** 2 - activePowerKW ** 2, 0),
  )
  const lineCurrentA =
    activePowerW / (Math.sqrt(3) * lineVoltageV * powerFactor)

  return {
    ok: true,
    value: {
      activePowerW,
      apparentPowerKVA,
      apparentPowerVA,
      reactivePowerKVAr,
      lineCurrentA,
    },
  }
}

export type InductionMotorTestInput = {
  noLoadLineVoltageV: number
  noLoadLineCurrentA: number
  noLoadPowerKW: number
  lockedRotorLineVoltageV: number
  lockedRotorLineCurrentA: number
  lockedRotorPowerKW: number
  measuredStatorResistanceOhm: number
}

export type InductionMotorTestResult = {
  noLoadPhaseVoltageV: number
  noLoadPhaseCurrentA: number
  noLoadPowerFactor: number
  coreLossResistanceOhm: number | null
  magnetizingReactanceOhm: number | null
  lockedRotorPhaseVoltageV: number
  lockedRotorPhaseCurrentA: number
  lockedRotorPowerFactor: number
  equivalentImpedanceOhm: number
  equivalentResistanceOhm: number
  equivalentReactanceOhm: number
  statorResistanceOhm: number
  referredRotorResistanceOhm: number
  statorLeakageReactanceOhm: number
  referredRotorLeakageReactanceOhm: number
  usesMeasuredStatorResistance: boolean
}

const EPSILON = 1e-9

function validateThreePhaseMeasuredPower(
  lineVoltageV: number,
  lineCurrentA: number,
  totalActivePowerW: number,
  testName: string,
): string | null {
  const apparentPowerVA = Math.sqrt(3) * lineVoltageV * lineCurrentA

  if (totalActivePowerW > apparentPowerVA + EPSILON) {
    return `${testName}: la potencia activa medida no puede superar la potencia aparente √3 · Vₗ · Iₗ. Revisá tensión, corriente, potencia y unidades.`
  }

  return null
}

export function calculateInductionMotorParametersStar(
  input: InductionMotorTestInput,
): CalculationResult<InductionMotorTestResult> {
  const {
    noLoadLineVoltageV,
    noLoadLineCurrentA,
    noLoadPowerKW,
    lockedRotorLineVoltageV,
    lockedRotorLineCurrentA,
    lockedRotorPowerKW,
    measuredStatorResistanceOhm,
  } = input

  if (
    !Number.isFinite(noLoadLineVoltageV) ||
    !Number.isFinite(noLoadLineCurrentA) ||
    !Number.isFinite(noLoadPowerKW) ||
    !Number.isFinite(lockedRotorLineVoltageV) ||
    !Number.isFinite(lockedRotorLineCurrentA) ||
    !Number.isFinite(lockedRotorPowerKW) ||
    !Number.isFinite(measuredStatorResistanceOhm)
  ) {
    return { ok: false, error: 'Todos los valores deben ser numéricos finitos.' }
  }

  if (
    noLoadLineVoltageV <= 0 ||
    noLoadLineCurrentA <= 0 ||
    lockedRotorLineVoltageV <= 0 ||
    lockedRotorLineCurrentA <= 0
  ) {
    return {
      ok: false,
      error: 'Las tensiones y corrientes de ambos ensayos deben ser mayores que 0.',
    }
  }

  if (noLoadPowerKW < 0 || lockedRotorPowerKW < 0) {
    return { ok: false, error: 'Las potencias medidas no pueden ser negativas.' }
  }

  if (measuredStatorResistanceOhm < 0) {
    return {
      ok: false,
      error: 'La resistencia de estator medida no puede ser negativa.',
    }
  }

  const noLoadPowerW = noLoadPowerKW * 1000
  const lockedRotorPowerW = lockedRotorPowerKW * 1000

  const noLoadPowerError = validateThreePhaseMeasuredPower(
    noLoadLineVoltageV,
    noLoadLineCurrentA,
    noLoadPowerW,
    'Ensayo en vacío',
  )

  if (noLoadPowerError) {
    return { ok: false, error: noLoadPowerError }
  }

  const lockedRotorPowerError = validateThreePhaseMeasuredPower(
    lockedRotorLineVoltageV,
    lockedRotorLineCurrentA,
    lockedRotorPowerW,
    'Ensayo de rotor bloqueado',
  )

  if (lockedRotorPowerError) {
    return { ok: false, error: lockedRotorPowerError }
  }

  // Modelo por fase para un motor conectado en estrella:
  // V_fase = V_línea / √3 e I_fase = I_línea.
  const noLoadPhaseVoltageV = noLoadLineVoltageV / Math.sqrt(3)
  const noLoadPhaseCurrentA = noLoadLineCurrentA
  const noLoadPowerFactor =
    noLoadPowerW / (3 * noLoadPhaseVoltageV * noLoadPhaseCurrentA)

  const noLoadAngle = Math.acos(noLoadPowerFactor)
  const activeCurrentA = noLoadPhaseCurrentA * Math.cos(noLoadAngle)
  const magnetizingCurrentA = noLoadPhaseCurrentA * Math.sin(noLoadAngle)

  const coreLossConductanceS =
    noLoadPhaseVoltageV > 0 ? activeCurrentA / noLoadPhaseVoltageV : 0
  const magnetizingSusceptanceS =
    noLoadPhaseVoltageV > 0 ? magnetizingCurrentA / noLoadPhaseVoltageV : 0

  const coreLossResistanceOhm =
    Math.abs(coreLossConductanceS) > EPSILON
      ? 1 / coreLossConductanceS
      : null
  const magnetizingReactanceOhm =
    Math.abs(magnetizingSusceptanceS) > EPSILON
      ? 1 / magnetizingSusceptanceS
      : null

  const lockedRotorPhaseVoltageV = lockedRotorLineVoltageV / Math.sqrt(3)
  const lockedRotorPhaseCurrentA = lockedRotorLineCurrentA
  const lockedRotorPowerFactor =
    lockedRotorPowerW /
    (3 * lockedRotorPhaseVoltageV * lockedRotorPhaseCurrentA)

  const lockedRotorAngle = Math.acos(lockedRotorPowerFactor)
  const equivalentImpedanceOhm =
    lockedRotorPhaseVoltageV / lockedRotorPhaseCurrentA
  const equivalentResistanceOhm =
    equivalentImpedanceOhm * Math.cos(lockedRotorAngle)
  const equivalentReactanceOhm =
    equivalentImpedanceOhm * Math.sin(lockedRotorAngle)

  if (
    measuredStatorResistanceOhm > 0 &&
    measuredStatorResistanceOhm >= equivalentResistanceOhm
  ) {
    return {
      ok: false,
      error:
        'La R₁ medida debe ser menor que Rₑq del ensayo de rotor bloqueado para este modelo simplificado. Revisá la medición o dejá R₁ en 0 para usar la aproximación R₁ ≈ R₂′.',
    }
  }

  const usesMeasuredStatorResistance = measuredStatorResistanceOhm > 0
  const statorResistanceOhm = usesMeasuredStatorResistance
    ? measuredStatorResistanceOhm
    : equivalentResistanceOhm / 2
  const referredRotorResistanceOhm =
    equivalentResistanceOhm - statorResistanceOhm
  const statorLeakageReactanceOhm = equivalentReactanceOhm / 2
  const referredRotorLeakageReactanceOhm = equivalentReactanceOhm / 2

  return {
    ok: true,
    value: {
      noLoadPhaseVoltageV,
      noLoadPhaseCurrentA,
      noLoadPowerFactor,
      coreLossResistanceOhm,
      magnetizingReactanceOhm,
      lockedRotorPhaseVoltageV,
      lockedRotorPhaseCurrentA,
      lockedRotorPowerFactor,
      equivalentImpedanceOhm,
      equivalentResistanceOhm,
      equivalentReactanceOhm,
      statorResistanceOhm,
      referredRotorResistanceOhm,
      statorLeakageReactanceOhm,
      referredRotorLeakageReactanceOhm,
      usesMeasuredStatorResistance,
    },
  }
}

export const COPPER_RESISTIVITY_20C_OHM_MM2_PER_M = 0.017241
export const COPPER_TEMPERATURE_COEFFICIENT_20C_PER_C = 0.00394

export type CopperResistanceResult = {
  resistivityAtTemperatureOhmMm2PerM: number
  oneWayResistance20COhm: number
  oneWayResistanceAtTemperatureOhm: number
  twoWireLoopResistance20COhm: number
  twoWireLoopResistanceAtTemperatureOhm: number
}

export function calculateCopperResistance(
  sectionMm2: number,
  oneWayLengthM: number,
  temperatureC: number,
): CalculationResult<CopperResistanceResult> {
  if (!Number.isFinite(sectionMm2) || sectionMm2 <= 0) {
    return { ok: false, error: 'La sección del conductor debe ser mayor que 0 mm².' }
  }

  if (!Number.isFinite(oneWayLengthM) || oneWayLengthM <= 0) {
    return { ok: false, error: 'La longitud debe ser mayor que 0 m.' }
  }

  if (!Number.isFinite(temperatureC)) {
    return { ok: false, error: 'La temperatura debe ser un número válido.' }
  }

  const temperatureFactor =
    1 + COPPER_TEMPERATURE_COEFFICIENT_20C_PER_C * (temperatureC - 20)

  if (temperatureFactor <= 0) {
    return {
      ok: false,
      error: 'La temperatura ingresada queda fuera del rango útil de esta aproximación lineal.',
    }
  }

  const resistivityAtTemperatureOhmMm2PerM =
    COPPER_RESISTIVITY_20C_OHM_MM2_PER_M * temperatureFactor
  const oneWayResistance20COhm =
    (COPPER_RESISTIVITY_20C_OHM_MM2_PER_M * oneWayLengthM) / sectionMm2
  const oneWayResistanceAtTemperatureOhm =
    (resistivityAtTemperatureOhmMm2PerM * oneWayLengthM) / sectionMm2

  return {
    ok: true,
    value: {
      resistivityAtTemperatureOhmMm2PerM,
      oneWayResistance20COhm,
      oneWayResistanceAtTemperatureOhm,
      twoWireLoopResistance20COhm: oneWayResistance20COhm * 2,
      twoWireLoopResistanceAtTemperatureOhm:
        oneWayResistanceAtTemperatureOhm * 2,
    },
  }
}

export type CableSystem = 'singlePhaseTwoWire' | 'threePhaseBalanced'

export type CopperVoltageDropInput = {
  system: CableSystem
  nominalVoltageV: number
  currentA: number
  oneWayLengthM: number
  sectionMm2: number
  powerFactor: number
  conductorTemperatureC: number
}

export type CopperVoltageDropResult = {
  sectionMm2: number
  currentDensityAPerMm2: number
  oneWayResistanceOhm: number
  voltageDropV: number
  voltageDropPercent: number
  resistiveLossW: number
}

export function calculateCopperVoltageDrop(
  input: CopperVoltageDropInput,
): CalculationResult<CopperVoltageDropResult> {
  const {
    system,
    nominalVoltageV,
    currentA,
    oneWayLengthM,
    sectionMm2,
    powerFactor,
    conductorTemperatureC,
  } = input

  if (!Number.isFinite(nominalVoltageV) || nominalVoltageV <= 0) {
    return { ok: false, error: 'La tensión nominal debe ser mayor que 0 V.' }
  }

  if (!Number.isFinite(currentA) || currentA <= 0) {
    return { ok: false, error: 'La corriente debe ser mayor que 0 A.' }
  }

  if (!Number.isFinite(powerFactor) || powerFactor <= 0 || powerFactor > 1) {
    return {
      ok: false,
      error: 'El factor de potencia debe ser mayor que 0 y menor o igual que 1.',
    }
  }

  const resistance = calculateCopperResistance(
    sectionMm2,
    oneWayLengthM,
    conductorTemperatureC,
  )

  if (resistance.ok === false) {
    return { ok: false, error: resistance.error }
  }

  const oneWayResistanceOhm =
    resistance.value.oneWayResistanceAtTemperatureOhm

  // Aproximación resistiva: se desprecia la reactancia del conductor.
  const voltageDropV =
    system === 'singlePhaseTwoWire'
      ? 2 * currentA * oneWayResistanceOhm * powerFactor
      : Math.sqrt(3) * currentA * oneWayResistanceOhm * powerFactor

  const resistiveLossW =
    system === 'singlePhaseTwoWire'
      ? 2 * currentA ** 2 * oneWayResistanceOhm
      : 3 * currentA ** 2 * oneWayResistanceOhm

  return {
    ok: true,
    value: {
      sectionMm2,
      currentDensityAPerMm2: currentA / sectionMm2,
      oneWayResistanceOhm,
      voltageDropV,
      voltageDropPercent: (voltageDropV / nominalVoltageV) * 100,
      resistiveLossW,
    },
  }
}

export const COMMON_COPPER_SECTIONS_MM2 = [
  1.5,
  2.5,
  4,
  6,
  10,
  16,
  25,
  35,
  50,
  70,
  95,
  120,
] as const

export type CopperSectionSuggestionInput = Omit<
  CopperVoltageDropInput,
  'sectionMm2'
> & {
  maxVoltageDropPercent: number
  maxCurrentDensityAPerMm2: number
  candidateSectionsMm2?: readonly number[]
}

export type CopperSectionSuggestionResult = {
  selected: CopperVoltageDropResult | null
  evaluated: CopperVoltageDropResult[]
  maxVoltageDropPercent: number
  maxCurrentDensityAPerMm2: number
}

export function suggestCopperSection(
  input: CopperSectionSuggestionInput,
): CalculationResult<CopperSectionSuggestionResult> {
  const {
    maxVoltageDropPercent,
    maxCurrentDensityAPerMm2,
    candidateSectionsMm2 = COMMON_COPPER_SECTIONS_MM2,
    ...voltageDropInput
  } = input

  if (
    !Number.isFinite(maxVoltageDropPercent) ||
    maxVoltageDropPercent <= 0
  ) {
    return {
      ok: false,
      error: 'El límite de caída de tensión debe ser mayor que 0 %.',
    }
  }

  if (
    !Number.isFinite(maxCurrentDensityAPerMm2) ||
    maxCurrentDensityAPerMm2 <= 0
  ) {
    return {
      ok: false,
      error: 'El límite didáctico de densidad de corriente debe ser mayor que 0 A/mm².',
    }
  }

  const sortedSections = [...candidateSectionsMm2]
    .filter((section) => Number.isFinite(section) && section > 0)
    .sort((a, b) => a - b)

  if (sortedSections.length === 0) {
    return { ok: false, error: 'No hay secciones candidatas válidas para evaluar.' }
  }

  const evaluated: CopperVoltageDropResult[] = []

  for (const sectionMm2 of sortedSections) {
    const result = calculateCopperVoltageDrop({
      ...voltageDropInput,
      sectionMm2,
    })

    if (result.ok === false) {
      return { ok: false, error: result.error }
    }

    evaluated.push(result.value)
  }

  const selected =
    evaluated.find(
      (result) =>
        result.currentDensityAPerMm2 <= maxCurrentDensityAPerMm2 &&
        result.voltageDropPercent <= maxVoltageDropPercent,
    ) ?? null

  return {
    ok: true,
    value: {
      selected,
      evaluated,
      maxVoltageDropPercent,
      maxCurrentDensityAPerMm2,
    },
  }
}
