var express = require('express');
var app = express();

app.get('/hello/:name', function (req, res) {
    var json = JSON.stringify({ 
        hello: req.params.name
      });
  res.send(json);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
