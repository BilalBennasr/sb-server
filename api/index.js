const express = require('express');
const serverless = require('serverless-http');
const app = express();

// Exemple d'endpoint GET simple pour tester
app.get('/test', (req, res) => {
  res.send("Endpoint test OK");
});

// Exemple d'endpoint POST pour /chat
app.post('/chat', (req, res) => {
  res.json({ response: "Réponse test" });
});

module.exports = serverless(app);