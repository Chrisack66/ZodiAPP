# 🌌 ZodiApp — Consegna

## 📅 Scadenza

**25 agosto 2025**

---

## 🎯 Obiettivo

Crea un’app React con i 12 segni zodiacali.

---

## 🔹 Funzionalità richieste

### 1. Pagina Home (`/`)

- Mostra il **tuo segno zodiacale**:
  - Se hai un **preferito** salvato → mostra quello.
  - Altrimenti, se hai un **profilo** salvato → mostra il segno calcolato dalla tua data di nascita.
  - Se non c’è nulla → mostra un messaggio e un pulsante per andare a creare il profilo.
- Nella scheda del segno devono esserci:
  - Nome, simbolo, date
  - Elemento, modalità, pianeta
  - 3 tratti positivi e 3 negativi
  - Compatibilità alta e bassa
- Pulsante per **impostare/rimuovere come preferito**.

---

### 2. Pagina Profilo (`/profile`)

- Form con:
  - Nome
  - Data di nascita
- Quando salvi:
  - Calcola il **segno** in base alla data (usando il dataset).
  - Salva in `localStorage` il nome, la data e il segno.
- Dopo il salvataggio, in Home deve essere visibile il segno calcolato.

---

### 3. Pagina Compatibilità (`/compatibility`)

- Seleziona **due segni**.
- Mostra:
  - Lista dei segni compatibili (alta affinità)
  - Lista dei segni poco compatibili
- I dati vengono presi dal dataset.

---

### 4. Pagina Segni (`/signs`)

- Mostra tutti i segni con le loro informazioni.
- Aggiungi filtri per:
  - Elemento (Fuoco, Terra, Aria, Acqua)
  - Modalità (Cardinale, Fisso, Mutable)

---

### 5. Tema

- Aggiungi pulsante per cambiare tema chiaro/scuro.
- Salva la scelta in `localStorage`.

---

## 🎨 Styling

- Lo **stile è a piacere**, ma deve essere:
  - Coerente e leggibile in tutte le pagine.
  - Compatibile con **tema chiaro e scuro**.
  - Con colori, font e spaziature curate.
- Puoi usare:
  - CSS puro
  - Librerie come Tailwind CSS, Bootstrap, Daisy UI ecc…
- Bonus se aggiungi:
  - Effetti hover
  - Transizioni morbide per il cambio tema
  - Icone decorative (ad es. per elementi e pianeti)
  - Layout responsive per mobile e desktop

---

## 🔹 Requisiti tecnici

- React + React Router DOM
- Stato con `useState` e `useEffect`
- Context API per il tema (e opzionalmente per il profilo)
- Nessun `fetch`: tutti i dati arrivano dal file `signs.json`
- Salvataggio dati e preferenze in `localStorage`

---

## 💾 Dati da salvare in `localStorage`

- `zodiapp.profile` → nome, data, segno
- `zodiapp.favoriteSign` → slug del segno preferito
- `zodiapp.compatibility.lastPair` → ultima coppia consultata
- `zodiapp.theme` → "light" o "dark"

---

## 📦 Consegna

- Progetto React funzionante in una repo con branch main e develop
- Un `README.md` con:
  - Istruzioni per utilizzo
  - Breve descrizione delle funzionalità

---

## 📚 Dataset

Usa il file `signs.json` con le informazioni di tutti i 12 segni:

- Nome italiano e inglese
- Simbolo
- Date di inizio e fine
- Elemento
- Modalità
- Pianeta
- 3 tratti positivi
- 3 tratti negativi
- Compatibilità alta (array di slug)
- Compatibilità bassa (array di slug)
