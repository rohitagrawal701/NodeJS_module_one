var express=require('express');
var app=express();

app.get('/',function(request,response){
  response.sendFile(__dirname+'/index.html');
});

app.get('/api/get',function(request,response){
  response.write("<h1> Hello "+request.query.firstname+" "+request.query.lastname+"</h1>");
  response.send();
});

var port = process.env.PORT || 8081;

var server=app.listen(port,function(req,res){
    console.log("Server started at port "+port);
});
