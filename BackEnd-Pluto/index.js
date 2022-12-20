const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
app.use(express.json());
app.use(cors());
const dbConn = require('./database')
dbConn();
const Routes = require('./routes/routes');
const path = require('path');
const { db } = require('./models/usersModel');

app.use(
    cors({
      origin:"http://localhost:5000/",
      methods:"GET,POST,PUT,PATCH,DELETE",
      credentials:true  
    })
  )
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    
    next();
    }); 
 
app.use("/api",Routes);

app.get('/', (req, res) => {
 return  res.send('Nimic din / nimic')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
