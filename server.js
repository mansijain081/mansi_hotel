const express = require('express');
const app = express();
const db =  require('./db');


const bodyParser = require('body-parser');
app.use(bodyParser.json());

//import the router
const PersonRoutes = require('./routes/personrouts');
const MenuRoutes = require('./routes/menuItems');

//use the router

app.use('/menu', MenuRoutes);
app.use('/person', PersonRoutes);


app.get('/',  (req,res) => {
    res.send('welcome to my hotel mansi')
})






app.listen(3000, () => {
    console.log('Server is running on port 3000');
})