//calls express

const express = require('express');

const app = express();

//allows express to access html File
app.get('/test.html', function(req, res) {
    res.sendFile(__dirname + "/" + "test.html");
});


//rout Get request to path
//these correspond to data in the html file for the form input. req.query.<name-of-input>

app.get('/process_get', function(req, res){
  response = {
      first_name : req.query.first_name,
      last_name : req.query.Last_name,
      gender : req.query.gender
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
