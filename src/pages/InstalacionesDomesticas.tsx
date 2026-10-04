import { useState } from "react";

import DispositivosHogarCheatSheet from "../componentes/DispositivosHogarCheatSheet";
import ReglamentacionCABA from "../componentes/ReglamentacionCABA";
import CercoElectrico from "../componentes/CercoElectrico";
import MarcoNormativoCerco from "../componentes/MarcoNormativoCerco";
import "../installation-navigation.css";

type DomesticSection = "dispositivos" | "reglamentacion" | "cerco";

const InstalacionesDomesticas: React.FC = () => {
  const [selectedSection, setSelectedSection] =
    useState<DomesticSection | null>(null);

  return (
    <div className="page-wrapper">
      <header className="installation-switcher">
        <div>
          <div className="sheet-pill">Instalaciones eléctricas</div>
          <h1 className="installation-switcher-title">
            Instalaciones domésticas
          </h1>
        </div>

        <div
          className="installation-tabs"
          role="group"
          aria-label="Contenido de instalaciones domésticas"
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
              selectedSection === "reglamentacion"
                ? " installation-tab--active"
                : ""
            }`}
            aria-pressed={selectedSection === "reglamentacion"}
            onClick={() => setSelectedSection("reglamentacion")}
          >
            <span className="installation-tab-icon" aria-hidden="true">
              §
            </span>
            <span>Normativa AMBA</span>
          </button>

          <button
            type="button"
            className={`installation-tab${
              selectedSection === "cerco" ? " installation-tab--active" : ""
            }`}
            aria-pressed={selectedSection === "cerco"}
            onClick={() => setSelectedSection("cerco")}
          >
            <span className="installation-tab-icon" aria-hidden="true">
              ⛨
            </span>
            <span>Cerco eléctrico</span>
          </button>
        </div>
      </header>

      {selectedSection === "dispositivos" && <DispositivosHogarCheatSheet />}

      {selectedSection === "reglamentacion" && <ReglamentacionCABA />}

      {selectedSection === "cerco" && (
        <>
          <CercoElectrico />
          <MarcoNormativoCerco />
        </>
      )}
    </div>
  );
};

export default InstalacionesDomesticas;
