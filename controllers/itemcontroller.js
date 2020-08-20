const ITEMMODEL = require("../models/itemmodel.js");

exports.CreateNewItem = (request, response) => {
    console.log("Controller -> CreateNewItem");
};

exports.UpdateExistingItem = (request, response) => {
    console.log("Controller -> UpdateExistingItem");
    console.log(request);
};

exports.DeleteExistingItem = (request, response) => {
    console.log("Controller -> DeleteExistingItem");
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
            if(ItemID === -1)
                response.render("index", {
                    items: results[0]
                });
            else
                response.render("pages/view", {
                    item: results[0][0]
                });
        }
    });
};