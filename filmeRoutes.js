const express = require('express');
const router = express.Router();
const filmeController = require('../controllers/filmeController');

router.post('/', filmeController.create);
router.get('/', filmeController.getAll);
router.get('/:id', filmeController.getById);
router.put('/:id', filmeController.update);
router.delete('/:id', filmeController.delete);

module.exports = router;