const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const sequelize = require('./util/database');
const Slot = require('./model/slot')

const app = express();
app.use(cors());

const slotRoutes = require('./routes/slots');

app.use(bodyParser.json({extended: false}));

app.use(slotRoutes);

sequelize
 .sync()
  .then(result =>{
    return Slot.findByPk(1);
  })
  .then(slot =>{
    if(!slot){
        Slot.create({ time: '10:00:00', slotsAvailable:'4'});
        Slot.create({ time: '12:00:00', slotsAvailable:'4'});
        Slot.create({ time: '14:00:00', slotsAvailable:'4'});
        Slot.create({ time: '18:00:00', slotsAvailable:'4'});
        app.listen(3000);
    }
    else{
        app.listen(3000);
    }
  })
  .catch(err => console.log(err));