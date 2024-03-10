const express = require('express');

const userController = require('../controllers/slots');

const router = express.Router();

router.get('/get-slots', userController.getSlots);

router.patch('/book-slot/:slotId', userController.bookSlot);

router.patch('/cancel-slot/:slotId', userController.cancelSlot);

module.exports = router