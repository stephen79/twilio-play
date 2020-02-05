const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 80 ; 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/', (req, res) => res.send('Hello World!'))
// POST method route
app.post('/makecall', function (req, res) {
  if (req.body.To) {
     console.log('make call:' + req.body.To);
  }
  res.send('POST request')
})

