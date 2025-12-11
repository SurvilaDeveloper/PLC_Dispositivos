import { useState } from "react";

import DispositivosHogarCheatSheet from "../componentes/DispositivosHogarCheatSheet";
import ReglamentacionCABA from "../componentes/ReglamentacionCABA";

const InstalacionesDomesticas: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const handleClick = (section: string) => {
    setSelectedSection(section);
  };

  return (
    <div className="page-wrapper">
      <div className="page-panel">
        <h1>Instalaciones Domésticas</h1>

        <div className="btn-group">
          <button onClick={() => handleClick("dispositivos")}>
            Dispositivos eléctricos
          </button>
          <button onClick={() => handleClick("reglamentacion")}>
            Reglamentación AMBA
          </button>
        </div>


      </div>
      {selectedSection === "dispositivos" && <DispositivosHogarCheatSheet />}

      {selectedSection === "reglamentacion" && <ReglamentacionCABA />}
    </div>
  );
};

export default InstalacionesDomesticas;

