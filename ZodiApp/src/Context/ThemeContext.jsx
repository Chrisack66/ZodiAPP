import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark"); //Dark come tema di default

  // Controlla se c'è un tema già salvato nel localStorage, se esiste applica quel tema
  useEffect(() => {
    const saved = localStorage.getItem("zodiapp.theme"); 
    if (saved) setTheme(saved);  
  }, []);

  // Cambio da tema chiaro a tema scuro e viceversa
  useEffect(() => {
    document.documentElement.className = theme; // Prende l'elemento <html> e lo aggiorna in base al tema scelto
    localStorage.setItem("zodiapp.theme", theme);  // Salva nel localStorage il tema 
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light")); // Funzione per cambiare il tema: se il tema corrente è "light", lo cambia in "dark", altrimenti in "light"

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
