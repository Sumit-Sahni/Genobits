const mongoose = require('mongoose');

const DivisionSchema = mongoose.Schema({

  divisionName: {
        type: String,
        required: true
    },

    incharge: {
        type: String,
        required: true
    },

    inchargeEmail:{
        type: String,
        required: true
    },

    totalEmployee:{
        type:Date,
        
    },
   
})

const Division = mongoose.model('Shop', DivisionSchema);

module.exports =Division;