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
     Slot.findByPk(slotId)
         .then(slot => {
            if(slot.slotsAvailable > 0){
            slot.slotsAvailable = slot.slotsAvailable - 1;
            slot.save()
                .then(updatedSlot => {
                    res.json(updatedSlot);
                })
                .catch(err => console.log(err));
            }else{
             res.json(slot);
            } 
         })
         .catch(err => console.log(err));
}

exports.cancelSlot = (req, res, next) =>{
     const slotId = req.params.slotId;
     Slot.findByPk(slotId)
         .then(slot => {
            slot.slotsAvailable = slot.slotsAvailable + 1;
            slot.save()
                .then(updatedSlot => {
                    res.json(updatedSlot);
                })
                .catch(err => console.log(err))
            res.json(slot);
         })
         .catch(err => console.log(err));
}