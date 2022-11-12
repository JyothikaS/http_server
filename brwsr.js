const http = require('https');
http.get('https://reqres.in/api/users', (res) =>{
    var content = '';
    res.on('data', (data) =>{
    content += data;
    });
    res.on('end', ()=>{
    console.log(content);
    });
});