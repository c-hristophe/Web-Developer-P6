const express = require('express');

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://christophe:aqwzsx123@cluster0.1a5sp3i.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

