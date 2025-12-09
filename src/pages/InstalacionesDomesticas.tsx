import { useState } from "react";

import DispositivosHogarCheatSheet from "../componentes/DispositivosHogarCheatSheet";
import ReglamentacionCABA from "../componentes/ReglamentacionCABA";

const InstalacionesDomesticas: React.FC = () => {

    const [selectedSection, setSelectedSection] = useState<string | null>(null);

    const handleClick = (section: string) => {
        setSelectedSection(section);
    }

    return (
        <main className="instalaciones-body">
            <h1>Instalaciones Domésticas</h1>
            <div>
                <button onClick={()=>handleClick('dispositivos')}>Dispositivos eléctricos</button>
                <button onClick={()=>handleClick('reglamentacion')}>Reglamentación CABA</button>
            </div>

            {(selectedSection === 'dispositivos' && (
                <DispositivosHogarCheatSheet />
                ))}
            {(selectedSection === 'reglamentacion' && (
                <ReglamentacionCABA />
                ))}
        </main>
    );
}

export default InstalacionesDomesticas;