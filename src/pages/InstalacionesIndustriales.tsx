import { useState } from "react";

import DispositivosIndustrialesCheatSheet from "../componentes/DispositivosIndustrialesCheatSheet";
import NormativaIndustrialAMBA from "../componentes/NormativaIndustrialAMBA";


const InstalacionesIndustriales: React.FC = () => {

    const [selectedSection, setSelectedSection] = useState<string | null>(null);

    const handleClick = (section: string) => {
        setSelectedSection(section);
    }

    return (
        <div className="page-wrapper">
            <div className="page-panel">
                <h1>Instalaciones Industriales</h1>
                <div className="btn-group">
                    <button onClick={() => handleClick('dispositivos')}>Dispositivos eléctricos</button>
                    <button onClick={() => handleClick('normativa')}>Normativa AMBA</button>
                </div>
            </div>
            {(selectedSection === 'dispositivos' && (
                <DispositivosIndustrialesCheatSheet />
            ))}
            {(selectedSection === 'normativa' && (
                <NormativaIndustrialAMBA />
            ))}

        </div>
    );
}

export default InstalacionesIndustriales;