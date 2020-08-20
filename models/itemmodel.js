const MYSQL = require("mysql");

//Define Methods
let ITEMMODEL = {};
ITEMMODEL.CreateNewItem = (name, quantity, amount, callback) => {
    let connection = MYSQL.createConnection({
        host: "localhost",
        user: "rootnodejs",
        password: "1234",
        database: "inventory"
    });

    //Connect to Database
    connection.connect((error) => {
        if(error)
        {
            console.log(`An ${error.errno} Error Occured!\n\t${error.code}`);
            return callback(error, null);
        }
        
        console.log("Successful Connection for CreateNewItem!");
    });
    //Query to Database
    connection.query("CALL `CreateNewItem`(?, ?, ?)", [name, quantity, amount], (error, results) => {
        if(error)
        {
            console.log(`An ${error.errno} Error Occured!\n\t${error.code}`);
            return callback(error, null);
        }
        
        console.log("Successful creation of item!");
        callback(null, results);
    });
    //Disconnect to Database
    connection.end((error) => {
        if(error)
        {
            console.log(`An ${error.errno} Error Occured!\n\t${error.code}`);
            return callback(error, null);
        }

        console.log("Successful Disconnection for CreateNewItem!")
    });
};

ITEMMODEL.UpdateExistingItem = (id, name, quantity, amount, callback) => {
    let connection = MYSQL.createConnection({
        host: "localhost",
        user: "rootnodejs",
        password: "1234",
        database: "inventory"
    });

    //Connect to Database
    connection.connect((error) => {
        if(error)
        {
            console.log(`An ${error.errno} Error Occured!\n\t${error.code}`);
            return callback(error, null);
        }
        
        console.log("Successful Connection for UpdateExistingItem!");
    });
    //Query to Database
    connection.query("CALL `UpdateExistingItem`(?, ?, ?, ?)", [id, name, quantity, amount], (error, results) => {
        if(error)
        {
            console.log(`An ${error.errno} Error Occured!\n\t${error.code}`);
            return callback(error, null);
        }
        
        console.log("Successful update of item!");
        callback(null, results);
    });
    //Disconnect to Database
    connection.end((error) => {
        if(error)
        {
            console.log(`An ${error.errno} Error Occured!\n\t${error.code}`);
            return callback(error, null);
        }

        console.log("Successful Disconnection for UpdateExistingItem!")
    });
};

ITEMMODEL.DeleteExistingItem = (id, callback) => {
    let connection = MYSQL.createConnection({
        host: "localhost",
        user: "rootnodejs",
        password: "1234",
        database: "inventory"
    });

    //Connect to Database
    connection.connect((error) => {
        if(error)
        {
            console.log(`An ${error.errno} Error Occured!\n\t${error.code}`);
            return callback(error, null);
        }
        
        console.log("Successful Connection for DeleteExistingItem!");
    });
    //Query to Database
    connection.query("CALL `DeleteExistingItem`(?)", [id], (error, results) => {
        if(error)
        {
            console.log(`An ${error.errno} Error Occured!\n\t${error.code}`);
            return callback(error, null);
        }
        
        console.log("Successful deletion of item!");
        callback(null, results);
    });
    //Disconnect to Database
    connection.end((error) => {
        if(error)
        {
            console.log(`An ${error.errno} Error Occured!\n\t${error.code}`);
            return callback(error, null);
        }

        console.log("Successful Disconnection for DeleteExistingItem!")
    });
};

ITEMMODEL.ShowItems = (id, callback) => {
    let connection = MYSQL.createConnection({
        host: "localhost",
        user: "rootnodejs",
        password: "1234",
        database: "inventory"
    });

    //Connect to Database
    connection.connect((error) => {
        if(error)
        {
            console.log(`An ${error.errno} Error Occured!\n\t${error.code}`);
            return callback(error, null);
        }
        
        console.log("Successful Connection for ShowItems!");
    });
    //Query to Database
    connection.query("CALL `ShowItems`(?)", [id], (error, results) => {
        if(error)
        {
            console.log(`An ${error.errno} Error Occured!\n\t${error.code}`);
            return callback(error, null);
        }
        
        console.log("Successful retrieval of item(s)!");
        callback(null, results);
    });
    //Disconnect to Database
    connection.end((error) => {
        if(error)
        {
            console.log(`An ${error.errno} Error Occured!\n\t${error.code}`);
            return callback(error, null);
        }

        console.log("Successful Disconnection for ShowItems!")
    });
};

module.exports = ITEMMODEL;