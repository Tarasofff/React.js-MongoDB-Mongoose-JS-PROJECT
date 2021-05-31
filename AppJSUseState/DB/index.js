const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { createServer } = require('http');
const cors = require('cors');
const colors = require('colors/safe');

const keys = require('./components/key');
const corsOptions = require('./components/cors_options');
const DataController = require('./components/Controller/dataController');

const app = express();
const PORT = 5000;

//Mongoose connect
mongoose.connect(keys.mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
.then(() => console.log(colors.yellow('MongoDB connected!')))
.catch(err => console.log(colors.red("MongoDB error: "), err))

//Use options
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

//POST data
app.post('/post', (req, res) => {
    DataController.postData(req.body, res)
});

//GET data
app.get('/get', (req, res) => {
    DataController.getData(req, res)
})

//DELETE data
app.delete('/delete', (req, res) => {
    DataController.deleteData(req.body, res)
})

//PUT data
app.put('/update', (req, res) => {
    DataController.updateData(req.body, res)
})

// DataController.getAllData

//Creating server
createServer(app).listen(PORT, () => console.log(colors.bold(`Server run on PORT: ${PORT}`)));



