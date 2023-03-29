require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Ler JSON / Middlewares
app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

//rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

// link com o banco
const DB_USER = process.env.DB_USER 
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.z22cyam.mongodb.net/bancodaapi?retryWrites=true&w=majority`)
.then(() => {
    console.log("funcionou")
    app.listen(3000)
})
.catch((err) => {
    console.log(err)
})
