var mysql = require("mysql");

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

connection.end();