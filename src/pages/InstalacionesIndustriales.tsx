import { useState } from "react";

import DispositivosIndustrialesCheatSheet from "../componentes/DispositivosIndustrialesCheatSheet";
import NormativaIndustrialAMBA from "../componentes/NormativaIndustrialAMBA";
import "../installation-navigation.css";

type IndustrialSection = "dispositivos" | "normativa";

const InstalacionesIndustriales: React.FC = () => {
  const [selectedSection, setSelectedSection] =
    useState<IndustrialSection | null>(null);

  return (
    <div className="page-wrapper">
      <header className="installation-switcher">
        <div>
          <div className="sheet-pill">Instalaciones eléctricas</div>
          <h1 className="installation-switcher-title">
            Instalaciones industriales
          </h1>
        </div>

        <div
          className="installation-tabs"
          role="group"
          aria-label="Contenido de instalaciones industriales"
        >
          <button
            type="button"
            className={`installation-tab${
              selectedSection === "dispositivos"
                ? " installation-tab--active"
                : ""
            }`}
            aria-pressed={selectedSection === "dispositivos"}
            onClick={() => setSelectedSection("dispositivos")}
          >
            <span className="installation-tab-icon" aria-hidden="true">
              ⚡
            </span>
            <span>Dispositivos eléctricos</span>
          </button>

          <button
            type="button"
            className={`installation-tab${
              selectedSection === "normativa"
                ? " installation-tab--active"
                : ""
            }`}
            aria-pressed={selectedSection === "normativa"}
            onClick={() => setSelectedSection("normativa")}
          >
            <span className="installation-tab-icon" aria-hidden="true">
              §
            </span>
            <span>Normativa AMBA</span>
          </button>
        </div>
      </header>

      {selectedSection === "dispositivos" && (
        <DispositivosIndustrialesCheatSheet />
      )}

      {selectedSection === "normativa" && <NormativaIndustrialAMBA />}
    </div>
  );
};

export default InstalacionesIndustriales;
