const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

//  <!All Imported File >
const connectDB = require('./config/db');
const Division = require('./models/ShopModel')

dotenv.config();
connectDB();
app.use(express.json());

app.use(cors({
    
}));



app.post('/create', async(req, res) => {
    const {  DivisionName,  Incharge, InchargeEmail, TotalEmployee} = req.body

    const division = await Division.create({
        divisionName: DivisionName,
        incharge:Incharge,
        inchargeEmail:InchargeEmail,
        totalEmployee:TotalEmployee
   });

   console.log(division);
   res.send(division);
})

app.get('/alldivision',async(req, res) => {
    const data = await Division.find();
     console.log({data});  
     res.send(data);  

})


// _________________________________Deployment to Heroku________________________________________
__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
     app.use(express.static(path.join(__dirname, "/client/build")));
      app.get("*", (req, res)=>{
          res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
      });

}else{

  app.get('/', (req, res) => {
res.send("API is running");
  });
}




const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log('Server is running on port 9000');
})