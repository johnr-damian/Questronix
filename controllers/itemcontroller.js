const ITEMMODEL = require("../models/itemmodel.js");

exports.CreateNewItem = (request, response) => {
    console.log("Controller -> CreateNewItem");
    console.log(request.body);

    //Create the item
    ITEMMODEL.CreateNewItem(request.body.Name, request.body.Quantity, request.body.Amount, (error, results) => {
        if(error)
        {
            console.log(error);
            response.status(500).render("Uh oh! An error occured!");
        }
        else
        {
            console.log("Controller -> CreateNewItem END");
            response.sendStatus(200);
        }
    });
};

exports.UpdateExistingItem = (request, response) => {
    console.log("Controller -> UpdateExistingItem");
    
    //Update the item
    ITEMMODEL.UpdateExistingItem(request.body.ItemID, request.body.Name, request.body.Quantity, request.body.Amount, (error, results) => {
        if(error)
        {
            console.log(error);
            response.status(500).render("Uh oh! An error occured!");
        }
        else
        {
            console.log("Controller -> UpdateExistingItem END");
            response.redirect("/");
        }
    });
};

exports.DeleteExistingItem = (request, response) => {
    console.log("Controller -> DeleteExistingItem");

    //Delete the item
    ITEMMODEL.DeleteExistingItem(request.body.ItemID, (error, results) => {
        if(error)
        {
            console.log(error);
            response.status(500).render("Uh oh! An error occured!");
        }
        else
        {
            console.log("Controller -> DeleteExistingItem END");
            response.sendStatus(200);
        }
    });
};

exports.ShowItems = (request, response) => {
    console.log("Controller -> ShowItems");
    let ItemID = ((Object.keys(request.params).length === 0)? -1 : request.params.ItemID);

    //Get the items
    ITEMMODEL.ShowItems(ItemID, (error, results) => {
        if(error)
        {
            console.log(error);
            response.status(500).render("Uh oh! An error occured!");
        }
        else
        {
            console.log(results);
            if(ItemID === -1)
                response.render("index", {
                    items: results[0]
                });
            else
                response.render("pages/view", {
                    item: results[0][0]
                });

            console.log("Controller -> ShowItems END");
        }
    });
};