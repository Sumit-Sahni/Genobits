const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const divisionSchema = new Schema({

  Name: {
        type: String,
        required: true,   
    },

    incharge: {
        type: String,
        required: true,    
    },

    inchargeEmail:{
        type: String,
        required: true,
    },

    totalEmployee:{
        type:Number,
        required: true,
          
    }
   
});

const Div = mongoose.model('Div', divisionSchema);

module.exports = Div;