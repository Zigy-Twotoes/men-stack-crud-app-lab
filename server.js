const express = require('express');
const app = express();
const memberController = require('./controllers/memberController.js')
require('./db/connection.js');
const methodOverride = require('method-override')



app.listen(3000, () => {
    console.log('up on 3000')
})

// Middleware

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


// Controllers

app.use(memberController)



