const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');
const Adding = require("./routes/addingRoutes")

//  <!All Imported File >
const connectDB = require('./config/db');
dotenv.config();
connectDB();
app.use(express.json());

app.use(cors({
    
}));


app.use(bodyParser.urlencoded({ extended: false })); 
app.use('/public', express.static(path.join(__dirname, 'public')));


app.use("/api", Adding);



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
    console.log('Server is running on port 5000');
})