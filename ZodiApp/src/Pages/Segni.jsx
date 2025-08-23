import { useState, useContext, useEffect} from "react";
import signsData from "../data/signs.json";
import { ThemeContext } from "../Context/ThemeContext";  // {{ theme, toggleTheme }}

export default function Signs() {
  const { theme } = useContext(ThemeContext);
  const [elementFilter, setElementFilter] = useState("");
  const [modalityFilter, setModalityFilter] = useState("");

  useEffect(() => {
    document.body.style.overflow = "auto"; // abilita scroll quando entro dalla pagina
    return () => {
      document.body.style.overflow = "hidden"; // blocca scroll quando esco dalla pagina
    };
  }, []);

  // Filtra i segni in base all'elemento e/o alla modalità selezionati (o tutti e due). 
  // Se un filtro è vuoto, ignora quel filtro.

  const filteredSigns = signsData.filter((sign) => {
    return (
      (elementFilter === "" || sign.element === elementFilter) && 
      (modalityFilter === "" || sign.modality === modalityFilter) 
    );
  });

  // Setta lo stile della pagina in base al tema
  const textColor = theme === "light" ? "text-black" : "text-white";
  const bgFocus =
    theme === "light"
      ? "focus:bg-white focus:text-black"
      : "focus:bg-gray-900 focus:text-white";

  // Costruzione della pagina dei segni
  // In base al tema, cambia anche lo stile della pagina
  return (
    <div className="p-4 min-h-screen bg-[var(--bg-main)]">
      <h1 className={`text-2xl font-bold text-center mb-4 ${textColor}`}>
        Tutti i Segni
      </h1>

      <div className="flex justify-center gap-4 mb-6">
        <select
          value={elementFilter}
          onChange={(e) => setElementFilter(e.target.value)}
          className={`p-2 border border-gray-400 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 ${textColor} 
  ${
    theme === "light"
      ? "focus:bg-white focus:text-black"
      : "focus:bg-gray-900 focus:text-white"
  }`}
        >
          <option value="">Tutti gli elementi</option>
          <option value="Fuoco">Fuoco</option>
          <option value="Terra">Terra</option>
          <option value="Aria">Aria</option>
          <option value="Acqua">Acqua</option>
        </select>

        <select
          value={modalityFilter}
          onChange={(e) => setModalityFilter(e.target.value)}
          className={`p-2 border border-gray-400 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 ${textColor} 
  ${
    theme === "light"
      ? "focus:bg-white focus:text-black"
      : "focus:bg-gray-900 focus:text-white"
  }`}
        >
          <option value="">Tutte le modalità</option>
          <option value="Cardinale">Cardinale</option>
          <option value="Fisso">Fisso</option>
          <option value="Mutable">Mutable</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredSigns.map((sign) => (
          <div
            key={sign.slug}
            className="card p-4 rounded shadow bg-white border border-gray-200 flex flex-col items-center text-center"
          >
            <h2 className="text-xl font-bold mb-1">
              {sign.name_it} {sign.symbol}
            </h2>
            <p>
              <strong>Data:</strong> {sign.dates.start} - {sign.dates.end}
            </p>
            <p>
              <strong>Elemento:</strong> {sign.element}
            </p>
            <p>
              <strong>Modalità:</strong> {sign.modality}
            </p>
            <p>
              <strong>Pianeta:</strong> {sign.planet}
            </p>
            <p>
              <strong>Tratti positivi:</strong>{" "}
              {sign.traits_positive.join(", ")}
            </p>
            <p>
              <strong>Tratti negativi:</strong>{" "}
              {sign.traits_negative.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
