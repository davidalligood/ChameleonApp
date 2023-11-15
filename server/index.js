// To run server, run these commands in the terminal:
// cd server
// nodemon index.js

const express = require('express');
const twilio = require('twilio');

const accountSid = 'AC116f738915795ffc81dd458bc13f1787';
const authToken = 'f3851d83b6c469d35a5c9f0169cfb943';
const client = twilio(accountSid, authToken);

const app = express();

// Welcome page

app.get('/', (req, res) => {
  res.send('It me first server!!!!!!! uwu');
});

app.get('/send-text', (req, res) => {
  const {recipient, textmessage} = req.query;

  client.messages
    .create({
      body: textmessage,
      to: recipient,
      from: '+14433983124',
    })
    .then(message => res.send(message).end())
    .catch(e => res.send(e).end());
});

const port = process.env.PORT || 4000;

// port used to be 4000
app.listen(process.env.PORT || 4000, () =>
  console.log(`Running on port ${port}`),
);
