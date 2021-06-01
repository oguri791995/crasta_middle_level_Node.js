
const http = require("http");
const uri = require("url");
const fs = require("fs");
const port = 8000

var DB = require("./views/html_test_crastadesign_2/JS/sqliteDB");
const crastaDB = require("./views/html_test_crastadesign_2/JS/sqliteDB");

const server = http.createServer();

server.on("request", doRequest);
server.listen(port);
console.log("server running");

//リクエストの処理
function doRequest(req,res){
    let url = req.url;
    let html;

    if(req.method === "POST"){
        console.log("POST受信");
        var crastDB = new DB();
        let data = '';
        let inputArray = [];
        req.on('data',function(chunk){
            data += chunk;
        }).on("end",function(){
            let dataArray = data.split("&");
            for(let i = 0; i<dataArray.length; i++){
                let decodedeArray = decodeURIComponent(dataArray[i].split("=")[1])
                inputArray.push(decodedeArray);
            }
            crastDB.masterInsert(inputArray[0],inputArray[1],inputArray[2],inputArray[3],inputArray[4]);    

        })
    }

    // console.log(req)
    switch (url){
        case "/":
            html = "main.html"
            break;
        case "/contact":
            html = "contact.html"
    }

    switchType(req,res,url,getType(url),html);


    
}

function getType(url){
    if(url.indexOf(".") == -1){
        return "/"
    }
    let type = url.split(".");
    // console.log(type[1])
    return type[1];
}

function booleanHTML(url){
    let array = url.split(".");
    if(array[1] == "html"){
        return true;
    }
    return false;
}

function switchType(req,res,url,type,html){
    switch (type){
        case "/" || booleanHTML(url):
            fs.readFile("views/html_test_crastadesign_2/HTML/" + html,"utf-8",function(err,data){
                res.writeHead(200,{"Content-Type":"text/html"});
                res.write(data);
                res.end();
                var crastDB = new DB();
                crastDB.showDB(" select *, max(id) from master;");
            });
            break;
        case "css":
            fs.readFile("views/html_test_crastadesign_2" + url,"utf-8",function(err,data){
                res.writeHead(200,{"Content-Type":"text/css"});
                res.write(data);
                res.end();
            });
            break;
        case "jpg":
            fs.readFile("views/html_test_crastadesign_2" + url,"binary",function(err,data){
                res.writeHead(200,{"Content-Type":"image/jpeg"});
                res.write(data,"binary");
                res.end();
            })
            break;
        case "js":
            fs.readFile("views/html_test_crastadesign_2" + url,'utf-8',function(err,data){
                res.writeHead(200,{"Content-Type":"text/javascript"});
                res.write(data );
                res.end();
            })
            break;
    }

}