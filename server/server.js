require('dotenv').config()

const express = require("express");
const routes = require('./routes/routes');
const mongoose = require('mongoose')

// express app
const app = express();

// middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

// routes
app.use('/api',routes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for request
    app.listen(process.env.PORT, () => {
      console.log('Listening to port 4000')
    })
  })
  .catch((error) => {
    console.log(`Error : ${error}`)
  })
