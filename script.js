import { API_KEY } from './config.js';

fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=8.8.8.8`)
  .then(response => response.json())
  .then(data => {
    // Traitement des données récupérées
    console.log(data);
  })
  .catch(error => {
    console.error('Erreur lors de la requête', error);
  });