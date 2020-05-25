const express = require('express')
const app = express()
const mongoose = require('../database/index')
const routes = require('../routes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)

require('../controllers/SessionController')(app);
require("../controllers/UserController")(app);

app.listen(3000, () => {
    console.log('Aplicação funcionando')
});