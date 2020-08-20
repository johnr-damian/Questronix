const EXPRESS = require("express");
const APPLICATION = EXPRESS();
APPLICATION.set("view engine", "ejs");

const ITEMROUTES = require("./routes/itemroutes.js");
APPLICATION.use(ITEMROUTES);

APPLICATION.listen(3000, () => {
    console.log("Express is now listening at localhost:3000");
});