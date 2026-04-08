const Filme = require('../models/Filme');

module.exports = {
    
    async create(req, res) {
        try {
            const filme = await Filme.create(req.body);
            res.status(201).json(filme);
        } catch (err) {
            res.status(400).json({ erro: err.message });
        }
    },

    
    async getAll(req, res) {
        try {
            const { genero, oscar } = req.query;
            let filtro = { isActive: true }; 

            if (genero) filtro.genero = genero; 
            if (oscar) filtro.venceuOscar = oscar === 'true';

            const filmes = await Filme.find(filtro).populate('amigoId');
            res.status(200).json(filmes);
        } catch (err) {
            res.status(500).json({ erro: err.message });
        }
    },

    
    async getById(req, res) {
        try {
            const filme = await Filme.findOne({ _id: req.params.id, isActive: true });
            if (!filme) return res.status(404).json({ mensagem: "Filme não encontrado" });
            res.json(filme);
        } catch (err) {
            res.status(400).json({ erro: "ID Inválido" });
        }
    },

    
    async update(req, res) {
        try {
            const filme = await Filme.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(filme);
        } catch (err) {
            res.status(400).json({ erro: err.message });
        }
    },

    
    async delete(req, res) {
        try {
            const filme = await Filme.findByIdAndUpdate(
                req.params.id, 
                { isActive: false }, 
                { new: true }
            );
            if (!filme) return res.status(404).json({ mensagem: "Filme não encontrado" });
            res.json({ mensagem: "Filme movido para a lixeira (desativado)" });
        } catch (err) {
            res.status(500).json({ erro: err.message });
        }
    }
};