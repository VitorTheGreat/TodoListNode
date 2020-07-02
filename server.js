const express = require('express');
const mongoose = require('mongoose');
const Task = require('./api/models/todoListModel');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;


// mongoose instance connection, url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', { useNewUrlParser: true, useUnifiedTopology: true, });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

app.use((req, res) =>  {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);