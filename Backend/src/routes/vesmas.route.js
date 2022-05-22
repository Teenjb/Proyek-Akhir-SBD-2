const express = require('express');
const router = express.Router();
const vesmasController = require('../controllers/vesmas.controller');

router.get('/login', vesmasController.login);

router.post('/register', vesmasController.register);



/*----------admin----------------*/
router.post('/sparepart', vesmasController.add_sparepart);

router.get('/sparepart', vesmasController.getById_sparepart);

router.post('/kendaraan', vesmasController.add_vehicle);

router.put('/sparepart', vesmasController.edit_sparepart);

module.exports = router;