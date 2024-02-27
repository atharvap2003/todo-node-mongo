const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require('dotenv').config();


const routes = require('./routes/ToDoRoute');

const app = express();
const PORT = process.env.port || 5000;


mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=> console.log("Connected To MongoDB "))
    .catch((err)=> console.log("MongoDB Error :" ,err));

app.use(express.json());//toparse the data::
app.use(cors());

app.use(routes);

app.listen(PORT, ()=> console.log(`Listening on :  ${PORT}`));