const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Ścieżka do folderu zawierającego pliki statyczne (HTML, CSS, JS)
const publicDirectoryPath = 'D:/PROGRAMING LANGUAGES AND DATABASES/MDRS_website_github.io';

// Serwowanie plików statycznych
app.use(express.static(publicDirectoryPath));

// Nasłuchiwanie na określonym porcie
app.listen(port, () => {
  console.log(`Aplikacja jest dostępna pod adresem http://localhost:${port}`);
});
