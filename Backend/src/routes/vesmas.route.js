const express = require('express');
const router = express.Router();
const vesmasController = require('../controllers/vesmas.controller');

router.get('/login', vesmasController.login);

router.post('/register', vesmasController.register);

router.get('/servicerecord', vesmasController.getByVIN_serviceRecord);

router.get('/uservehicle', vesmasController.getByVIN_vehicle);

router.post('/uservin', vesmasController.add_userVIN);

/*----------admin----------------*/
router.post('/sparepart', vesmasController.add_sparepart);

router.get('/sparepart', vesmasController.get_sparepart);

router.post('/kendaraan', vesmasController.add_vehicle);

router.put('/sparepart', vesmasController.edit_sparepart);

router.delete('/sparepart', vesmasController.delete_sparepart);

router.get('/homeadmin', vesmasController.get_vehicle);

router.post('/servicerecord', vesmasController.add_serviceRecord);

router.post('/sparepartandservicerecord', vesmasController.add_sparePart_serviceRecord);

module.exports = router;