const asyncHandler = require("express-async-handler");
const Div  = require('../models/DivisionModel')

const register = asyncHandler(async(req, res)=>{

    const division = await Div.create({
        divname: req.body.divisionName,
        incharge: req.body.incharge,
        inchargeEmail: req.body.inchargeEmail,
        totalEmployee: req.body.totalEmployee,
   });
    
   if(division){
     res.status(201).json({
        divisionName: divname,
        incharge:incharge,
        inchargeEmail:inchargeEmail,
        totalEmployee:iotalEmployee
     })
   }else{
    res.status(400);
    throw new Error("Error Occured");
   }
})

module.exports = register;