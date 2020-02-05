const express = require('express');
const app = express();
const port = process.env.PORT || 80 ; 

app.configure(function(){
  app.use(express.bodyParser());
  app.use(app.router);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/', (req, res) => res.send('Hello World!'))
// POST method route
app.post('/makecall', function (req, res) {
  if (req.body.To) {
     console.log('make call:' + req.body.To);
  }
  res.send('POST request')
})

