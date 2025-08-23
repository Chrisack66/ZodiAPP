export const calcSign = (date, signs) => {
  const [year, month, day] = date.split("-").map(Number); // Dividiamo la data nel formato "anno-mese-giorno"

  // Cicliamo tutti i segni zodiacali
  for (let sign of signs) {
    // Prendiamo giorno e mese di inizio e fine del segno
    let [startM, startD] = sign.dates.start.split("-").map(Number);
    let [endM, endD] = sign.dates.end.split("-").map(Number);

    // Controllo del segno in base alla data
    if (
      (month === startM && day >= startD) || // Controlla se il mese e il giorno della nascita sono uguali o successivi al giorno di inizio del segno
      (month === endM && day <= endD) || // Controlla se il mese e il giorno della nascita sono uguali o precedenti al giorno di fine del segno
      (startM > endM && (month > startM || month < endM)) // Gestisce i segni che attraversano l'anno nuovo, confrontando se il mese di nascita è dopo l'inizio o prima della fine del segno
    ) {
      return sign.slug;
    }
  }

  return null;
};
