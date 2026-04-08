const mongoose = require('mongoose');

const FilmeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    anoLancamento: { 
        type: Number, 
        required: true,
        
        min: [1895, 'O cinema ainda não existia nessa época!'] 
    },
    genero: { type: String, required: true },
    venceuOscar: { type: Boolean, default: false },
    amigoId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Amigo', 
        required: true 
    },
    isActive: { type: Boolean, default: true } 
});

module.exports = mongoose.model('Filme', FilmeSchema);