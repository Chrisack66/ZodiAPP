import { createContext, useState, useEffect } from "react";
import signsData from "../data/signs.json";
import { calcSign } from "../Utils/calcSign";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [favorite, setFavorite] = useState(null);

  // Recuperiamo eventuali dati salvati nel localStorage (se esistono) 
  useEffect(() => {
    const savedProfile = localStorage.getItem("zodiapp.profile"); 
    const savedFavorite = localStorage.getItem("zodiapp.favoriteSign");
    if (savedProfile) setProfile(JSON.parse(savedProfile));
    if (savedFavorite) setFavorite(savedFavorite);
  }, []);

  // Funzione che salva o aggiorna il profilo dell'utente 
  const saveProfile = (name, date) => {
    const sign = calcSign(date, signsData);
    const newProfile = { name, date, sign };
    setProfile(newProfile);
    localStorage.setItem("zodiapp.profile", JSON.stringify(newProfile));
  };

  // Funzione che rimuove il profilo 
  const removeProfile = () => {
    setProfile(null);
    localStorage.removeItem("zodiapp.profile");
  };

  // Funzione che permette di aggiungere o rimuove un segno tra i preferiti
  const toggleFavorite = (slug) => {
    if (favorite === slug) {
      setFavorite(null);
      localStorage.removeItem("zodiapp.favoriteSign");
    } else {
      setFavorite(slug);
      localStorage.setItem("zodiapp.favoriteSign", slug);
    }
  };

  return (
    <ProfileContext.Provider
      value={{ profile, favorite, saveProfile, removeProfile, toggleFavorite }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
