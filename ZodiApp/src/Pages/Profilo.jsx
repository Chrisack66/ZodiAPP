import { useState, useContext, useEffect } from "react";
import { ProfileContext } from "../Context/ProfileContext";

export default function Profilo() {
  const { profile, saveProfile, removeProfile } = useContext(ProfileContext); // {{ profile, favorite, saveProfile, removeProfile, toggleFavorite }}

  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (profile) { // Se esiste già un profilo, imposta il nome e la data nei valori di quel profilo, altrimenti lasciali vuoti
      setName(profile.name || "");
      setDate(profile.date || "");
    } else { // Se invece esiste un profilo salvato nel localStorage, carica quello
      const stored = localStorage.getItem("zodiapp.profile"); 
      if (stored) {
        const p = JSON.parse(stored);
        setName(p.name || "");
        setDate(p.date || "");
      }
    }
  }, [profile]); // Viene eseguito ogni volta che facciamo modifiche al profilo, come cambio del nome, data o l'eleminazione

  // Funzione per salvare il profilo, salvando il nome e la data
  const handleSubmit = (e) => {
    e.preventDefault();
    saveProfile(name, date);
    alert("Profilo salvato!");
  };

  // Funzione per cancellare il profilo, portando i valori del nome e della data a vuoti
  const handleDelete = () => {
    removeProfile();
    setName("");
    setDate("");
    alert("Profilo eliminato!");
  };

  // Costruzione pagina del profilo
  return (
    <div className="flex justify-center items-center min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] p-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Profilo</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-[var(--card-bg)] p-6 rounded-xl shadow-md"
        >
          <label className="flex flex-col text-sm">
            Nome:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 rounded w-full bg-transparent"
              required
            />
          </label>
          <label className="flex flex-col text-sm">
            Data di nascita:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border p-2 rounded w-full bg-transparent"
              required
            />
          </label>
          <button type="submit" className="p-2 border rounded cursor-pointer">
            Salva Profilo
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="p-2 rounded bg-red-600 text-white hover:bg-red-700 transition-colors cursor-pointer"
          >
            Elimina Profilo
          </button>
        </form>
      </div>
    </div>
  );
}
