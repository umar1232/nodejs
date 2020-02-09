//console.log('index.js executing');

const express = require('express');
var app = express();
//var router = require('./routes/hello.js');

/*router.get('/',function(req,res){
	res.send('Hello, World!');
});

router.post('/',function(req,res){
	res.sendStatus(405);
});*/

app.use(require('./routes/hello'));

//router();

var port = 3000;
app.listen(port,function(){
	console.log('Listening on port ' + port);
});
