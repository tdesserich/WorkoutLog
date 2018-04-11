require('dotenv').config();

var express = require('express');
var app = express ();
var user = require('./controllers/usercontroller');
var log = require('./controllers/logcontroller');
var login = require('./controllers/usercontroller');
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync(); 

app.use(bodyParser.json());
app.use(require('./middleware/headers'));

app.use('/api/user', user);
app.use('/api/login', login);

app.use(require('./middleware/validate-session')); 
app.use('/api/log', log);

app.listen(3000, function() {
    console.log('App is listening on 3000.')
});


