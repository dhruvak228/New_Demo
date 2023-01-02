const express=require('express');
var app=express();
var path=require('path');
var fs=require('fs');

//server configuration
app.use(express.static(path.join(__dirname+'public')));



app.get('/',function (req,res) {
    console.log("Home Page");
    res.sendFile(path.join(__dirname+'/index.html'));
    
})

app.get('/data',function (req,res) {
    console.log("Calling rest api");
    var person={firstname:'Dhruva',lastname:'Kumar',age:25,address:'Gurugram'};
    res.send(person);
    
})

var server=app.listen(3000,function(){
    var host=server.address().address
    var port=server.address().address
    Console.log("Server is listening on port 3000",host,port);

})