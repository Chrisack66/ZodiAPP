import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProfileContext } from "../Context/ProfileContext";
import { ThemeContext } from "../Context/ThemeContext";
import signsData from "../data/signs.json";

export default function Home() {
  const { profile, favorite, toggleFavorite } = useContext(ProfileContext); // {{ profile, favorite, saveProfile, removeProfile, toggleFavorite }}
  const { theme } = useContext(ThemeContext);

  const signSlug = favorite || profile?.sign; // Se l'utente ha un segno preferito mostra quello, altrimenti mostra il segno del suo profilo (se il profilo esiste)
  const sign = signSlug ? signsData.find(s => s.slug === signSlug) : null; // Recupera le informazioni del segno preferito o del segno del profilo

  // Costruzione della pagina home
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Home</h1>

      {sign ? ( // Se il segno esiste, renderizza tutte le informazioni
        <div className="card p-6 max-w-lg w-full rounded shadow text-center">
          <h1 className="text-2xl font-bold mb-2">{sign.name_it} {sign.symbol}</h1>
          <p><strong>Data:</strong> {sign.dates.start} - {sign.dates.end}</p>
          <p><strong>Elemento:</strong> {sign.element}</p>
          <p><strong>Modalità:</strong> {sign.modality}</p>
          <p><strong>Pianeta:</strong> {sign.planet}</p>
          <p><strong>Tratti positivi:</strong> {sign.traits_positive.join(", ")}</p>
          <p><strong>Tratti negativi:</strong> {sign.traits_negative.join(", ")}</p>
          <div className="mt-4">
            <button
              onClick={() => toggleFavorite(sign.slug)}
              className="p-2 border rounded cursor-pointer"
            >
              {favorite === sign.slug ? "Rimuovi dai preferiti" : "Imposta come preferito"}
            </button>
          </div>
        </div>
      ) : ( // Se invece non esiste, chiedi all'utente di creare un profilo, renderizzandolo alla pagina di creazione del profilo
        <div className="text-center">
          <p className="mb-4">Non hai ancora un profilo.</p>
          <Link
            to="/profile"
            className="inline-block p-2 border rounded bg-[var(--card-bg)]"
          >
            Crea Profilo
          </Link>
        </div>
      )}
    </div>
  );
}
