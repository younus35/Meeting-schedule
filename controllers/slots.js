const Slot = require('../model/slot');

exports.getSlots = (req, res, next) =>{
    Slot.findAll()
      .then(slots =>{
        res.json(slots);
      })
      .catch(err => console.log(err));
}

exports.bookSlot = (req, res, next) =>{
     const slotId = req.params.slotId;
}

exports.cancelSlot = (req, res, next) =>{
     const slotId = req.params.slotId;
}