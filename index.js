const express = require('express')
const app = express();
const path = require('path')
const cors = require('cors');
const morgan = require('morgan')

app.use(express.static('Models'))
app.use(cors());
app.use(morgan());
app.use(express.json());


app.get('/', (req, res, next) => {
  res.send("hi")
})


app.listen(5000, () => {
  console.log("listening");
  
})