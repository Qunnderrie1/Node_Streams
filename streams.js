const { Console } = require("console");
const { FILE } = require("dns");
const fs = require("fs");
const http = require("http");
const path = require("path");


http.createServer((req, res) => {
    const {url , method} = req;
    const chunks = [];

    if(url == "/" && method == "GET"){
      const readStream =  fs.createReadStream(path.join(__dirname , "/index.html"));
      readStream.pipe(res)
    }else{
        res.writeHead(404 , {"Content-Type" : "text/html"});
        res.write("<h1>404 Page Not Found!</h1>");
        res.end();
    }
    

})
.listen(3000, () =>{
    console.log("Server is running on port 3000.")
})