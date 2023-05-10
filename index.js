const express = require('express');
const app = express();

// Port, na którym serwer będzie nasłuchiwał połączeń
const port = 5000;

// Funkcja obsługująca połączenia HTTP
app.get('/', (req, res) => {
  // Adres IP klienta
  const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  // Data i godzina w strefie czasowej klienta
  const clientDate = new Date().toLocaleString('pl-PL', {
    timeZone: 'Europe/Warsaw'
  });

  // Wyświetlanie strony z informacją o adresie IP i dacie/godzinie w strefie czasowej klienta
 
  const message = `Adres IP: ${clientIp}  Data i godzina w strefie czasowej Polski: ${clientDate} Autor: Sofiia Hnidan`;
  res.send(message);
  
});

// Funkcja wywoływana po uruchomieniu kontenera
app.listen(port, () => {
  // Data uruchomienia
  const serverStartDate = new Date().toLocaleString('pl-PL', {
    timeZone: 'Europe/Warsaw'
  });

  // Wyświetlanie informacji o uruchomieniu serwera w logach
  console.log(`Serwer uruchomiony. Data uruchomienia: ${serverStartDate}. Autor: Sofiia Hnidan. Port: ${port}`);
});
