//calls express

var express = require('express');

var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//allows express to access html File
app.get('/test.html', function(req, res) {
    res.sendFile(__dirname + "/" + "test.html");
});


//rout Get request to path
//these correspond to data in the html file for the form input. req.query.<name-of-input>

app.post('/process_get', function(req, res){
  response = {
      username : req.body.first_name,
      password: req.body.last_name,
      gender : req.body.gender
  };

console.log (response);

res.end(JSON.stringify(response));
});

//listins to local port, calls the function to generate JSON string (I think)

var server = app.listen(8080, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
