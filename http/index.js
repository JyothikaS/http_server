var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
    res.setHeader("content-type","application-json")
    res.writeHead(200)
    fs.readFile(__dirname+'/movies.json','utf-8',(err, data)=>{
        if(err){
           console.log("error")
           return;
        }
        res.end(data)
       })
}
).listen(3000, () =>{
    console.log("server is running on port 3000")
})
//http.createServer()