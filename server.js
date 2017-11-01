const express = require('express');
const bodyParser = require('body-parser');
const app = module.exports = express();
const email = require('emailjs/email');
const path = require('path');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/dist', 'index.html'))
});

app.post('/sendmail', (req, res) => {
  var server = email.server.connect({user: "ac12491@gmail.com", password: "W0rkhard!", host: "smtp.gmail.com", port: 465, ssl: true});
  console.log('email server connected');
  console.log(req.body);
  // send the message and get a callback with an error or details of the message that was sent
  server.send({
    text: req.body.message,
    from: req.body.email,
    to: 'ac12491@gmail.com',
    subject: "Capstone request for info"
  }, function(err, message) {
    if (err)
      console.log(err);
    else
      res.json({success: true, msg: 'sent'});
    }
  );
});

app.listen(4200, () => {
  console.log("Successfully listening on : 4200")
})
