console.log("web Serverni Boshlash");
const express = require("express");
const app = express();
const http = require("http");


//1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2 Sesion code

//3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4 Routing code
app.get("/hello", function(req, res) {
    res.end("Hello World");
});

app.get("/gift", function(req, res) {
    res.end("Siz sovgalar bolimidasiz");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The sever is running successfully on port: ${PORT}`);
});
