import { useState } from "react";

import DispositivosIndustrialesCheatSheet from "../componentes/DispositivosIndustrialesCheatSheet";
import NormativaIndustrialAMBA from "../componentes/NormativaIndustrialAMBA";


const InstalacionesIndustriales: React.FC = () => {

    const [selectedSection, setSelectedSection] = useState<string | null>(null);

    const handleClick = (section: string) => {
        setSelectedSection(section);
    }

    return (
        <main className="instalaciones-body">
            <h1>Instalaciones Industriales</h1>
            <div className="temaButtons">
                <button onClick={()=>handleClick('dispositivos')}>Dispositivos eléctricos</button>
                <button onClick={()=>handleClick('normativa')}>Normativa AMBA</button>
            </div>

            {(selectedSection === 'dispositivos' && (
                <DispositivosIndustrialesCheatSheet />
                ))}
            {(selectedSection === 'normativa' && (
                <NormativaIndustrialAMBA />
                ))}

        </main>
    );
}

export default InstalacionesIndustriales;