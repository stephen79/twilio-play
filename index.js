const express = require('express');
const bodyParser = require('body-parser')
const port = process.env.PORT || 80 ;
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const PUSH_CREDENTIAL_SID = 'CR2c78398de699a12c14e03ea8fba49d3b';

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/', (req, res) => res.send('Hello World!'))
// POST method route
app.post('/makecall', function (req, res) {
  const twiml = new VoiceResponse();
  if (req.body.To) {
     console.log('make call:' + req.body.To);
     var dial;
     if (req.body.To.startsWith('+')) {
         dial = twiml.dial({ callerId: '+13366001792' }, req.body.To);
     }
     else if (req.body.To.startsWith('sip:')) {
        dial = twiml.dial().sip(req.body.To);
     }
     else {
        dial = twiml.dial().client(undefined, req.body.To);
     }
  }
  else {
     twiml.say('Thanks for calling!');
  }
  res.set('Content-Type', 'text/xml');
  res.send(twiml.toString());
})

