var express = require('express');
var path = require('path');
var app = express();
var port; 

app.configure(function () {
    app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', function(req, res){
  res.sendfile('index.html');
});

if (app.get('env')){
	port = process.env.PORT;
}

app.listen(port || 3000);
