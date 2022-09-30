const asyncHandler = require("express-async-handler");
const Div  = require('../models/DivisionModel')

const register = asyncHandler(async(req, res)=>{

    const division = await Div.create({
        divName: req.body.DivisionName,
        incharge: req.body.Incharge,
        inchargeEmail: req.body.InchargeEmail,
        totalEmployee: req.body.TotalEmployee,
   });
    
   if(division){
     res.status(201).json({
        divName: division.divName,
        incharge: division.incharge,
        inchargeEmail: division.inchargeEmail,
        totalEmployee: division.totalEmployee
     });
   }else{
    res.status(400);
    throw new Error("Error Occured");
   }
})

const getData = asyncHandler(async(req,res)=>{
   const data  = await Div.find();
   res.send(data);

})


module.exports = {register,getData };