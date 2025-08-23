import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import signsData from "../data/signs.json";

export default function Compatibilita() {
  const { theme } = useContext(ThemeContext);
  const [sign1, setSign1] = useState("");
  const [sign2, setSign2] = useState("");
  const [result, setResult] = useState("");

  // Recuperiamo l'ultima coppia comparata dal localStorage e la impostiamo nei select al caricamento della pagina
  useEffect(() => {
    const lastPair = localStorage.getItem("zodiapp.compatibility.lastPair"); // Salviamo l'ultima coppia comparata nel localStorage
    if (lastPair) { // Se esiste già una coppia salvata nel localStorage, mostriamo quella, lasciando nei select il valore di s1 e s2
      const { s1, s2 } = JSON.parse(lastPair); 
      setSign1(s1); 
      setSign2(s2);
    }
  }, []);

  // Controlla se entrambi i segni sono selezionati. Se non vengono selezionati, interrompe la funzione
  const handleCheck = () => {
    if (!sign1 || !sign2) return;

    // Troviamo negli oggetti di signsData quelli corrispondenti ai segni selezionati nei select
    const s1 = signsData.find((s) => s.slug === sign1);
    const s2 = signsData.find((s) => s.slug === sign2);

    // Se non viene trovato nessun segno, mostriamo un errore
    if (!s1 || !s2) {
      setResult("Errore nei dati dei segni.");
      return;
    }

    let compatibility = "Compatibilità neutra"; // Dichiariamo una variabile per definire la compatibilità tra due segni che settiamo inizialmente a neutra

    // Verifichiamo se sign2 è nella lista di compatibilità alta o bassa di sign1 e impostiamo il risultato di conseguenza
    if (s1.compat_high.includes(sign2)) {
      compatibility = "Compatibilità alta";
    } else if (s1.compat_low.includes(sign2)) {
      compatibility = "Compatibilità bassa";
    }

    setResult(`${compatibility}`); // Mostriamo il risultato della compatibilità dei due segni

    // Salviamo nel localStorage la coppia comparata
    localStorage.setItem( 
      "zodiapp.compatibility.lastPair",
      JSON.stringify({ s1: sign1, s2: sign2 })
    );
  };

  // Costruzione della pagina con i tasti select e il pulsante per confermare i segni da comparare
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] p-4">
      <h1 className="text-3xl font-bold mb-6">Compatibilità</h1>

      <div className="card p-6 max-w-lg w-full rounded shadow text-center">
        <div className="flex flex-col items-center gap-4 mb-4">

          {/*Primo select */}
          <select
            value={sign1}
            onChange={(e) => setSign1(e.target.value)}
            className="p-2 border rounded bg-[var(--card-bg)] w-64 text-center"
          >
            <option value="">Seleziona il primo segno</option>
            {signsData.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name_it}
              </option>
            ))}
          </select>

          {/*Secondo select */}
          <select
            value={sign2}
            onChange={(e) => setSign2(e.target.value)}
            className="p-2 border rounded bg-[var(--card-bg)] w-64 text-center"
          >
            <option value="">Seleziona il secondo segno</option>
            {signsData.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name_it}
              </option>
            ))}
          </select>
        </div>

        {/*Bottone*/}
        <button
          onClick={handleCheck}
          className="p-2 border rounded mb-4 cursor-pointer hover:bg-[var(--card-bg)] transition"
        >
          Verifica
        </button>

        {/*Mostriamo il risultato*/}
        {result && (
          <p className="mt-2 font-semibold text-lg">{result}</p>
        )}
      </div>
    </div>
  );
}
