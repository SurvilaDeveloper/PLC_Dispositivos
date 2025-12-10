import { useState } from "react";

import DispositivosHogarCheatSheet from "../componentes/DispositivosHogarCheatSheet";
import ReglamentacionCABA from "../componentes/ReglamentacionCABA";

import "./instalacionesDomesticas.css";

const InstalacionesDomesticas: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const handleClick = (section: string) => {
    setSelectedSection(section);
  };

  return (
    <div className="instalaciones-body">
      <h1>Instalaciones Domésticas</h1>

      <div className="temaButtons">
        <button onClick={() => handleClick("dispositivos")}>
          Dispositivos eléctricos
        </button>
        <button onClick={() => handleClick("reglamentacion")}>
          Reglamentación AMBA
        </button>
      </div>

      <div className="instalaciones-content">
        {selectedSection === "dispositivos" && (
          <DispositivosHogarCheatSheet />
        )}

        {selectedSection === "reglamentacion" && <ReglamentacionCABA />}
      </div>
    </div>
  );
};

export default InstalacionesDomesticas;
