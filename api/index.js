const express = require('express');
const serverless = require('serverless-http');

const app = express();

// Route de test
app.get('/test', (req, res) => {
  res.send("Endpoint test OK");
});

// Si tu veux aussi un endpoint POST pour /chat
app.post('/chat', (req, res) => {
  res.json({ response: "Réponse test" });
});

module.exports = serverless(app);
