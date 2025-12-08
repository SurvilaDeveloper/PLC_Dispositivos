import { useState } from "react";
import PotenciaMotorTrifasico from "../componentes/PotenciaMotorTrifasico";
import MotorTrifasicoParVelocidad from "../componentes/MotorTrifasicoParVelocidad";
import CosenoPhi from "../componentes/CosenoPhi";
import EnsayosMotorTrifasico from "../componentes/EnsayosMotorTrifasico";

const MenuFormulas: React.FC = () => {
    const [selectedFormula, setSelectedFormula] = useState<string | null>(null);

    return (
        <>
            <div>
                <h2>Fórmulas</h2>
                {selectedFormula === null && (
                    <ul>
                        <li onClick={() => setSelectedFormula('potenciaMotorTrifasico')}>Potencia de motores trifásicos</li>
                        <li onClick={() => setSelectedFormula('motorTrifasicoParVelocidad')}>Motor Trifásico Par Velocidad</li>
                        <li onClick={() => setSelectedFormula('cosenoPhi')}>Coseno Phi</li>
                        <li onClick={() => setSelectedFormula('ensayosMotorTrifasico')}>Ensayos de motor trifásico</li>
                    </ul>)
                }
                {selectedFormula !== null && (
                    <button onClick={() => setSelectedFormula(null)}>Volver al menú de fórmulas</button>
                )}
                {selectedFormula === 'potenciaMotorTrifasico' && (
                    <div>
                        <h3>Fórmulas de Potencia en Motores Trifásicos</h3>
                        <PotenciaMotorTrifasico />
                    </div>
                )}
                {selectedFormula === 'motorTrifasicoParVelocidad' && (
                    <div>
                        <h3>Motor Trifásico Par Velocidad</h3>
                        <MotorTrifasicoParVelocidad />
                    </div>
                )}
                {selectedFormula === 'cosenoPhi' && (
                    <div>
                        <h3>Factor de Potencia: cos φ</h3>
                        <CosenoPhi />
                    </div>
                )}
                {selectedFormula === 'ensayosMotorTrifasico' && (
                    <div>
                        <h3>Ensayos de motor trifásico</h3>
                        <EnsayosMotorTrifasico />
                    </div>
                )}
            </div>
        </>
    );
}

export default MenuFormulas;