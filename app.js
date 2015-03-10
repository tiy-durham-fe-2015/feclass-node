var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    friends = [{
      name: 'Matt',
      gender: 'm'
    }, {
      name: 'Sally',
      gender: 'f'
    }];

// Allow JSON posts/puts
app.use(bodyParser.json());

// Specify src as the place where public files are found
app.use(express.static(__dirname + '/src'));
app.use('/dist', express.static(__dirname + '/dist'));

// Add a route, so when you HTTP request GET /api/friends, this route
// will run.
// req = the request (incoming data from the client)
// res = the response (outgoing data to the client)
app.get('/api/friends', function (req, res) {
  res.json(friends);
});

app.post('/api/friends', function (req, res) {
  friends.push(req.body);
  res.json(req.body);
});

// Start the server
var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address,
      port = server.address().port;

  console.log('Feclass listening at http://%s:%s', host, port);
});
