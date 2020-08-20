var mysql = require("mysql");
var express = require("express");

let application = express();
application.set("view engine", "ejs");

application.get("/", (request, response) => {
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
            response.send(error);
        }
        else
        {
            console.log(fields);
            console.log(results);
            console.log(results[0]);
            response.render("index", {
                metadata: fields[0],
                items: results[0]
            });
        }

        connection.end();
    });
});

application.listen(3000);