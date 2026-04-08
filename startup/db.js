const mongoose = require('mongoose');

module.exports = function() {
    
    mongoose.connect('mongodb://localhost:27017/cine_db')
        .then(() => console.log(' Conectado ao MongoDB (CineDB)...'))
        .catch(err => console.error(' Erro ao conectar ao MongoDB:', err));
}