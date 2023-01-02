const express=require('express');
var app=express();
var path=require('path');
var fs=require('fs');

//server configuration
//app.use(express.static(path.join(__dirname+'public')));



app.get('/',(req,res)=>{
    console.log("Home Page");   
     res.sendFile('public/index.html',{root:__dirname});
    
})

app.get('/home',(req,res) =>{
    // console.log("Calling rest api");
    // var person={firstname:'Dhruva',lastname:'Kumar',age:25,address:'Gurugram'};
    // res.send(person);
    res.sendFile('public/prod.html',{root:__dirname});
    
})

var server=app.listen(3000,function(){
    var host=server.address().address
    var port=server.address().address
    console.log("Server is listening on port 3000",host,port);

})