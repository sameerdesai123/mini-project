const express = require('express')
const app = express();
const path = require('path')
const cors = require('cors');
const morgan = require('morgan')
const mustacheExpress = require('mustache-express');

port = process.env.PORT || 5000;
app.use(express.static('Static'))
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.engine('html', mustacheExpress(path.join(__dirname , '/views') + '/partials', '.html'));  // register file extension mustache
app.set('view engine', 'html');                 // register file extension for partials
app.set('views', path.join(__dirname , '/views'));


app.get('/', (req, res, next) => {
  res.render('home', {});
})

app.get('/download', function(req, res){
  const file = `${__dirname}/Static/Model/model.json`;
  res.download(file); // Set disposition and send it.
});

app.listen(port, () => {
  console.log(`listening at port : ${port}`);
})
