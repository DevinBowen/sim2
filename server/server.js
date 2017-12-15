require('dotenv').config();

const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')


const app = express();
const port = process.env.PORT

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.get('db').init.seed_file().then(responce => {
        console.log(responce)
    })
    app.listen(() => {
        console.log(`wubulubadubdub on port ${port}.`)
    })
})