require('dotenv').config();

const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , controller = require('./controller')


const app = express();
app.use(bodyParser.json());
app.use(cors());
// app.use(express.static(`${__dirname}/../public/public`));
const port = process.env.PORT

app.get('/api/shelf/:id', controller.shelf);

app.get('/api/bin/:id', controller.bin);

app.put('/api/bin/:id', controller.updateBin);

app.delete('api/bin/:id', controller.deleteBin);

app.post('/api/bin/:id', controller.addBin);




massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.get('db').init.seed_file().then(responce => {
        console.log(responce)
    })
})
        app.listen(port,() => {
            console.log(`wubulubadubdub on port ${port}.`)
        })