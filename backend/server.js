const express =  require('express');
const cors =  require('cors');
const mongoose =  require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors); 
app.use(express.json);


//mongodb connection
const uri = process.env.ATLAS_URI;  
mongoose.connect(uri);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log("MongoDb database connection is established.");
})

app.listen(port, ()=>{
    console.log(`Server is running in port: ${port}`); 
})

