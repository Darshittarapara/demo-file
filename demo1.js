






var http=require("http")
http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html"})
    res.end("welcome to node js" + "<br>"+ "good afternoon")
}).listen(555)




var http=require("http")
var a=23
var b=54
var total=a+b
var response= "A value is:- "+a+"<br>B value is:-"+b+ "<br>total:-"+total 
http.createServer(function(req,res){
    //GIVE FILE TYPE
    res.writeHead(200 ,{'content-type' :'text/html'});
    res.end(response)
}).listen(444)//port Number
document.write("<br>")



var http=require("http")
var a=23
var b=54
var total=a+b
var response= "A value is:- "+a+"<br>B value is:-"+b+ "<br>total:-"+total 
http.createServer(function(req,res){
    res.writeHead(200 ,{'content-type' :'text/html'});
    res.end(response)
}).listen(444) 


const fs=require("fs"); //File Handling Modulus
const path=require("path");

//create dir
fs.mkdir(path.join(__dirname,'demo'),(err)=>{
    if (err){
        return console.error(err);
    }
    console.log("Directory created successfully!!!!!")
})
//create file
fs.writeFile('demo/test.txt', 'Hellow!!',function(err){
if (err) throw err;
console.log('File Created');
})
//add new contain
fs.appendFile('demo/test.txt', 'Hellow!! good afternoon',function(err){
    if (err) throw err;
    console.log('File updated');
    });
    //rename file 
    fs.rename('demo/test.txt', 'Hellow!!',function(err){
        if (err) throw err;
        console.log('File Renamedd');
        });
        //delect file
fs.unlink('Hellow!!',function(err,file){
    if(err) throw  err
    console.log('file successfully delect')
})



