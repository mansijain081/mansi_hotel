//this file is used to connect to the database

//1. Import the mongoose library
const mongoose = require('mongoose');

//2.define url for the database connection
const mongoURL = 'mongodb+srv://mansi:eX22GOAcFv3rWGL9@cluster0.n2giy9x.mongodb.net/Manshi_hotel'; // Replace with your MongoDB connection string

//3.establish a connection to the mongodb database using url and some configuration options.. exapmle: useNewUrlParser, useUnifiedTopology
//useNewUrlParser: true - This option allows the use of the new URL string parser.   
// useUnifiedTopology: true - This option enables the new Server Discover and Monitoring engine.
//.this() is used to avoid deprecation warnings in the console.   
//.catch() is used to handle any errors that occur during the connection process.
//.then() is used to execute a callback function when the connection is successful. 

mongoose.connect(mongoURL)
  .then(() => { console.log('MongoDB connected...')})
  .catch(err => {console.error('MongoDB connection error:', err)});

  //4.get the default connection 
  // mangoose maintain default connection object representing the mongodb connection
const db_connector = mongoose.connection;


//5. define event listener for database connection
db_connector.on('connected', () => {
  console.log('MongoDB connected...');
}
);      
db_connector.on('error', (err) => {
  console.error('MongoDB connection error........:', err);
});
db_connector.on('disconnected', () => {
  console.log('MongoDB disconnected...');
}); 


//6. export the database connection
module.exports = db_connector;