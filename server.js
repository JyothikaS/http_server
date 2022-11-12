const http = require('http')

const server = http.createServer(function (req,res){
    if(req.url == "/"){
            res.write("<h1>landing page</h1>")
            res.end();
    }
    if(req.url == "/about"){
        res.write("<h1>second page</h1>")
        res.end();
}
})


server.listen(5000,function(){
console.log("server has successfully started at http://localhost:5000")
})