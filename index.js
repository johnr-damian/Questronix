var mysql = require("mysql");
var express = require("express");

let application = express();

let connection = mysql.createConnection({
    host: "localhost",
    user: "rootnodejs",
    password: "1234",
    database: "inventory"
});

connection.connect((error) => {
    if(error)
        console.log(error);
    else
        console.log("Success Connection");
});
connection.query("CALL `ShowItems`(?)", ["-1"], (error, results, fields) => {
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
    }
});

application.get("/", (request, response) => {
    response.send("Hello World!");
});

application.get("/items", (request, response) => {
    connection.query("CALL `ShowItems`(?)", ["-1"], (error, results, fields) => {
        if(error)
        {
            response.send(error);
        }
        else
        {
            response.send(results);
        }

        connection.end();
    });
});

application.listen(3000);