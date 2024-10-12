const express = require('express');
const router = express.Router();
const veteranController = require('../controllers/veteranController');

router.post('/veterans', veteranController.createVeteran);
router.get('/veterans', veteranController.getVeterans);

module.exports = router;