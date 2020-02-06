const express = require('express');
const bodyParser = require('body-parser')
const port = process.env.PORT || 80 ; 
const VoiceResponse = require('twilio').twiml.VoiceResponse;

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/', (req, res) => res.send('Hello World!'))
// POST method route
app.post('/makecall', function (req, res) {
  const twiml = new VoiceResponse();
  if (req.body.To) {
     const dial = twiml.dial({ callerId: '+13366001792' });
     dial.number(req.body.To);
     console.log('make call:' + req.body.To);
  }
  else {
     twiml.say('Thanks for calling!');
  }
  res.set('Content-Type', 'text/xml');
  res.send(twiml.toString());
})

