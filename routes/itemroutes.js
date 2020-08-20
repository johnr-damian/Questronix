const ITEMCONTROLLER = require("../controllers/itemcontroller.js");
const EXPRESS = require("express");
const ROUTER = EXPRESS.Router();

//Index
ROUTER.get("/", ITEMCONTROLLER.ShowItems);

//Create
ROUTER.get("/create", (request, response) => {
    response.render("pages/create");
});
ROUTER.put("/create", ITEMCONTROLLER.CreateNewItem);

//Specific Item
ROUTER.get("/view/:ItemID", ITEMCONTROLLER.ShowItems);
ROUTER.post("/view/:ItemID", ITEMCONTROLLER.UpdateExistingItem);
ROUTER.delete("/view/:ItemID", ITEMCONTROLLER.DeleteExistingItem);

module.exports = ROUTER;