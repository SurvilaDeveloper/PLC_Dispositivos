import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const tscEntry = resolve(
  projectRoot,
  'node_modules',
  'typescript',
  'bin',
  'tsc',
)

const tempDir = mkdtempSync(join(tmpdir(), 'plc-electrical-tests-'))

function approximate(actual, expected, tolerance = 1e-9) {
  assert.ok(
    Math.abs(actual - expected) <= tolerance,
    `Esperado ${expected} ± ${tolerance}, recibido ${actual}`,
  )
}

function expectOk(result) {
  assert.equal(result.ok, true)

  if (result.ok !== true) {
    throw new Error(result.error)
  }

  return result.value
}

function expectError(result) {
  assert.equal(result.ok, false)
}

const tests = []

function test(name, callback) {
  tests.push({ name, callback })
}

try {
  const compile = spawnSync(
    process.execPath,
    [
      tscEntry,
      'src/electricalCalculations.ts',
      '--target',
      'ES2022',
      '--module',
      'ESNext',
      '--moduleResolution',
      'Bundler',
      '--rootDir',
      'src',
      '--outDir',
      tempDir,
      '--skipLibCheck',
      '--declaration',
      'false',
      '--sourceMap',
      'false',
    ],
    {
      cwd: projectRoot,
      encoding: 'utf8',
    },
  )

  if (compile.status !== 0) {
    const diagnostic = [compile.stdout, compile.stderr]
      .filter(Boolean)
      .join('\n')
      .trim()

    throw new Error(
      `No se pudo compilar electricalCalculations.ts para ejecutar los tests.\n${diagnostic}`,
    )
  }

  const calculations = await import(
    `${pathToFileURL(join(tempDir, 'electricalCalculations.js')).href}?test`
  )

  test('calcula potencia trifásica equilibrada', () => {
    const result = expectOk(
      calculations.calculateBalancedThreePhasePower(400, 10, 0.8),
    )

    approximate(result.activePowerW, 10000)
    approximate(result.apparentPowerKVA, 12.5)
    approximate(result.reactivePowerKVAr, 7.5)
    approximate(result.lineCurrentA, 18.042195912175803, 1e-12)
  })

  test('rechaza factor de potencia fuera del rango físico', () => {
    expectError(
      calculations.calculateBalancedThreePhasePower(400, 10, 0),
    )
    expectError(
      calculations.calculateBalancedThreePhasePower(400, 10, 1.01),
    )
  })

  test('calcula resistencia de cobre a 20 °C', () => {
    const result = expectOk(
      calculations.calculateCopperResistance(2.5, 30, 20),
    )

    approximate(result.oneWayResistance20COhm, 0.206892, 1e-12)
    approximate(result.twoWireLoopResistance20COhm, 0.413784, 1e-12)
    approximate(
      result.resistivityAtTemperatureOhmMm2PerM,
      calculations.COPPER_RESISTIVITY_20C_OHM_MM2_PER_M,
      1e-12,
    )
  })

  test('la resistencia del cobre aumenta con la temperatura', () => {
    const at20 = expectOk(
      calculations.calculateCopperResistance(4, 20, 20),
    )
    const at70 = expectOk(
      calculations.calculateCopperResistance(4, 20, 70),
    )

    assert.ok(
      at70.oneWayResistanceAtTemperatureOhm >
        at20.oneWayResistanceAtTemperatureOhm,
    )
  })

  test('calcula caída de tensión monofásica resistiva', () => {
    const result = expectOk(
      calculations.calculateCopperVoltageDrop({
        system: 'singlePhaseTwoWire',
        nominalVoltageV: 230,
        currentA: 16,
        oneWayLengthM: 20,
        sectionMm2: 4,
        powerFactor: 1,
        conductorTemperatureC: 20,
      }),
    )

    approximate(result.currentDensityAPerMm2, 4)
    approximate(result.voltageDropV, 2.75856, 1e-9)
    approximate(result.voltageDropPercent, 1.1993739130434782, 1e-9)
  })

  test('selecciona la primera sección que cumple los criterios didácticos', () => {
    const result = expectOk(
      calculations.suggestCopperSection({
        system: 'singlePhaseTwoWire',
        nominalVoltageV: 230,
        currentA: 16,
        oneWayLengthM: 20,
        powerFactor: 1,
        conductorTemperatureC: 20,
        maxVoltageDropPercent: 3,
        maxCurrentDensityAPerMm2: 6,
        candidateSectionsMm2: [1.5, 2.5, 4, 6],
      }),
    )

    assert.notEqual(result.selected, null)
    assert.equal(result.selected?.sectionMm2, 4)
    assert.equal(result.evaluated.length, 4)
  })

  test('calcula parámetros simplificados del motor en estrella', () => {
    const result = expectOk(
      calculations.calculateInductionMotorParametersStar({
        noLoadLineVoltageV: 400,
        noLoadLineCurrentA: 5,
        noLoadPowerKW: 0.8,
        lockedRotorLineVoltageV: 80,
        lockedRotorLineCurrentA: 20,
        lockedRotorPowerKW: 2,
        measuredStatorResistanceOhm: 0,
      }),
    )

    approximate(result.noLoadPowerFactor, 0.23094010767585027, 1e-12)
    approximate(result.coreLossResistanceOhm, 200, 1e-9)
    approximate(result.equivalentResistanceOhm, 1.6666666666666665, 1e-12)
    approximate(result.equivalentReactanceOhm, 1.598610507770907, 1e-12)
    approximate(result.statorResistanceOhm, 0.8333333333333333, 1e-12)
    assert.equal(result.usesMeasuredStatorResistance, false)
  })

  test('rechaza mediciones de motor con P mayor que la potencia aparente', () => {
    expectError(
      calculations.calculateInductionMotorParametersStar({
        noLoadLineVoltageV: 400,
        noLoadLineCurrentA: 5,
        noLoadPowerKW: 4,
        lockedRotorLineVoltageV: 80,
        lockedRotorLineCurrentA: 20,
        lockedRotorPowerKW: 2,
        measuredStatorResistanceOhm: 0,
      }),
    )
  })

  test('rechaza una R1 incompatible con Req', () => {
    expectError(
      calculations.calculateInductionMotorParametersStar({
        noLoadLineVoltageV: 400,
        noLoadLineCurrentA: 5,
        noLoadPowerKW: 0.8,
        lockedRotorLineVoltageV: 80,
        lockedRotorLineCurrentA: 20,
        lockedRotorPowerKW: 2,
        measuredStatorResistanceOhm: 2,
      }),
    )
  })

  let failures = 0

  for (const { name, callback } of tests) {
    try {
      callback()
      console.log(`✓ ${name}`)
    } catch (error) {
      failures += 1
      console.error(`✗ ${name}`)
      console.error(error)
    }
  }

  if (failures > 0) {
    throw new Error(
      `${failures} test${failures === 1 ? '' : 's'} fallaron.`,
    )
  }

  console.log(`\n${tests.length} tests pasaron correctamente.`)
} finally {
  rmSync(tempDir, { recursive: true, force: true })
}
