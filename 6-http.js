const http = require("http")

const server = http.createServer((req,res)=>{
    if (req.url == "/"){
        res.write("<h1>Hi, Welcome to my home page</h1>")
    }
    else if(req.url == "/about"){
        res.write("<h2>We are the small team</h2>")
    }
    else{
        res.end(`<h3> Sorry you hit the rock bottom </h3>
        <a href="/"> Go back to the home page </a>
        `)
    }
    res.end()
    console.log(req.url)
    
    
})
server.listen(8888)