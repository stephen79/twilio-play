const express = require('express');
const app = express();
const port = process.env.PORT || 80 ; 
app.get('/', (req, res) => res.send('Hello World!'))
// POST method route
app.post('/makecall', function (req, res) {
  console.log(`make call ${req}!`)
  console.log(req.body);
  res.send('POST request')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
