const express = require('express');
var cors = require('cors');
const path = require('path');

const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Error handling
app.use(function(err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    // Send the error rather than to show it on the console
    res.status(401).send(err);
  } else {
    next(err);
  }
});

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI ||
    'mongodb://mongodb://hannahc:HelloWorld1!@ds153980.mlab.com:53980/heroku_h7gjdgph:HelloWorld1!@ds113606.mlab.com:13606/heroku_shq50hf0'
);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); //relative path
  });
}

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
