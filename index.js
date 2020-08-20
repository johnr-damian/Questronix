const EXPRESS = require("express");
const APPLICATION = EXPRESS();
const BODYPARSER = require("body-parser");
APPLICATION.set("view engine", "ejs");
APPLICATION.use(BODYPARSER.urlencoded({
    extended: true
}));
APPLICATION.use(BODYPARSER.json());

const ITEMROUTES = require("./routes/itemroutes.js");
APPLICATION.use(ITEMROUTES);

APPLICATION.listen(3000, () => {
    console.log("Express is now listening at localhost:3000");
});