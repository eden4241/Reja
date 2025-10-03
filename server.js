const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://kodirov:C8nM_8egj.8kK5t@cluster0.wuwmxtp.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed"); 
      module.exports = client;
      

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3012;
      server.listen(PORT, function () {
        console.log(
          `The sever is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
